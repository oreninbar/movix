import { inject, observer } from "mobx-react";
import React from "react";
import "../css/watch.css";
import CardDisplay from "./CardDisplay";

const Watch = inject("movies_store")(
  observer((props) => {
    return (
      <div className="watchlist-container">
        <div className="list-header">
          <h1 className="list-header__title">
            {props.page === "watched" ? "Watched movies" : "WatchList movies"}
          </h1>
          <div className="list-header__movies-amount">
            {props.page === "watched"
              ? props.movies_store.arrWatched.length
              : props.movies_store.arrWatchList.length}{" "}
            Movies
          </div>
        </div>
        <div className="movies-grid-container">
          {props.page === "watched"
            ? props.movies_store.arrWatched.map((m) => (
                <CardDisplay key={m.id} movie={m} page={"watched"} />
              ))
            : props.movies_store.arrWatchList.map((m) => (
                <CardDisplay key={m.id} movie={m} page={"watchList"} />
              ))}
        </div>
      </div>
    );
  })
);

export default Watch;
