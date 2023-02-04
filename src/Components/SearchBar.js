import React, { useState } from "react";
import "../style/SearchBar.css";
import Logo from "../img/logo.png";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          id="terms"
          name="terms"
          placeholder="Search..."
          value={term}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default SearchBar;
