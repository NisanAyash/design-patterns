interface Device {
  charge(): void;
}

enum PHONE_TYPE {
  ANDROID = "ANDROID",
  IPHONE = "IPHONE",
}

class Android implements Device {
  constructor() {}

  charge() {
    console.log("Android is charging");
  }
}

class Iphone implements Device {
  constructor() {}

  charge() {
    console.log("Iphone is charging");
  }
}

class ChargeBatteryAdapter {
  constructor() {}

  charge(type: any) {
    if (type === PHONE_TYPE.ANDROID) {
      const device = new Android();
      device.charge();
    } else if (type === PHONE_TYPE.IPHONE) {
      const device = new Iphone();
      device.charge();
    } else {
      console.log("Type is missing");
    }
  }
}

const device = new ChargeBatteryAdapter();
device.charge("ANDROID");
device.charge("IPHONE");
