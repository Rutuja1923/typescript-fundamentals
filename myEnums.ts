enum SeatChoice {
  AISLE = 10,
  MIDDLE = 22,
  WINDOW,
  FOURTH = 44,
}

const rjSeat = SeatChoice.AISLE;

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;
console.log(move);

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

let userRole: Role = Role.Admin;
console.log(userRole); // Output: "ADMIN"

const enum Status {
  Pending = 1,
  InProgress = 2,
  Completed = 3,
}

const statusTask: Status = Status.Pending;
