const emptyArr: [] = [];
// emptyArr.push(1); //Argument of type '1' is not assignable to parameter of type 'never'.

const fruits: string[] = [];

fruits.push("apple");
fruits.push("banana");

const evenNos: Array<number> = [];

evenNos.push(0);
evenNos.push(2, 4, 6);

console.log(fruits);
console.log(evenNos);

type Point = {
  x: number;
  y: number;
  z?: number;
};

const points: Point[] = [];

points.push({ x: 4, y: 6 });
points.push({ x: 9, y: 4, z: 2 });

console.log(points);
