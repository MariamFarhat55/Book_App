import { books } from "../data/books";
import BookCard from "./BookCard";

function BooksList() {
  return (
    <div className="container mt-5">
      <div className="row">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BooksList;