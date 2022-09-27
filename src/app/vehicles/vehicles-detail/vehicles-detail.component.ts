import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Vehicles} from "../../shared/model/vehicles.model";
import {VehiclesService} from "../../shared/service/vehicles.service";

@Component({
  selector: 'app-vehicles-detail',
  templateUrl: './vehicles-detail.component.html',
  styleUrls: ['./vehicles-detail.component.css']
})
export class VehiclesDetailComponent implements OnInit {

  vehicle!: Vehicles;
  vehicleId: number;

  constructor(private vehicleService: VehiclesService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.vehicleId = this.activatedRoute.snapshot.params['id'];
    this.vehicleService.getVehicle(this.vehicleId).subscribe(
      vehicle => this.vehicle = vehicle,
      error => this.router.navigate(['/vehicles'])
    );
  }

  ngOnInit(): void {
  }

}
