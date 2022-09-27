import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PeopleListResponse} from "../model/people-list-response.model";
import {Observable} from "rxjs";
import {People} from "../model/people.model";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private httpClient: HttpClient) {
  }

  getPeopleList(pageNumber: number, searchValue: string): Observable<PeopleListResponse> {
    return this.httpClient.get<PeopleListResponse>(`https://swapi.dev/api/people?search=${searchValue}&page=${pageNumber}`);
  }

  getPeople(id: number): Observable<People> {
    return this.httpClient.get<People>(`https://swapi.dev/api/people/${id}`);
  }
}
