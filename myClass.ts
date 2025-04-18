class Person {
  name: string; //public
  private _email: string;
  city: string;
  readonly country: string = "India";
  private readonly id: number;

  constructor(name: string, email: string, city: string, id: number) {
    this.name = name;
    this._email = email;
    this.city = city;
    this.id = id;
  }
  public getEmail(): string {
    return this._email;
  }

  public set email(newEmail: string) {
    if (newEmail.includes("@")) {
      this._email = newEmail;
    } else {
      console.log("Invalid email address.");
    }
  }

  get getId(): number {
    return this.id;
  }

  get getAppleEmail(): string {
    return `apple${this._email}`;
  }
}

const me = new Person("Rutuja", "rutuja@dev.com", "Belguam", 543);
me.city = "Belagavi";

// me.country = "Nepal"; //Cannot assign to 'country' because it is a read-only property.
// me.email = "new@email.com"; //Property 'email' is private and only accessible within class 'Person'

console.log(me.getEmail());
console.log(me.getId);
console.log(me.getAppleEmail);
me.email = "newmail@dev.com";
// console.log(me.email); //undefined
console.log(me.getEmail());

me.email = "invalidEmail";
console.log(me);

class Subject {
  readonly id: string = "bcs301";
  private _courseCount = 1;

  constructor(
    public subName: string,
    public cieMarks: number,
    public sieMarks: number,
    private grades: number = 4,
    public isPractical: boolean
  ) {}

  set couseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error("Course number shouldn't be less than 1");
    }
    this._courseCount = courseNum;
  }
}
