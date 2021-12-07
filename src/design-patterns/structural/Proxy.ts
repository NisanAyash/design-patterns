interface ISubject {
  action: () => string;
}

class Subject implements ISubject {
  private subject: string;

  constructor(subject: string) {
    this.subject = subject;
  }

  public action() {
    return this.subject;
  }
}

class SubjectProxy implements ISubject {
  private realSubject: ISubject;
  private s: string;

  constructor(subject: string) {
    this.s = subject;
  }

  public action() {
    if (!this.realSubject) {
      this.realSubject = new Subject(this.s);
    }

    /* 
        Business Logic...
    */

    return this.realSubject.action();
  }
}

const subject = new Subject("subject");
const proxySubject = new SubjectProxy("subject");

console.log({
  subject: subject.action(),
  proxySubject: proxySubject.action(),
});
