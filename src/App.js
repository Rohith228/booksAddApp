import { BrowserRouter, Routes, Route } from "react-router-dom";
import BooksList from "./components/booksList";
import AddBooks from "./components/addBooks";
import BookDetails from "./components/bookDetails";
import BooksData from "./utils/booksData";

const App = () => {
  return (
    <>
      <BooksData>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BooksList />} />
            <Route path="/addbook" element={<AddBooks />} />
            <Route path="/:id" element={<BookDetails />} />
          </Routes>
        </BrowserRouter>
      </BooksData>
    </>
  );
};

export default App;
