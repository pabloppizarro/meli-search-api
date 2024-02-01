export class UserSearch {
  private _key: string;
  private _deviceId: string;
  private _created: Date; // maybe autogenerated by DB Engine.
  protected constructor(key: string, deviceId: string) {
    this._key = key;
    this._deviceId = deviceId;
  }
}
