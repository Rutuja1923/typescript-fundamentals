const scores: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

//might accept number, and return a string - not a good practice
function indentityTwo(val: any): any {
  return val;
}

//the type of the val is locked - the type of input can be anything, but the output is also of the same type
function identiryThree<Type>(val: Type): Type {
  return val;
}

identiryThree(3); //function identiryThree<3>(val: 3): 3
identiryThree("hello"); //identiryThree(val: "hello"): "hello"

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: string;
  batchID: number;
}

identityFour<Bottle>({ brand: "Milton", type: "Gym", batchID: 2113 });

function getSearchProducts<T>(products: T[]): T {
  //do some databse operations
  const myIndex = 3;
  return products[myIndex];
}

//generics with arrow functions
const getMoreSearchProducts = <T>(products: Array<T>): T => {
  //do some database operations
  const myIdx = 4;
  return products[myIdx];
};
// the T, : comma is for indicating that it's not a jsx tag but a generics type. so it's quite common

function sampleFunc<T, U>(valeOne: T, valTwo: U): object {
  return {
    valeOne,
    valTwo,
  };
}

sampleFunc(3, "4");

interface Database {
  connection: string;
  username: string;
  password: string;
}

function dbConnect<T, U extends Database>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}

function sampleFunc2<T, U extends number>(valeOne: T, valTwo: U): object {
  return {
    valeOne,
    valTwo,
  };
}

sampleFunc2(3, 4);

interface Quiz {
  name: string;
  type: string;
  isActive: boolean;
  noOfQuestions: number;
  time: number;
}

interface CourseDet {
  name: string;
  author: string;
  subject: string;
}

class sellable<T> {
  public cart: T[] = [];
  addToCart(products: T) {
    this.cart.push(products);
  }
}
