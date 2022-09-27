import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {VehiclesService} from "../../shared/service/vehicles.service";
import {VehiclesListResponse} from "../../shared/model/vehicles-list-response.model";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {

  vehiclesList?: VehiclesListResponse;
  pageNumber!: number;
  searchValue: string = '';
  searchFormControl: FormControl = new FormControl('');

  vehiclesOptions: string[] = ['Sand Crawler', 'T-16 skyhopper', 'X-34 landspeeder', 'TIE/LN starfighter', 'Snowspeeder',
    'TIE bomber', 'AT-AT', 'AT-ST', 'Storm IV Twin-Pod cloud car', 'Sail barge',
    'Bantha-II cargo skiff', 'TIE/IN interceptor', 'Imperial Speeder Bike', 'Vulture Droid', 'Multi-Troop Transport',
    'Armored Assault Tank', 'Single Trooper Aerial Platform', 'C-9979 landing craft', 'Tribubble bongo', 'Sith speeder',
    'Zephyr-G swoop bike', 'Koro-2 Exodrive airspeeder', 'XJ-6 airspeeder', 'LAAT/i', 'LAAT/c',
    'AT-TE', 'SPHA', 'Flitknot speeder', 'Neimoidian shuttle', 'Geonosian starfighter',
    'Tsmeu-6 personal wheel bike', 'Emergency Firespeeder', 'Droid tri-fighter', 'Oevvaor jet catamaran',
    'Raddaugh Gnasp fluttercraft', 'Clone turbo tank', 'Corporate Alliance tank droid', 'Droid gunship', 'AT-RT',
    'Digger Crawler', 'Twin Ion Engine/Ln Starfighter', 't-47 airspeeder', 'TIE/sa bomber',
    'All Terrain Armored Transport', 'All Terrain Scout Transport', 'Storm IV Twin-Pod', 'Modified Luxury Sail Barge',
    'Bantha-II', 'Twin Ion Engine Interceptor', '74-Z speeder bike', 'Vulture-class droid starfighter',
    'Armoured Assault Tank', 'FC-20 speeder bike', 'Low Altitude Assault Transport/infranty',
    'Low Altitude Assault Transport/carrier', 'All Terrain Tactical Enforcer', 'Self-Propelled Heavy Artillery',
    'Sheathipede-class transport shuttle', 'Nantex-class territorial defense', 'Fire suppression speeder', 'tri-fighter',
    'HAVw A6 Juggernaut', 'NR-N99 Persuader-class droid enforcer', 'HMP droid gunship', 'All Terrain Recon Transport'];

  filteredVehiclesOptions: string[] = this.vehiclesOptions;

  constructor(private vehiclesService: VehiclesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,) {
    this.activatedRoute.queryParams.subscribe(
      (queryParams) => {
        this.pageNumber = +queryParams['page'] || 1;
        this.searchValue = queryParams['search'] || '';
        this.vehiclesList = undefined;
        this.loadVehiclesList();
      }
    );
  }

  ngOnInit(): void {
    this.searchFormControl.valueChanges.subscribe(
      searchValue => {
        searchValue = searchValue.toLowerCase();
        this.filteredVehiclesOptions = this.vehiclesOptions.filter(option => option.toLowerCase().includes(searchValue));
      }
    )
  }

  loadVehiclesList(): void {
    this.vehiclesService.getVehiclesList(this.pageNumber, this.searchValue).subscribe(
      vehiclesListResponse => this.vehiclesList = vehiclesListResponse,
      error => this.router.navigate([''])
    );
  }

  getVehiclesId(url: string): string {
    return url
      .replace("https://swapi.dev/api/vehicles/", '')
      .replace('/', '');
  }

  navigateToVehiclesDetail(id: string): void {
    this.router.navigate(['vehicles/' + id]);
  }

  navigateToPage(pageNumber?: number): void {
    let queryParams: { search?: string, page?: number } = {};

    if (this.searchValue) {
      queryParams.search = this.searchValue;
    }

    if (pageNumber) {
      queryParams.page = pageNumber;
    }

    this.router.navigate(['/vehicles'], {queryParams: queryParams});
  }

  search(): void {
    this.navigateToPage();
  }
}
