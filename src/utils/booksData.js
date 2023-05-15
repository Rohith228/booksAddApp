import { useState } from "react";
import { v4 } from "uuid";
import MyContext from "./userContext";

const BooksData = (props) => {
  const state = [
    {
      id: v4(),
      title: "Hunger Games",
      author: "Suzanne Collins",
    },
    {
      id: v4(),
      title: "Geetanjali",
      author: "Rabindranath Tagore",
    },
  ]; // dummy data

  const [data, setData] = useState(state);

  return (
    <MyContext.Provider value={{ data, setData }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default BooksData;
