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

enum Services {
  ServiceA = "service-a",
  ServiceB = "service-b",
  DefaultService = "default-service",
}

class ServiceA {
  name: string = Services.ServiceA;

  getName(): string {
    return this.name;
  }
}

class ServiceB {
  name: string = Services.ServiceB;

  getName(): string {
    return this.name;
  }
}

class ServicesFactory {
  constructor() {}

  getService(service: string) {
    switch (service) {
      case Services.ServiceA:
        return new ServiceA();
      case Services.ServiceB:
        return new ServiceB();
      default:
        return Services.DefaultService;
    }
  }
}

export default ServicesFactory;
