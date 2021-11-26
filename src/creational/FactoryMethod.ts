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
