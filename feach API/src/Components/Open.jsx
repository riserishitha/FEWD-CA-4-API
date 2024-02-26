import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// initializing the state using setstate.
function OpenPage() {
  const [originalBooksInfo, setOriginalBooksInfo] = useState([]);
  const [filteredBooksInfo, setFilteredBooksInfo] = useState([]);
  const [isSearchFocused, setSearchFocused] = useState(false);
// fetching the data using axios.
  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((response) => {
        setOriginalBooksInfo(response.data.books);
        setFilteredBooksInfo(response.data.books);
      });
  }, []);
// filtering the data based on the given input in the search bar.
  const BasedonInput = (e) => {
    const afterEnteringInput = e.target.value.toLowerCase();
    const findResults = originalBooksInfo.filter((book) => {
      return book.title.toLowerCase().startsWith(afterEnteringInput);
    });
    setFilteredBooksInfo(findResults);
  };

  const handleSearchFocus = () => {
    setSearchFocused(true);
  };
  // returing the html for the component.
  return (
    <div className="Opening">
      <div className="Open">
        <Link to="/">
          <img
            src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg"
            alt=""
          />
        </Link>
        {/* appling onchange and onfocus for the input box */}
        <input
          type="text"
          placeholder="Search Bar..."
          onChange={BasedonInput}
          onFocus={handleSearchFocus}
        />
        <button className="register">
          <Link to="/form"> Register </Link>
        </button>
      </div>
      {/* hidding it when i click on the search bar */}
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
      {/* mapingout the data which we featching by using api */}
      <div className="data">
        {filteredBooksInfo.map((book, index) => (
          <div key={index} className="dataMain">
            <div>
              <img src={book.imageLinks.smallThumbnail} alt={book.title} />
              <h3>{book.title}</h3>
              <h4 style={{ color: "White" }}>  Free</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OpenPage;
