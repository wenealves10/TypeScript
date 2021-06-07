export class Writer {
  private _tool: Tool | null = null;
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  write(): void {
    if (this._tool === null) {
      console.log('No writing tool');
      return;
    }
    this._tool.write();
  }
}

export abstract class Tool {
  constructor(private _name: string) {}

  abstract write(): void;

  get name(): string {
    return this._name;
  }
}

export class Pen extends Tool {
  write(): void {
    console.log(`${this.name} is writing`);
  }
}

export class TypeWriter extends Tool {
  write(): void {
    console.log(`${this.name} is typing`);
  }
}

const writer1 = new Writer('Wene');
const pen1 = new Pen('Bic');
const machine1 = new TypeWriter('Machine Learning');

writer1.tool = pen1;
writer1.tool = machine1;
writer1.tool = null;
writer1.write();
