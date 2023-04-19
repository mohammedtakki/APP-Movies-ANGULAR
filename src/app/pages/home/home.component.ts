import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  UpComingMovies :any[]=[]
  Popular : any []=[]

  constructor( private moviesService : MoviesService){}

  getAllUpComing(){
    this.moviesService.getUpComing().subscribe(({results}:any) => {
      this.UpComingMovies=results 
      // console.log(results)

    })
  }

  ngOnInit(){
     this.getAllUpComing()

     this.getAllPopular()

  }

  getAllPopular(){
    this.moviesService.getPopular().subscribe(({results}:any) => {
      this.Popular=results 
      console.log(results)

    })
  }


}
