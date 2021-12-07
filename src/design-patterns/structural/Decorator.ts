interface IComponent {
  render(): void;
}

export class Component implements IComponent {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  render() {
    console.log(`${this.name} is rendering`);
  }
}

class Decorator implements IComponent {
  protected component: IComponent;

  constructor(component: IComponent) {
    this.component = component;
  }

  render() {
    console.log("Render from Decorator");
    this.component.render();
  }
}

// extension

class ConcreteDecorator extends Decorator {
  constructor(component: IComponent) {
    super(component);
  }

  render() {
    console.log("Render from ConcreteDecorator");
    super.render();
  }
}

export default ConcreteDecorator;
