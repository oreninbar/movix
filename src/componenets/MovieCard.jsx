import React from "react";
import { inject } from "mobx-react";
import "../css/movieCard.css";

const Card = inject("movies_store")((props) => {
  return (
    <div className="movie-card-container">
      <div className="movie-content">
        <h1 className="movie-name">{props.movie.original_title}</h1>
        <p className="movie-description">{props.movie.overview}</p>
        <div className="buttons">
          <button
            className="movie-btn add-watchlist"
            onClick={() => {
              props.movies_store.addToWatchListt(props.movie);
            }}
          >
            <i className="fas fa-star">
              <span className="btn-title">add to whatchlist</span>
            </i>
          </button>
          <button
            className="movie-btn add-watched"
            onClick={() => {
              props.movies_store.addToWatchedd(props.movie);
            }}
          >
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
});
export default Card;
