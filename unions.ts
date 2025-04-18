let myVar: number | string = 33;

myVar = "333";

type Student = {
  _id: number;
  name: string;
};

type Admin = {
  _id: number;
  userName: string;
};

let currentUser: Student | Admin = {
  name: "Rutuja",
  _id: 4323,
};

currentUser = {
  userName: "RJ",
  _id: 2312,
};

function getUserId(id: number | string): void {
  if (typeof id === "string") {
    id = id.toLowerCase();
  } else {
    id = id + 2;
  }
  console.log(`userid from db is ${id}`);
}

getUserId(234);
getUserId("BC32R4");

//array
const data1: number[] = [1, 2, 3];
const data2: string[] = ["a", "b", "c"];
const data3: (number | string)[] = [5, "m", 6, "f"];

let seatAllotment: "aisle" | "middle" | "window";

// seatAllotment = "crew";
//Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'
