// Singleton - GoF | Factory Method - GoF

export class Database {
  private static database: Database;

  constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(
      `Connect is created with success Host: ${this.host} User: ${
        this.user
      } Password: ${this.password.replace(/[\w\W]/gi, '*')}`,
    );
  }

  static createDatabase(
    host: string,
    user: string,
    password: string,
  ): Database {
    if (Database.database) return Database.database;
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.createDatabase('localhost', 'root', 'password123');
db1.connect();
const db2 = Database.createDatabase('localhost', 'toor', 'password123');
db2.connect();
