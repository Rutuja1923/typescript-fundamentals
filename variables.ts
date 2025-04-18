let greetings: string = "hello, rutuja";
let userId: number = 324244;
let isLoggedIn: boolean = false;
console.log(greetings);

//type inference - the ts autmatically infers the type of code, there is no need  to mention the type

let message = "hello";
console.log(message.toUpperCase());

let n = 44;
console.log(n.toFixed(2));

let hero;

function getHero() {
  return "thor";
}

hero = getHero();  //any - automatic inferring.

//any shoulc be avoided - it indicates that the type checking is closed for that variable. 