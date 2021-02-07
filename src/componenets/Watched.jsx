import { inject, observer } from "mobx-react";
import React from "react";
import "../css/watched.css";
import Card from "./MovieCard";

const Watched = inject("movies_store")(
  observer((props) => {
    return (
      <div className="watchlist-container">
        <div className="list-header">
          <h1 className="list-header__title">Watched movies</h1>
          <div className="list-header__movies-amount">{props.movies_store.arrWatched.length} Movies</div>
        </div>
        <div className="movies-grid-container">
          {props.movies_store.arrWatched.map((m) => (
            <Card key={m.id} movie={m} />
          ))}
        </div>
      </div>
    );
  })
);

export default Watched;
