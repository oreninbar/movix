import { inject, observer } from "mobx-react";
import React from "react";
import "../css/watchlist.css";
import CardDisplay from "./CardDisplay";

const Watchlist=inject('movies_store')(observer((props)=> {
  return (
    <div className="watchlist-container">
      <div className="list-header">
        <h1 className="list-header__title">My watch list</h1>
        <div className="list-header__movies-amount">{props.movies_store.arrWatchList.length} Movies</div>
      </div>
      <div className="movies-grid-container">
      {props.movies_store.arrWatchList.map((m) => (
            <CardDisplay key={m.id} movie={m} page={'watchList'} />
          ))}
      </div>
    </div>
  );
}))

export default  Watchlist;