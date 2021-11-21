// Creational Patterns
import Singleton from "./src/creational/Singleton";
import FactoryMethod from "./src/creational/FactoryMethod";

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
