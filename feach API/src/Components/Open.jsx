import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function OpenPage() {
  const [Booksinfro, setBooks] = useState([]);
  const [isSearchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((response) => {
        setBooks(response.data.books);
      });
  }, []);

  const Accordingtoinput = (event) => {
    const enterinput = event.target.value.toLowerCase();
    if (Booksinfro) {
      const findresults = Booksinfro.filter((book) => {
        return book.title.toLowerCase().startsWith(enterinput);
      });

      setBooks(findresults);
    }
  };

  const handleSearchFocus = () => {
    setSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setSearchFocused(false);
  };

  return (
    <div className="Opening">
      <div className="Open">
        <Link to="/">
          <img
            src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg"
            alt=""
          />
        </Link>
        <input
          type="text"
          placeholder="Search Bar..."
          onChange={Accordingtoinput}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />
        <button className="register">
          <Link to="/form"> Register </Link>
        </button>
      </div>
      {!isSearchFocused && (
        <div className="invite">
          <h1 className="title">Online Books Store</h1>
          <img
            className="logo"
            src="https://img.freepik.com/premium-vector/vector-illustration-hand-taking-book-from-shelf-books-with-covers-spines-retro-style_87693-684.jpg"
            alt=""
          />
        </div>
      )}
      <div className="data">
        {Booksinfro.map((book, index) => (
          <div key={index} className="dataMain">
            <div>
              <img src={book.imageLinks.smallThumbnail} alt={book.title} />
              <h3>{book.title}</h3>
              <h4 style={{color:"White"}}>  Free</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OpenPage;
