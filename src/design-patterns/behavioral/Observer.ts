interface IObservable {
  subscribe: (observer: IObserver) => void;
  unsubscribe: (id: number) => void;
  notify: () => void;
}

interface IObserver {
  id: number;
  update: () => void;
}

export class Observable implements IObservable {
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

export class Observer implements IObserver {
  public id: number;

  constructor(id: number) {
    this.id = id;
  }

  update() {
    console.log(`Observer ${this.id} is updating...`);
  }
}
