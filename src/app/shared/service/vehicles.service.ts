import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {VehiclesListResponse} from "../model/vehicles-list-response.model";
import {Vehicles} from "../model/vehicles.model";

@Injectable({
  providedIn: 'root'
})

export class VehiclesService {

  constructor(private httpClient: HttpClient) {
  }

  getVehiclesList(pageNumber: number, search: string): Observable<VehiclesListResponse> {
    return this.httpClient.get<VehiclesListResponse>(`https://swapi.dev/api/vehicles?search=${search}&page=${pageNumber}`);
  }

  getVehicle(id: number): Observable<Vehicles> {
    return this.httpClient.get<Vehicles>(`https://swapi.dev/api/vehicles/${id}`);
  }
}
