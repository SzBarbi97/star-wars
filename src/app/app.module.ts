import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PeopleListComponent} from './people/people-list/people-list.component';
import {PeopleDetailComponent} from './people/people-detail/people-detail.component';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FilmListComponent} from './film/film-list/film-list.component';
import {StarshipListComponent} from './starship/starship-list/starship-list.component';
import {CalendarConverterPipe} from './shared/pipe/calendar-converter.pipe';
import {StarshipDetailComponent} from './starship/starship-detail/starship-detail.component';
import {FilmDetailComponent} from "./film/film-detail/film-detail.component";
import {VehiclesListComponent} from "./vehicles/vehicles-list/vehicles-list.component";
import {VehiclesDetailComponent} from './vehicles/vehicles-detail/vehicles-detail.component';
import {ImageSrcDirective} from './shared/directive/image-src.directive';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {FooterComponent} from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PeopleDetailComponent,
    NavbarComponent,
    FilmListComponent,
    StarshipListComponent,
    VehiclesListComponent,
    CalendarConverterPipe,
    FilmDetailComponent,
    StarshipDetailComponent,
    VehiclesDetailComponent,
    ImageSrcDirective,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
