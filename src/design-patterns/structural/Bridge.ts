interface Device {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  getVolume(): number;
  setVolume(vol: number): void;
  getChannel(): void;
  setChannel(ch: string): void;
  MAX_VOLUME: number;
  MIN_VOLUME: number;
}

interface IRemoteControl {
  togglePower(): void;
  volumeUp(): void;
  volumeDown(): void;
}

export class Tv implements Device {
  private id: string;
  private on: boolean;
  private volume: number;
  private channel: string;
  public MAX_VOLUME: number;
  public MIN_VOLUME: number;

  constructor() {
    this.id = `TV_ID_${Math.floor(Math.random() * 1000)}`;
    this.on = false;
    this.volume = 7;
    this.MAX_VOLUME = 10;
    this.MIN_VOLUME = 0;
    this.channel = "12";
  }

  isEnabled() {
    return this.on;
  }

  enable() {
    this.on = true;
  }

  disable() {
    this.on = false;
  }

  getVolume() {
    return this.volume;
  }

  setVolume(vol: number) {
    this.volume = vol;
  }

  getChannel() {
    return this.channel;
  }

  setChannel(ch: string) {
    this.channel = ch;
  }
}

export class RemoteControl implements IRemoteControl {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  togglePower() {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumeUp() {
    const currentVolume = this.device.getVolume();
    if (currentVolume < this.device.MAX_VOLUME) {
      this.device.setVolume(currentVolume + 1);
    }
  }

  volumeDown() {
    const currentVolume = this.device.getVolume();
    if (currentVolume > this.device.MIN_VOLUME) {
      this.device.setVolume(currentVolume - 1);
    }
  }
}

export class AdvancedRemoteControl extends RemoteControl {
  constructor(device: Device) {
    super(device);
  }

  mute() {
    this.device.setVolume(0);
  }
}
