import axios from "axios";
import { inject, observer } from "mobx-react";
import React, { useState } from "react";
import "../css/add.css";
import Card from "./MovieCard";

const Add = inject('movies_store')(observer((props) => {
  
    const [movie, setMovieInput] = useState("");
    const [resultData, setResults] = useState([]);

    const onChange = async (e) => {
      e.preventDefault();
      setMovieInput(e.target.value);
      await axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=d53fd1d4a7d40d50696b2184a59ab202&language=en-US&page=1&include_adult=false&query=${e.target.value}`
        )
        .then(
          (res) => {
            setResults(res.data.results);
          },
          (error) => {
            console.log(error);
          }
        );
    };

    return (
      <div className="add-page">
        <div className="add-container">
          <div className="input-wrapper">
            <input
              type="text"
              className="input-search"
              placeholder="search for a movie..."
              onChange={onChange}
              value={movie}
              name="contactInput"
            />
          </div>
          <div className="movies-list">
            {resultData.length > 0
              ? resultData.map((m) => <Card key={m.id} movie={m} />)
              : null}
          </div>
        </div>
      </div>
    );
  })

)
export default Add;
