function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }

  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("please provide id!");
  }
  id?.toLowerCase();
}

//but don't do this, because, u will be missing out on '' ( null string)
function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

interface Patient {
  name: string;
  email: string;
}

interface AdminDoc {
  name: string;
  email: string;
  isAdmin: boolean;
}

function checkIsAdmin(account: Patient | AdminDoc): boolean {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
  return false;
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// if u would be returning  a boolean value fot isfish,
// you cannot use isFish to identofy if the fish is actually a fish,
// when u hover over the pet variable in the getfood function ,
// you would get to see that the pet is either Bird | Fish

function getfood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet; //(parameter) pet: Fish
    return "fish food";
  }
  pet; //(parameter) pet: Bird
  return "bird foot";
}
