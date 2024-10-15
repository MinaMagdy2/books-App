//Just a copy from movie not working on it, not important
import React from "react";
import { Link } from "react-router-dom";


export default function MovieCard({ book }) {
  return (
    <div className="col-md-2">
      <Link to={`/book/${book.id}`}>
        <img className="w-100 " src={pathImg(book.image)} alt="" />
        <h1
          className="text-truncate h4 text-center mt-1 text-warning"
          data-toggle="tooltip"
          data-placement="start"
          title={book.title ? book.title : "unkown"}
        >
          {book.title ? movie.title : "unkown"}
        </h1>
      </Link>
    </div>
  );
}
