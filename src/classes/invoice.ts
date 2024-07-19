import { hasFormatter } from "../interfaces/hasFormatter";

// classes
export class Invoice implements hasFormatter {
  constructor(
    readonly client: string, //this type of assignment works only with access modifiers
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}
