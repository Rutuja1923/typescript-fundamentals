type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createNewUser(user: User): User {
  return {
    name: user.name,
    email: user.email,
    isActive: user.isActive,
  };
}

let userVal = createNewUser({ name: "rutuja", email: "rutuja@tech.com", isActive: false });

console.log(userVal)