// Creational Patterns
import Singleton from "./Singleton";
import FactoryMethod from "./FactoryMethod";

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log("Singleton example:");
console.log("instance1 === instance2 ?", instance1 === instance2);

console.log("Factory Method example:");

const factory = new FactoryMethod();
const serviceA = factory.getService("service-a");
const serviceB = factory.getService("service-b");
console.log(serviceA.getName());
console.log(serviceB.getName());
