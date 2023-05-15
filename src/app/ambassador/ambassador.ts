export class Ambassador {
  private _firstName: string;
  private _lastName: string;
  private _color: string;
  private _group: string;

  constructor(firstName: string, lastName: string, color: string, group: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._color = color;
    this._group = group;
  }

  set firstName(firstName: string) {
    this._firstName = firstName;
  }

  get firstName(): string {
    return this._firstName;
  }

  set lastName(lastName: string) {
    this._lastName = lastName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`.trim();
  }

  set color(color: string) {
    this._color = color;
  }

  get color(): string {
    return this._color;
  }

  set group(group: string) {
    this._group = group;
  }

  get group(): string {
    return this._group;
  }
}
