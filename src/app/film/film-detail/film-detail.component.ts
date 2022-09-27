import { Component, OnInit } from '@angular/core';
import {Starships} from "../../shared/model/starships.model";
import {StarshipsService} from "../../shared/service/starships.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Film} from "../../shared/model/film.model";
import {FilmService} from "../../shared/service/film.service";

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  film!: Film;
  filmId: number;

  constructor(private filmService: FilmService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.filmId = this.activatedRoute.snapshot.params['id'];
    this.filmService.getFilm(this.filmId).subscribe(
      film => this.film = film,
      error => this.router.navigate(['/films'])
    );
    console.log(activatedRoute.snapshot.routeConfig?.path);
  }

  ngOnInit(): void {
  }

}
