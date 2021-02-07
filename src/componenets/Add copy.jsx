import axios from "axios";
import React, { useState } from "react";
import "../css/add.css";
// const express = require("express");
// const router = express.Router();
// const axios = require("axios");
// let fetch = require("fetch");

export default function Add() {
  const [movie, setMovieInput] = useState("");
  // const [result, setResults] = useState([]);

  const onChange = async (e) => {
    e.preventDefault();
    setMovieInput(e.target.value);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=d53fd1d4a7d40d50696b2184a59ab202&language=en-US&page=1&include_adult=false&query=${e.target.value}`
      )
      .then(
        (res) => {
          console.log(res.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  //---------way 2 to get with axios------------------

  // let result = await axios.get(
  //   `https://api.themoviedb.org/3/search/movie?api_key=d53fd1d4a7d40d50696b2184a59ab202&language=en-US&page=1&include_adult=false&query=${e.target.value}`
  // );
  // if (!result) console.log("couldnt make the request");
  // else {
  //   console.log(result);//promise
  //   console.log(result.data);//data
  // }

  //---------way 3 to get with fetch------------------
  /*
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=d53fd1d4a7d40d50696b2184a59ab202&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
          console.log(data.results);
        } else {
          setResults([]);
        }
      });
  };*/

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
        <div className="movies-list"></div>
      </div>
    </div>
  );
}
