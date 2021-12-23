interface IDetails {
  date: Date;
  size: number;
}

interface Prototype {
  clone(): this;
}

class _Document implements Prototype {
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

const _document = new _Document("plain.txt");
const documentClone = _document.clone();

console.log("document === documentClone ? ", _document === documentClone);
console.log(
  "document.details === documentClone.details ? ",
  _document.details === documentClone.details
);

documentClone.file = "plain-copy.txt";

const files = [_document, documentClone];

console.log("Two different files in array", files);
