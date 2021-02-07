import React from "react";
import {inject, observer} from 'mobx-react'
import "../css/movieCard.css";

const Card =inject('movies_store')(observer((props) => {
  const movie = props.movie;
  let tempArr = [];
  

  function addToWatchList() {
    tempArr = JSON.parse(localStorage.getItem("watchListMovies"));
    if (tempArr) {
      tempArr.push(movie);
      props.movies_store.addToWatchList(movie)
      localStorage.watchListMovies = JSON.stringify(tempArr);
    } else localStorage.watchListMovies = JSON.stringify(movie);
  }

  function addToWatched() {
    tempArr = JSON.parse(localStorage.getItem("watchedMovies"));
    if (tempArr) {
      tempArr.push(movie);
      props.movies_store.addToWatched(movie)
      localStorage.watchedMovies = JSON.stringify(tempArr);
    } else localStorage.watchedMovies = JSON.stringify(movie);
  }

  return (
    <div className="movie-card-container">
      <div className="movie-content">
        <h1 className="movie-name">{props.movie.original_title}</h1>
        <p className="movie-description">{props.movie.overview}</p>
        <div className="buttons">
          <button className="movie-btn add-watchlist" onClick={addToWatchList}>
            <i className="fas fa-star">
              <span className="btn-title">add to whatchlist</span>
            </i>
          </button>
          <button className="movie-btn add-watched" onClick={addToWatched}>
            <i className="fas fa-eye">
              <span className="btn-title">add to whatched</span>
            </i>
          </button>
        </div>
      </div>
      <div className="img-wrapper">
        {props.movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${props.movie.poster_path}`}
            alt={`${props.movie.title} Poster`}
            className={"img-wrapper__poster"}
            style={{ width: "12rem" }}
          />
        ) : (
          <div className="img-wrapper__noposter">no image</div>
        )}
      </div>
    </div>
  );
}));
export default Card;
