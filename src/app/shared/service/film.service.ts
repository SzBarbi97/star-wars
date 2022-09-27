import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FilmListResponse} from "../model/film-list-response.model";
import {Film} from "../model/film.model";

@Injectable({
  providedIn: 'root'
})

export class FilmService {

  constructor(private httpClient: HttpClient) {
  }

  getFilmList(pageNumber: number, search: string): Observable<FilmListResponse> {
    return this.httpClient.get<FilmListResponse>(`https://swapi.dev/api/films?search=${search}&page=${pageNumber}`);
  }

  getFilm(id: number): Observable<Film> {
    return this.httpClient.get<Film>(`https://swapi.dev/api/films/${id}`);
  }
}
