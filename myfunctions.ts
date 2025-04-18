function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string): string {
  return val.toUpperCase();
}

function signUp(name: string, email: string, isPaid: boolean): void {
  console.log("signed up!");
}

const loginUser = (name: string, isPaid: boolean = false): void => {
  console.log("user is logged in!");
};

const getHello = (s: string): string => {
  return `hello ${s}`;
};

console.log(addTwo(5));
console.log(getUpper("rutuja"));
signUp("rutuja", "rutuja@gmail.com", true);
loginUser("rutuja");

//need string + boolean - Union

// function isValid(myVal: number) : boolean {
//     if (myVal < 0) {
//         return false
//     }
//     return "200 OK!"
// }

const heroes = ["thor", "spiderman", "ironman", "dr. strange"];

const heroDetails = heroes.map((hero): string => {
  return `hero is ${hero}`;
});

console.log(heroDetails);

const nums = [1, 4, 6, 9, 10];

const doubles = nums.map((num): number => {
  return num * 2;
});

console.log(doubles);

function fail(errMsg: string): never {
  throw new Error(errMsg);
}
