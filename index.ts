import Singleton from "./src/creational/Singleton";
import FactoryMethod from "./src/creational/FactoryMethod";
import NumbersIterator from "./src/behavioral/Iterator";
import { Observable, Observer } from "./src/behavioral/Observer";
import { Subject, SubjectProxy } from "./src/structural/Proxy";
import ChargeBatteryAdapter from "./src/structural/Adapter";
import ConcreteDecorator, { Component } from "./src/structural/Decorator";
import {
  Tv,
  RemoteControl,
  AdvancedRemoteControl,
} from "./src/structural/Bridge";

console.log("=== *** CREATIONAL PATTERNS *** ====");

console.log("SINGLETON: ");
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log("instance1 === instance2 ?", instance1 === instance2);

console.log("FACTORY METHOD:");
const factory = new FactoryMethod();
const service1 = factory.getService("SERVICE_A");
const service2 = factory.getService("service-b");

console.log(service1.getName());
console.log(service2.getName());

console.log("=== *** BEHAVIORAL PATTERNS *** ====");
console.log("ITERATOR: ");
const numbersIterator = new NumbersIterator([1, 2, 3, 4, 5]);
const iterator = numbersIterator.createIterator();

console.log("Iterator: ", iterator);
console.log("next", iterator.next());
console.log("hasNext", iterator.hasNext());

console.log("OBSERVER: ");
const observable = new Observable();

const observer1 = new Observer(1);
const observer2 = new Observer(2);
const observer3 = new Observer(3);

observable.subscribe(observer1);
observable.subscribe(observer2);
observable.subscribe(observer3);

observable.unsubscribe(2);

observable.notify();

console.log("=== *** STRUCTURAL PATTERNS *** ====");

const subject = new Subject("subject");
const proxySubject = new SubjectProxy("subject");

console.log("PROXY: ");
console.log({ subject: subject.action(), proxySubject: proxySubject.action() });

console.log("ADAPTER: ");
const device = new ChargeBatteryAdapter();
device.charge("ANDROID");
device.charge("IPHONE");

console.log("DECORATOR: ");
const component = new Component("App");
const decorator = new ConcreteDecorator(component);
decorator.render();

console.log("BRIDGE: ");

const tv = new Tv();
const remote = new RemoteControl(tv);
const advancedRemote = new AdvancedRemoteControl(tv);

console.log("volume: ", tv.getVolume());
remote.volumeUp();
remote.volumeUp();
console.log("volume: ", tv.getVolume());
advancedRemote.mute();
console.log("volume: ", tv.getVolume());
