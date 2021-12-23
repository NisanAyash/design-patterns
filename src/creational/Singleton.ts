class Singleton {
  private static instance: Singleton;
  private constructor() {}

  public static getInstance() {
    if (!Singleton.instance) {
      const instance = (Singleton.instance = new Singleton());
      return instance;
    }

    return Singleton.instance;
  }

  /* 
  
  
        Business Logic...
  
  
  */
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log("instance1 === instance2 ?", instance1 === instance2);
