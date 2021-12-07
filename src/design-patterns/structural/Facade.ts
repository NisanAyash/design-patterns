interface ILibrary {
  action(): void;
}

interface IComplexClass {
  operation(): void;
}

interface IFramework {
  init(): void;
}

class Library implements ILibrary {
  constructor() {}

  action() {
    console.log("action running from Library ");
  }
}

class ComplexClass implements IComplexClass {
  constructor() {}

  operation() {
    console.log("operation running from ComplexClass");
  }
}

class Framework implements IFramework {
  constructor() {}

  init() {
    console.log("initializing running from Framework");
  }
}

export default class Facade {
  private lib: ILibrary = new Library();
  private complexClass: IComplexClass = new ComplexClass();
  private framework: IFramework = new Framework();

  operation1() {
    this.framework.init();
    this.complexClass.operation();
  }

  operation2() {
    this.lib.action();
    this.complexClass.operation();
  }
}
