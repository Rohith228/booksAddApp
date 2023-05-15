import React, { useState, useContext } from "react";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import MyContext from "../utils/userContext";

import "./addBooks.css";

const AddBooks = () => {
  const a = useContext(MyContext);
  const array = a.data;
  const update = a.setData;
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [showtext, setShowText] = useState(false);

  const onChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (title === "" || author === "") {
      alert("Please Enter the title or author");
    } else {
      let newArray = [...array, { id: v4(), title: title, author: author }];
      update(newArray);
      setShowText(true);
    }
  };

  return (
    <div className="bg-container">
      <h1 className="heading">Add a Book</h1>

      <form onSubmit={handleForm} className="form-container">
        <input
          className="input-field"
          onChange={onChangeTitle}
          placeholder="Add title"
          type="value"
        />
        <input
          className="input-field"
          onChange={onChangeAuthor}
          placeholder="Add author"
          type="value"
        />
        <div className="button-container">
          <button className="button" type="submit">
            Add Book
          </button>
          {showtext && <p className="success-text">Book Added Successfully</p>}
        </div>
      </form>
      <Link className="nav-link" to="/">
        Go to List
        <img
          className="arrow-image"
          src="https://cdn-icons-png.flaticon.com/512/44/44621.png"
          alt="arrow"
        />
      </Link>
    </div>
  );
};

export default AddBooks;
