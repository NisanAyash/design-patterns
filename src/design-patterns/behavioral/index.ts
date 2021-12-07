import NumbersIterator from "./Iterator";
import { Observable, Observer } from "./Observer";

export default () => {
  console.log("=== ***                     *** ====");
  console.log("=== ***                     *** ====");
  console.log("=== *** BEHAVIORAL PATTERNS *** ====");
  console.log("=== ***                     *** ====");
  console.log("=== ***                     *** ====");

  console.log("****** Iterator ******");
  const numbersIterator = new NumbersIterator([1, 2, 3, 4, 5]);
  const iterator = numbersIterator.createIterator();

  console.log("Iterator: ", iterator);
  console.log("next", iterator.next());
  console.log("hasNext", iterator.hasNext());

  console.log("****** Observer ******");
  const observable = new Observable();

  const observer1 = new Observer(1);
  const observer2 = new Observer(2);
  const observer3 = new Observer(3);

  observable.subscribe(observer1);
  observable.subscribe(observer2);
  observable.subscribe(observer3);

  observable.unsubscribe(2);

  observable.notify();
};
