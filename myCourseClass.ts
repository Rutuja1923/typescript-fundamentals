class Courses {
  readonly courseId: string;
  public title: string;
  protected _enrollmentCount: number = 0;
  private rating: number;

  constructor(courseId: string, title: string, rating: number) {
    this.courseId = courseId;
    this.title = title;
    this.rating = rating;
  }

  public enrollStudent() {
    this._enrollmentCount++;
  }

  public get courseRating(): number {
    return this.rating;
  }

  public set courseRating(value: number) {
    if (value < 1 || value > 5) {
      throw new Error("Rating must be between 1 and 5");
    }
    this.rating = value;
  }

  public getEnrollmentCount(): number {
    return this._enrollmentCount;
  }
}

class OnlineCourse extends Courses {
  public platform: string;

  constructor(
    courseId: string,
    title: string,
    rating: number,
    platform: string
  ) {
    super(courseId, title, rating);
    this.platform = platform;
  }

  public courseInfo(): string {
    return `${this.title} is available on ${
      this.platform
    } with ${this.getEnrollmentCount()} students.`;
  }

  public getProtectedEnrollment(): number {
    // Accessing protected member from parent
    return this._enrollmentCount;
  }
}

const tsCourse = new OnlineCourse("TS101", "TypeScript Mastery", 4.8, "Udemy");

tsCourse.enrollStudent();
tsCourse.enrollStudent();

console.log(tsCourse.courseInfo());
// Output: TypeScript Mastery is available on Udemy with 2 students.

console.log("Rating:", tsCourse.courseRating); // Get rating
tsCourse.courseRating = 5; // Set new rating
// tsCourse.courseId = "newID"; // ❌ Error: readonly property
