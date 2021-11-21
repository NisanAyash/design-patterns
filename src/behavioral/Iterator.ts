interface IIterator {
  next: () => any;
  hasNext: () => boolean;
}

interface Aggregator {
  createIterator: () => IIterator;
}

class _Iterator implements IIterator {
  private collection: any[] = [];
  private index: number = 0;

  constructor(collection: any) {
    this.collection = collection;
  }

  next() {
    const current = this.collection[this.index];
    this.index++;
    return current;
  }

  hasNext() {
    return this.index < this.collection.length;
  }
}

class NumbersIterator implements Aggregator {
  private collection: any[] = [];

  constructor(collection: any) {
    this.collection = collection;
  }

  public createIterator(): IIterator {
    return new _Iterator(this.collection);
  }
}

export default NumbersIterator;
