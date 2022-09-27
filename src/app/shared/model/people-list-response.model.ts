import {People} from "./people.model";

export class PeopleListResponse {
  constructor(public count: number,
              public next: string,
              public previous: string,
              public results: People[]) {
  }
}
