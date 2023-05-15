import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../utils/userContext";
import "./bookList.css";

const BookList = () => {
  const array = useContext(MyContext);

  return (
    <div className="book-list-container">
      <Link className="nav-item" to="/addbook">
        Add a Book
        <img
          className="add-image"
          src="https://img.myloview.com/posters/add-vector-icon-isolated-on-white-background-outline-thin-line-add-icon-for-website-design-and-mobile-app-development-thin-line-add-outline-icon-vector-illustration-400-211519767.jpg"
          alt="add sign"
        />
      </Link>
      {array.data.map((each) => {
        return (
          <ul className="book-list">
            <Link className="book-nav-link" to={`/${each.id}`}>
              <li className="list-item">
                <span
                  className="highlight
                "
                >
                  Title:
                </span>
                {each.title} <span className="highlight">Author:</span>
                {each.author}
                <img
                  className="book-image"
                  src="https://static.vecteezy.com/system/resources/thumbnails/002/219/582/small/illustration-of-book-icon-free-vector.jpg"
                  alt="book-icon"
                />
              </li>
            </Link>
          </ul>
        );
      })}
    </div>
  );
};

export default BookList;
