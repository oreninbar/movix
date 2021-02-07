import { observable, action, computed } from "mobx";

export class Movies_stores {
  @observable arrWatched;
  @observable arrWatchList;

  constructor() {
    this.arrWatchList = [];
    this.arrWatched = [];
  }

  @computed get findMovieInWatched() {
    return this.arrWatched.find();
  }

  @computed get findMovieInWatchList() {
    return this.arrWatchList.find();
  }

  @action init_watched_arr() {
    let tempArr = JSON.parse(localStorage.getItem("watchedMovies"));
    for (const movie of tempArr) {
      this.addToWatched(movie)
    }
  }

  @action init_watchList_arr() {
    let tempArr = JSON.parse(localStorage.getItem("watchListMovies"));
    for (const movie of tempArr) {
      this.addToWatchList(movie)
    }
  }

  @action addToWatched(movie) {
    this.arrWatched.push(movie);
  }

  @action addToWatchList(movie) {
    this.arrWatchList.push(movie);
  }

  @action removeFromWatched(movie) {
    let temp = this.arrWatched.findIndex(movie);
    this.arrWatched.splice(temp, 1);
  }

  @action removeFromWatchList(movie) {
    let temp = this.arrWatched.findIndex(movie);
    this.arrWatched.splice(temp, 1);
  }

}
