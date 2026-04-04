import { useState } from "react";
import styles from "../css/card.module.css";

function BookCard({ book }) {
  const [count, setCount] = useState(book.tickets);

  const handleClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let btnClass = "btn btn-success";
  let text = "Buy Now";

  if (count === 0) {
    btnClass = "btn btn-danger";
    text = "Sold Out";
  } else if (count <= 2) {
    btnClass = "btn btn-warning";
  }

  return (
    <div className="col-md-3 mb-4">
      <div className={`card ${styles.card}`}>
        <img src={book.image} className="card-img-top" />

        <div className="card-body">
          <h5>{book.name}</h5>

          
          <p>{book.description}</p>

          <p>Price: {book.price} EGP</p>
          <p>Stock: {count}</p>

          <button
            className={btnClass}
            onClick={handleClick}
            disabled={count === 0}
          >
            {text}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;