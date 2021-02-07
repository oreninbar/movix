import React, { useEffect } from "react";
import "./App.css";
import Header from "./componenets/Header";
import Watchlist from "./componenets/Watchlist";
import Watched from "./componenets/Watched";
import Add from "./componenets/Add";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { observer, inject } from "mobx-react";

const App = inject("movies_store")(
observer((props) => {
    useEffect(() => {
      console.log('enter to useEffect');
      let tempArr1 = JSON.parse(localStorage.getItem("watchListMovies"));
      let tempArr2 = JSON.parse(localStorage.getItem("watchedMovies"));
      if (!tempArr1) {
        localStorage.setItem("watchListMovies", "[]");
      } else {
        props.movies_store.init_watchList_arr();  
        console.log('----start position watch list');
        console.log(props.movies_store.arrWatchList.map(c=>c.title));
      }
      if (!tempArr2) {
        localStorage.setItem("watchedMovies", "[]");
      } else {
        props.movies_store.init_watched_arr();
        console.log('----start position watched');
        console.log(props.movies_store.arrWatched.map(a=> a.title));
      }
    });

    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact render={() => <Watchlist />} />
          <Route path="/watched" exact render={() => <Watched />} />
          <Route path="/add" exact render={() => <Add />} />
        </Switch>
      </Router>
    );
  })
);

export default App;
