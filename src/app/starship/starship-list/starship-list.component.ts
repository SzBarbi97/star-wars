import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {StarshipsService} from "../../shared/service/starships.service";
import {StarshipsListResponse} from "../../shared/model/starships-list-response.model";

@Component({
  selector: 'app-starship',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.css']
})
export class StarshipListComponent implements OnInit {

  starshipsList?: StarshipsListResponse;
  pageNumber!: number;
  searchValue: string = '';
  searchFormControl: FormControl = new FormControl('');

  starshipsOptions: string[] = ['CR90 corvette', 'Star Destroyer', 'Sentinel-class landing craft', 'Death Star',
    'Millennium Falcon', 'Y-wing', 'X-wing', 'TIE Advanced x1', 'Executor', 'Rebel transport',
    'Slave 1', 'Imperial shuttle', 'EF76 Nebulon-B escort frigate', 'Calamari Cruiser', 'A-wing',
    'B-wing', 'Republic Cruiser', 'Droid control ship', 'Naboo fighter', 'Naboo Royal Starship',
    'Scimitar', 'J-type diplomatic barge', 'AA-9 Coruscant freighter', 'Jedi starfighter', 'H-type Nubian yacht',
    'Republic Assault ship', 'Solar Sailer', 'Trade Federation cruiser', 'Theta-class T-2c shuttle',
    'Republic attack cruiser', 'Naboo star skiff', 'Jedi Interceptor', 'arc-170', 'Baking clan frigte',
    'Belbullab-22 starfighter', 'V-wing', 'Imperial I-class Star Destroyer', 'DS-1 Orbital Battle Station',
    'YT-1300 light freighter', 'BTL Y-wing', 'T-65 X-wing', 'Twin Ion Engine Advanced x1',
    'Executor-class star dreadnought', 'GR-75 medium transport', 'Firespray-31-class patrol and attack',
    'Lambda-class T-4a shuttle', 'MC80 Liberty type Star Cruiser', 'RZ-1 A-wing Interceptor',
    'A/SF-01 B-wing starfighter', 'Consular-class cruiser', 'Lucrehulk-class Droid Control Ship', 'N-1 starfighter',
    'J-type 327 Nubian royal starship', 'Star Courier', 'Botajef AA-9 Freighter-Liner',
    'Delta-7 Aethersprite-class interceptor', 'Acclamator I-class assault ship', 'Punworcca 116-class interstellar sloop',
    'Providence-class carrier/destroyer', 'Senator-class Star Destroyer', 'J-type star skiff',
    'Eta-2 Actis-class light interceptor', 'Aggressive Reconnaissance-170 starfighte', 'Munificent-class star frigate',
    'Alpha-3 Nimbus-class V-wing starfighter'];

  filteredStarshipsOptions: string[] = this.starshipsOptions;

  constructor(private starshipsService: StarshipsService,
              private activatedRoute: ActivatedRoute,
              private router: Router,) {
    this.activatedRoute.queryParams.subscribe(
      (queryParams) => {
        this.pageNumber = +queryParams['page'] || 1;
        this.searchValue = queryParams['search'] || '';
        this.starshipsList = undefined;
        this.loadStarshipList();
      }
    );
  }

  ngOnInit(): void {
    this.searchFormControl.valueChanges.subscribe(
      searchValue => {
        searchValue = searchValue.toLowerCase();
        this.filteredStarshipsOptions = this.starshipsOptions.filter(option => option.toLowerCase().includes(searchValue));
      }
    )
  }

  loadStarshipList(): void {
    this.starshipsService.getStarshipsList(this.pageNumber, this.searchValue).subscribe(
      starshipsListResponse => this.starshipsList = starshipsListResponse,
      error => this.router.navigate([''])
    );
  }

  getStarshipId(url: string): string {
    return url
      .replace("https://swapi.dev/api/starships/", '')
      .replace('/', '');
  }

  navigateToStarshipDetail(id: string): void {
    this.router.navigate(['starship/' + id]);
  }

  navigateToPage(pageNumber?: number): void {
    let queryParams: { search?: string, page?: number } = {};

    if (this.searchValue) {
      queryParams.search = this.searchValue;
    }

    if (pageNumber) {
      queryParams.page = pageNumber;
    }

    this.router.navigate(['/starship'], {queryParams: queryParams});
  }

  search(): void {
    this.navigateToPage();
  }

}
