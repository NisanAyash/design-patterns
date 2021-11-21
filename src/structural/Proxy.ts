// Proxy

// Definition (Wikipedia):
// the proxy pattern is a software design pattern.
// A proxy, in its most general form,
// is a class functioning as an interface to something else.
// The proxy could interface to anything: a network connection,
// a large object in memory, a file, or some other resource that is expensive or impossible to duplicate

interface ISubject {
  action: () => string;
}

export class Subject implements ISubject {
  private subject: string;

  constructor(subject: string) {
    this.subject = subject;
  }

  public action() {
    return this.subject;
  }
}

export class SubjectProxy implements ISubject {
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
