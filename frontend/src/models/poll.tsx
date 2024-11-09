import { Option } from "./option";

export class Poll {

  id: number;
  name: string;
  options: Array<Option>;

  constructor(id: number, name: string, options: Array<Option>) {
    this.id = id;
    this.name = name;
    this.options = options;
  }
}