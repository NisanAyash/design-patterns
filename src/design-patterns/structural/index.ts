import { Subject, SubjectProxy } from "./Proxy";
import ChargeBatteryAdapter from "./Adapter";
import ConcreteDecorator, { Component } from "./Decorator";
import { Tv, RemoteControl, AdvancedRemoteControl } from "./Bridge";
import Facade from "./Facade";

export default () => {
  console.log("=== ***                     *** ====");
  console.log("=== ***                     *** ====");
  console.log("=== *** STRUCTURAL PATTERNS *** ====");
  console.log("=== ***                     *** ====");
  console.log("=== ***                     *** ====");

  const subject = new Subject("subject");
  const proxySubject = new SubjectProxy("subject");

  console.log("****** Proxy ******");
  console.log({
    subject: subject.action(),
    proxySubject: proxySubject.action(),
  });

  console.log("****** Adapter ******");
  const device = new ChargeBatteryAdapter();
  device.charge("ANDROID");
  device.charge("IPHONE");

  console.log("****** Decorator ******");
  const component = new Component("App");
  const decorator = new ConcreteDecorator(component);
  decorator.render();

  console.log("****** Bridge ******");
  const tv = new Tv();
  const remote = new RemoteControl(tv);
  const advancedRemote = new AdvancedRemoteControl(tv);

  console.log("volume: ", tv.getVolume());
  remote.volumeUp();
  remote.volumeUp();
  console.log("volume: ", tv.getVolume());
  advancedRemote.mute();
  console.log("volume: ", tv.getVolume());

  console.log("****** Facade ******");
  const facade = new Facade();

  facade.operation1();
  facade.operation2();
};
