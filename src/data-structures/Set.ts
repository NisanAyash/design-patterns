import Iterator from "../design-patterns/behavioral/Iterator";

interface ISet {
  add(element: any): void;
  has(element: any): boolean;
  delete(element: any): boolean;
  clear(): void;
}

class _Set implements ISet {
  public collection: any;

  constructor(list: any) {
    this.collection = [];

    list.forEach((item: any) => this.add(item));
  }

  public get size() {
    return this.collection.length;
  }

  has(element: any) {
    const elm = this.collection.indexOf(element);
    return elm !== -1;
  }

  add(element: any) {
    if (this.has(element) === false) {
      this.collection.push(element);
    }
  }

  clear() {
    this.collection = [];
  }

  delete(element: any) {
    const findIndex = this.collection.findIndex((elm: any) => elm === element);

    if (findIndex === -1) {
      return false;
    } else {
      this.collection.splice(findIndex, 1);
      return true;
    }
  }

  /**
   * @description
   * The values() method returns a new Iterator object that contains the values for each element in the Set object in insertion order.
   * @description
   *  In this case i'm using with the Iterator pattern from the `design patterns` folder
   * @description
   * MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values
   *
   */

  values() {
    return new Iterator(this.collection);
  }
}

const set = new _Set([1, 2, 3, 3, 3, 2, 1]);

console.log(set.has(3));
console.log(set.size);

console.log(set.delete(2));

const iterator = set.values();
console.log(iterator.next());
