interface IObservable {
  subscribe: (observer: IObserver) => void;
  unsubscribe: (id: number) => void;
  notify: () => void;
}

interface IObserver {
  id: number;
  update: () => void;
}

class Observable implements IObservable {
  private observers: IObserver[] = [];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: IObserver) {
    this.observers.push(observer);
  }

  unsubscribe(id: number) {
    this.observers = this.observers.filter((o) => o.id !== id);
  }

  notify() {
    this.observers.forEach((observer) => observer.update());
  }
}

class Observer implements IObserver {
  public id: number;

  constructor(id: number) {
    this.id = id;
  }

  update() {
    console.log(`Observer ${this.id} is updating...`);
  }
}

const observable = new Observable();

const observer1 = new Observer(1);
const observer2 = new Observer(2);
const observer3 = new Observer(3);

observable.subscribe(observer1);
observable.subscribe(observer2);
observable.subscribe(observer3);

observable.unsubscribe(2);

observable.notify();
