import { observable, action } from "mobx";

export class Movie_store {
  title;
  description;
  year;
  imgPoster;
  id;
  @observable watched = false;
  @observable watchList = false;

  constructor(title, year, description, imgPoster) {
    this.title = title;
    this.description = description;
    this.year = year;
    this.imgPoster = imgPoster;
  }



  @action changeWatchedStatus(){
      this.watched=!this.watched
  }
  @action addToWatchListStatus(){
      this.watchList=!this.watchList
  }
}
