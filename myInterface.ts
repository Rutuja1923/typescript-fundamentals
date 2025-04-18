interface Customer {
  readonly dbId: number;
  email: String;
  userId: number;
  googleID?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponId: string): number;
}

//reopening of interface
interface Customer {
  specialToken: string;
}

const customer: Customer = {
  dbId: 232,
  email: "hc@gmail.com",
  userId: 323432,
  startTrail() {
    return "Hello";
  },
  getCoupon: (couponId: "H234V") => {
    return 20;
  },
  specialToken: "443lnk",
};
