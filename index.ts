// Creational Patterns
import Singleton from "./src/creational/Singleton";
import FactoryMethod from "./src/creational/FactoryMethod";
// Behavioral Patterns
import NumbersIterator from "./src/behavioral/Iterator";
import { Observable, Observer } from "./src/behavioral/Observer";
// Structural Patterns
import { Subject, SubjectProxy } from "./src/structural/Proxy";
console.log("=== *** CREATIONAL PATTERNS *** ====");

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log("SINGLETON: ");
console.log("instance1 === instance2 ?", instance1 === instance2);

console.log("FACTORY METHOD:");

const factory = new FactoryMethod();
const s1 = factory.getService("SERVICE_A");
const s2 = factory.getService("service-b");

console.log(s1.getName());
console.log(s2.getName());

console.log("=== *** BEHAVIORAL PATTERNS *** ====");

const numbersIterator = new NumbersIterator([1, 2, 3, 4, 5]);
const iterator = numbersIterator.createIterator();
console.log("Iterator: ", iterator);
console.log("next", iterator.next());
console.log("hasNext", iterator.hasNext());

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
