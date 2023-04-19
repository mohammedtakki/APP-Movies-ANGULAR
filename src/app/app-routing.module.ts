import { DetailsComponent } from './components/details/details.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { TvComponent } from './pages/tv/tv.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
  path:"movies",
  component: MoviesComponent
  },

  {
    path:"tv",
    component: TvComponent
    },
    {
      path:"categories",
      component: CategoriesComponent
      },

     
      {
       path : "details/:id",
       component : DetailsComponent
      },
  {
    path : "**",
    redirectTo : "/"
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
