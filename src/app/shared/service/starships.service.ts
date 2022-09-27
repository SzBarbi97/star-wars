import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StarshipsListResponse} from "../model/starships-list-response.model";
import {Starships} from "../model/starships.model";

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor(private httpClient: HttpClient) {
  }

  getStarshipsList(pageNumber: number, search: string): Observable<StarshipsListResponse> {
    return this.httpClient.get<StarshipsListResponse>(`https://swapi.dev/api/starships?search=${search}&page=${pageNumber}`);
  }

  getStarship(id: number): Observable<Starships> {
    return this.httpClient.get<Starships>(`https://swapi.dev/api/starships/${id}`);
  }
}
