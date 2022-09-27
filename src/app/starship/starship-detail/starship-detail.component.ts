import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Starships} from "../../shared/model/starships.model";
import {StarshipsService} from "../../shared/service/starships.service";

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit {

  starship!: Starships;
  starshipId: number;

  constructor(private starshipService: StarshipsService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.starshipId = this.activatedRoute.snapshot.params['id'];
    this.starshipService.getStarship(this.starshipId).subscribe(
      starship => this.starship = starship,
      error => this.router.navigate(['/starships'])
    );
  }

  ngOnInit(): void {
  }

}
