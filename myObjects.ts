const User = {
  name: "Rutuja",
  email: "rutujajirage@gmail.com",
  isActive: true,
};

function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}

createUser({ name: "riya", isPaid: false });

//what if i want to pass more information - pass a object
let newUser = { name: "mia", isPaid: false, emial: "mia@yahoo.com" };
createUser(newUser);
//it doesn't throw any error - it's bad part

function createCourse(): { name: string; price: number } {
  return { name: "ReactJs", price: 399 };
}

//type aliasing
type MyString = string;

type bool = boolean;

function myData(name: MyString, isStudent: bool): void {
  console.log(name, isStudent);
}
