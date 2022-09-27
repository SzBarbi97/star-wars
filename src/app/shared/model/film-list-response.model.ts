import {Film} from "./film.model";

export class FilmListResponse {
  constructor(public count: number,
              public next: string,
              public previous: string,
              public results: Film[]) {
  }
}
