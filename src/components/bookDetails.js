import { useContext } from "react";
import MyContext from "../utils/userContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./bookDetails.css";

const BookDetails = () => {
  const a = useContext(MyContext);
  const booksData = a.data;
  const uid = useParams();
  const filteredData = booksData.filter((each) => each.id === uid.id);
  return (
    <div className="book-details">
      <h1 className="title-heading">
        This book name is {filteredData[0].title}
      </h1>
      <h1 className="author-heading">Written By {filteredData[0].author}</h1>
      <Link className="nav-home" to="/">
        Go Home
        <img
          className="home-image"
          src="https://cdn.icon-icons.com/icons2/2568/PNG/512/home_house_icon_153740.png"
          alt="home-icon"
        />
      </Link>
    </div>
  );
};

export default BookDetails;
