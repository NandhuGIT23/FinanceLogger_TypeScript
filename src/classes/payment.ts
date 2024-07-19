import { hasFormatter } from "../interfaces/hasFormatter";

// classes
export class Payment implements hasFormatter {
  constructor(
    readonly recipient: string, //this type of assignment works only with access modifiers
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} is owed £${this.amount} for ${this.details}`;
  }
}
