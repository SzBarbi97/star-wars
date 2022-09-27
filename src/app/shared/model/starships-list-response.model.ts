import {Starships} from "./starships.model";

export class StarshipsListResponse {
  constructor(public count: number,
              public next: string,
              public previous: string,
              public results: Starships[]) {
  }
}
