export abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected attack: number,
    protected life: number,
  ) {}

  attacking(character: Character): void {
    this.staff();
    character.loseLife(this.attack);
  }

  private loseLife(attackForce: number): void {
    this.life -= attackForce;
    this.agonizingPhrase();
  }

  private agonizingPhrase(): void {
    console.log(
      `${this.emoji} is being attacked... your life is of ${this.life}`,
    );
  }

  protected abstract staff(): void;
}

export class Warrior extends Character {
  protected emoji = '\u{1F9DD}';

  protected staff(): void {
    console.log(`${this.emoji} I hate this hedgehog!`);
  }
}

export class Monster extends Character {
  protected emoji = '\u{1F47E}';

  protected staff(): void {
    console.log(
      `${this.emoji} I think if we are good, it will be a good world!`,
    );
  }
}

const warriorOne = new Warrior('Sonic', 100, 1000);
const alienOne = new Monster('Alien', 50, 1000);

warriorOne.attacking(alienOne);
alienOne.attacking(warriorOne);
warriorOne.attacking(alienOne);
alienOne.attacking(warriorOne);
warriorOne.attacking(alienOne);
alienOne.attacking(warriorOne);
