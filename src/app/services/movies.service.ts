import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http : HttpClient) { }

  apiKey : string ="503fce63b1e619c76a549dd34dcb4833"
  baseUrl : string = "https://api.themoviedb.org/3"
  option : string = "upcoming"

  getUpComing(){
    return this.http.get(`${this.baseUrl}/movie/${this.option}?api_key=${this.apiKey}`)
  }

  getPopular(){
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=503fce63b1e619c76a549dd34dcb4833")
  }

  getOneMovie(id : number){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=503fce63b1e619c76a549dd34dcb4833`)
  }

}
