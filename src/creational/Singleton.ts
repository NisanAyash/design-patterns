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

export default Singleton;
