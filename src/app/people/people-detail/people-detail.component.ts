import {Component, OnInit} from '@angular/core';
import {People} from "../../shared/model/people.model";
import {PeopleService} from "../../shared/service/people.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {

  people!: People;
  peopleId: number;

  constructor(private peopleService: PeopleService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.peopleId = this.activatedRoute.snapshot.params['id'];
    this.peopleService.getPeople(this.peopleId).subscribe(
      people => this.people = people,
      error => this.router.navigate(['/people'])
    );
  }

  ngOnInit(): void {
  }

}
