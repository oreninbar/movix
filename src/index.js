import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "mobx-react";
import { Movies_stores } from "./stores/moviesListsStore";

let movies_store = new Movies_stores();
let stores = { movies_store };

ReactDOM.render(
  <Provider {...stores}>
    <App  />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
