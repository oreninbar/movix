import React, { useEffect } from "react";
import "./App.css";
import Header from "./componenets/Header";
// import Watchlist from "./componenets/Watchlist";
// import Watched from "./componenets/Watched";
import Watch from "./componenets/Watch";
import Add from "./componenets/Add";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { observer, inject } from "mobx-react";

const App = inject("movies_store")(
observer((props) => {
    useEffect(() => {
      let tempArr1 = JSON.parse(localStorage.getItem("watchListMovies"));
      let tempArr2 = JSON.parse(localStorage.getItem("watchedMovies"));
      if (!tempArr1) {
        localStorage.setItem("watchListMovies", "[]");
      } else {
        props.movies_store.init_watchList_arr();  
      }
      if (!tempArr2) {
        localStorage.setItem("watchedMovies", "[]");
      } else {
        props.movies_store.init_watched_arr();
      }
    });

    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact render={() => <Watch page={'watchList'}/>} />
          <Route path="/watched" exact render={() => <Watch page={'watched'}/>} />
          <Route path="/add" exact render={() => <Add />} />
        </Switch>
      </Router>
    );
  })
);

export default App;
