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
    console.log('enter to remove from watched ');
    console.log(movie.id);
    // let temp = this.arrWatched.findIndex(movie);
    // console.log(temp);
    // this.arrWatched.splice(temp, 1);
  }
  
  @action removeFromWatchList(movie) {
    console.log('enter to remove from watchList ');
    console.log(movie.title);
    // let temp = this.arrWatched.findIndex(movie);
    // console.log(temp);
    // this.arrWatched.splice(temp, 1);
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
