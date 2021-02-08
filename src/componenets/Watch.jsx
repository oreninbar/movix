import { inject, observer } from "mobx-react";
import React from "react";
import "../css/watched.css";
import CardDisplay from "./CardDisplay";

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
            <CardDisplay key={m.id} movie={m} page={'watched'} />
          ))}
        </div>
      </div>
    );
  })
);

export default Watched;
