import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PeopleDetailComponent} from './people/people-detail/people-detail.component';
import {PeopleListComponent} from './people/people-list/people-list.component';
import {FilmListComponent} from "./film/film-list/film-list.component";
import {StarshipListComponent} from "./starship/starship-list/starship-list.component";
import {VehiclesListComponent} from "./vehicles/vehicles-list/vehicles-list.component";
import {StarshipDetailComponent} from "./starship/starship-detail/starship-detail.component";
import {VehiclesDetailComponent} from "./vehicles/vehicles-detail/vehicles-detail.component";
import {FilmDetailComponent} from "./film/film-detail/film-detail.component";

const routes: Routes = [
  {path: 'people', component: PeopleListComponent},
  {path: 'people/:id', component: PeopleDetailComponent},
  {path: 'films', component: FilmListComponent},
  {path: 'films/:id', component: FilmDetailComponent},
  {path: 'starship', component: StarshipListComponent},
  {path: 'starship/:id', component: StarshipDetailComponent},
  {path: 'vehicles', component: VehiclesListComponent},
  {path: 'vehicles/:id', component: VehiclesDetailComponent},
  {path: '**', redirectTo: 'people'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
