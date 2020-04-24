class DirtyPerson {
  constructor(
    private name: string,
    private age: number,
    private homeCityName: string,
    private homeStreetName: string,
    private homeZipCode: number
  ) {}

  get description() {
    return `${this.name}, ${this.age} years old, lives in ${this.address}`;
  }

  get address() {
    return `${this.homeStreetName} in ${this.homeCityName} (${this.homeZipCode})`;
  }
}

const dirtyJoe = new DirtyPerson(
  "Joe",
  26,
  "Seattle",
  "Dirty Codes' street",
  25030
);

console.log(dirtyJoe.description);
