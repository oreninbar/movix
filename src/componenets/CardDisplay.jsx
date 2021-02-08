import { inject, observer } from "mobx-react";
import React from "react";
import "../css/movieCard.css";

const CardDisplay = inject("movies_store")(
  observer((props) => {

    function remove() {
      console.log(props.page);
      if (props.page === "watched") {
        console.log(props.movie.title);
        props.movies_store.removeFromWatched(props.movie);
      } else {
        props.movies_store.removeFromWatchList(props.movie);
      }
    }

    return (
      <div className="movie-container">
        <div className="img-container">
          {props.movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${props.movie.poster_path}`}
              alt={`${props.movie.title} Poster`}
              className={"img-wrapper__poster"}
              style={{ width: "16rem" }}
            />
          ) : (
            <div className="img-wrapper__noposter">no image</div>
          )}
          <div className="buttons">
            <button
              className="movie-btn add-watchlist"
              onClick={
                props.page === "watched"
                  ? () => {
                      props.movies_store.addToWatchListt(props.movie);
                    }
                  : () => {
                      props.movies_store.addToWatchedd(props.movie);
                    }
              }
            >
              <i className="fas fa-star">
                <span className="btn-title">
                  {props.page === "watched"
                    ? "Add to watchlist"
                    : "Add to Watched"}
                </span>
              </i>
            </button>
            <button className="movie-btn remove" onClick={remove}>
              <i className="fas fa-trash-alt">
                <span className="btn-title">Remove</span>
              </i>
            </button>
          </div>
        </div>
      </div>
    );
  })
);

export default CardDisplay;
