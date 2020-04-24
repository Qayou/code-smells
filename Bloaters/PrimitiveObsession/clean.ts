class City {
  constructor(public name: string, public zipCode: number) {}

  toString() {
    return `${this.name} (${this.zipCode})`;
  }
}

class Address {
  constructor(public city: City, public streetName: string) {}

  toString() {
    return `${this.streetName} in ${this.city}`;
  }
}

class CleanPerson {
  constructor(
    public name: string,
    public age: number,
    public address: Address
  ) {}

  get description() {
    return `${this.name}, ${this.age} years old, lives in ${this.address}`;
  }
}

const seattle = new City("Seattle", 25030);
const cleanJoeAddress = new Address(seattle, "11th Dirty Codes' street");
const cleanJoe = new CleanPerson("Joe", 26, cleanJoeAddress);

console.log(cleanJoe.description);
