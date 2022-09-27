import {Vehicles} from "./vehicles.model";

export class VehiclesListResponse {
  constructor(public count: number,
              public next: string,
              public previous: string,
              public results: Vehicles[]) {
  }
}
