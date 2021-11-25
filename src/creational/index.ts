import Singleton from "./Singleton";
import FactoryMethod from "./FactoryMethod";
import { Document } from "./Prototype";

export default () => {
  console.log("=== ***                     *** ====");
  console.log("=== ***                     *** ====");
  console.log("=== *** CREATIONAL PATTERNS *** ====");
  console.log("=== ***                     *** ====");
  console.log("=== ***                     *** ====");

  console.log("****** Singletone ******");
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  console.log("instance1 === instance2 ?", instance1 === instance2);

  console.log("****** Factory Method ******");
  const factory = new FactoryMethod();
  const service1 = factory.getService("SERVICE_A");
  const service2 = factory.getService("SERVICE_B");

  console.log(service1.getName());
  console.log(service2.getName());

  console.log("****** Prototype ******");
  const document = new Document("plain.txt");
  const documentClone = document.clone();

  console.log("document === documentClone ? ", document === documentClone);
  console.log(
    "document.details === documentClone.details ? ",
    document.details === documentClone.details
  );

  console.log("document", document);
  console.log("documentClone", documentClone);
};
