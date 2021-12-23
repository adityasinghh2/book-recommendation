import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Action: [
    { name: "A Game of Thrones", rating: "4.4/5" },
    { name: "The Hobbit,or There and Back Again", rating: "4.3/5" }
  ],

  Anime: [
    { name: "My Hero Academia, Vol.1", rating: "4.7/5" },
    { name: "Tokyo Ghoul, Vol.1", rating: "4.7/5" }
  ],

  Fiction: [
    { name: "Neuromancer", rating: "3.9/5" },
    { name: "The Martian", rating: "4.4/5" }
  ],

  Fantasy: [
    { name: "The Lord Of The Rings", rating: "4.5/5" },
    { name: "The Dragon Reborn", rating: "4.2/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Fantasy");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1> 🕮 Book Recommendations </h1>
      <p style={{ fontSize: "large" }}>
        My Book Recommendation app recommends books of my taste and genre,have a
        look!!
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li key={book.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
