// Factory Method

// Definition (Wikipedia):
// In class-based programming, the factory method pattern is
// a creational pattern that uses factory methods to deal with
//  the problem of creating objects without having to specify
//  the exact class of the object that will be created.
// This is done by creating objects by calling a
// factory method—either specified
// in an interface and implemented by child classes,
// or implemented in a base class and optionally
//  overridden by derived classes—rather than by
//  calling a constructor.

enum SERVICES {
  SERVICE_A = "SERVICE_A",
  SERVICE_B = "SERVICE_B",
}

class ServiceA {
  name: string = "SERVICE_A";

  constructor() {}

  getName(): string {
    return this.name;
  }
}

class ServiceB {
  name: string = "SERVICE_B";

  constructor() {}

  getName(): string {
    return this.name;
  }
}

class ServicesFactory {
  constructor() {}

  getService(service: string) {
    switch (service) {
      case SERVICES.SERVICE_A:
        return new ServiceA();
      case SERVICES.SERVICE_B:
        return new ServiceB();
      default:
        return new ServiceA();
    }
  }
}

export default ServicesFactory;
