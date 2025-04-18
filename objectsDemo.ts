type Course = {
  readonly _id: string;
  course_name: string;
  semester: number;
  cie_marks: number;
  sie_marks: number;
  has_credits: boolean;
  credits: number;
  exam_hours?: number;
  exam_type: string;
  isPractical?: boolean;
  isTheory?: boolean;
  isOnlyPractical?: boolean;
  practical_hours?: number;
};

const course1: Course = {
  _id: "bcs601",
  course_name: "cloud computing",
  semester: 6,
  cie_marks: 50,
  sie_marks: 50,
  has_credits: true,
  credits: 4,
  exam_hours: 3,
  exam_type: "theory/practical",
  isPractical: true,
  isTheory: true,
  isOnlyPractical: false,
  practical_hours: 3,
};

const course2: Course = {
  _id: "bcsl606",
  course_name: "machine learning lab",
  semester: 6,
  cie_marks: 50,
  sie_marks: 50,
  has_credits: true,
  credits: 1,
  exam_type: "practical",
  isPractical: true,
  isTheory: false,
  isOnlyPractical: true,
  practical_hours: 3,
};

course1.course_name = course1.course_name.toUpperCase();

//course1._id = course1._id.toUpperCase();
//Cannot assign to '_id' because it is a read-only property

type CardNumber = {
  cardnumber: string;
};

type CardDate = {
  carddate: string;
};

type CardDetails = CardNumber & {
  cardIssueDate: CardDate;
  cardExpiryDate: CardDate;
  cvv: number;
  cardHolderName: string;
  isVisa: boolean;
};

const card: CardDetails = {
  cardnumber: "bj234nm",
  cardHolderName: "Rutuja",
  isVisa: false,
  cvv: 578,
  cardIssueDate: { carddate: "01-09-2024" },
  cardExpiryDate: { carddate: "01-09-2027" },
};
