import { observable, action, computed } from "mobx";

export class Movies_stores {
  @observable arrWatched;
  @observable arrWatchList;
  tempArr = [];

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
      this.addIntoWatched(movie);
    }
  }

  @action init_watchList_arr() {
    let tempArr = JSON.parse(localStorage.getItem("watchListMovies"));
    for (const movie of tempArr) {
      this.addIntoWatchList(movie);
    }
  }

  @action addIntoWatched(movie) {
    this.arrWatched.push(movie);
  }

  @action addIntoWatchList(movie) {
    this.arrWatchList.push(movie);
  }

  @action removeFromWatched(movie) {
    console.log("enter to remove from watched ");
    this.arrWatched.splice(this.arrWatched.indexOf(movie), 1);
    localStorage.watchedMovies = JSON.stringify(this.arrWatched);
  }

  @action removeFromWatchList(movie) {
    console.log("enter to remove from watched ");
    this.arrWatchList.splice(this.arrWatchList.indexOf(movie), 1);
    localStorage.watchListMovies = JSON.stringify(this.arrWatchList);
  }

  @action addToWatchListt(movie) {
    this.tempArr = JSON.parse(localStorage.getItem("watchListMovies"));
    if (this.tempArr) {
      this.tempArr.push(movie);
      this.arrWatchList.push(movie);
      localStorage.watchListMovies = JSON.stringify(this.tempArr);
    } else localStorage.watchListMovies = JSON.stringify(movie);
  }

  @action addToWatchedd(movie) {
    this.tempArr = JSON.parse(localStorage.getItem("watchedMovies"));
    if (this.tempArr) {
      this.tempArr.push(movie);
      this.arrWatched.push(movie);
      localStorage.watchedMovies = JSON.stringify(this.tempArr);
    } else localStorage.watchedMovies = JSON.stringify(movie);
  }
}
