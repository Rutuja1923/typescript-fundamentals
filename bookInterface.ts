interface Book {
  readonly isbn: string;
  title: string;
  author: string;
  pages: number;
  isAvailable: boolean;
  getSummary(): string;
}

interface EBook extends Book {
  fileSizeMB: number;
  format: "PDF" | "EPUB" | "MOBI";
}

interface Borrowable {
  borrowerName: string;
  dueDate: string;
}

const book1: Book = {
  isbn: "978-3-16-148410-0",
  title: "Atomic Habits",
  author: "James Clear",
  pages: 320,
  isAvailable: true,
  getSummary() {
    return `${this.title} by ${this.author}, ${this.pages} pages.`;
  },
};

// You can't do this because isbn is readonly
// book1.isbn = "another-isbn";

const ebook1: EBook = {
  isbn: "978-0-13-235088-4",
  title: "Clean Code",
  author: "Robert C. Martin",
  pages: 464,
  isAvailable: true,
  fileSizeMB: 5,
  format: "PDF",
  getSummary() {
    return `${this.title} by ${this.author}, ${this.pages} pages, Format: ${this.format}`;
  },
};

interface BorrowableEBook extends EBook, Borrowable {}

const borrowedEbook: BorrowableEBook = {
  isbn: "978-1-59327-584-6",
  title: "Eloquent JavaScript",
  author: "Marijn Haverbeke",
  pages: 472,
  isAvailable: false,
  fileSizeMB: 4,
  format: "EPUB",
  borrowerName: "Rutuja",
  dueDate: "2025-04-30",
  getSummary() {
    return `${this.title} borrowed by ${this.borrowerName}, due on ${this.dueDate}`;
  }
};
