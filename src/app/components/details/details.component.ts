import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  film : any={}
  
  

  constructor( private route : ActivatedRoute,private moviesService : MoviesService){}

  ngOnInit(): void {
    this.route.params.subscribe((params :any)=>
    {this.getMovie(params.id)
     console.log(params)
   })
  }

  getMovie(id : number){
    this.moviesService.getOneMovie(id).subscribe((response: any)  => this.film =response)
  }

}
