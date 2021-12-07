interface IDetails {
  date: Date;
  size: number;
}

interface Prototype {
  clone(): this;
}

export class Document implements Prototype {
  public file: string;
  public details: IDetails;

  constructor(file: string) {
    this.file = file;

    this.details = {
      date: new Date(),
      size: Math.floor(Math.random() * 500),
    };
  }

  clone() {
    const clone = Object.create(this);

    clone.details = {
      ...this.details,
      prototype: { ...this },
    };

    return clone;
  }
}
