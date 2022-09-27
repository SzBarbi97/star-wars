import {Component, OnInit} from '@angular/core';
import {PeopleListResponse} from "../../shared/model/people-list-response.model";
import {PeopleService} from "../../shared/service/people.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  peopleList?: PeopleListResponse;
  pageNumber!: number;
  searchValue: string = '';
  searchFormControl: FormControl = new FormControl('');

  peopleOptions: string[] = ['Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa',
    'Owen Lars', 'Beru Whitesun lars', 'R5-D4', 'Biggs Darklighter', 'Obi-Wan Kenobi',
    'Anakin Skywalker', 'Wilhuff Tarkin', 'Chewbacca', 'Han Solo', 'Greedo',
    'Jabba', 'Wedge Antilles', 'Jek Tono Porkins', 'Yoda', 'Palpatine',
    'Boba Fett', 'IG-88', 'Bossk', 'Lando Calrissian', 'Lobot',
    'Ackbar', 'Mon Mothma', 'Arvel Crynyd', 'Wicket Systri Warrick', 'Nien Nunb',
    'Qui-Gon Jinn', 'Nute Gunray', 'Finis Valorum', 'Padmé Amidala', 'Jar Jar Binks',
    'Roos Tarpals', 'Rugor Nass', 'Ric Olié', 'Watto', 'Sebulba',
    'Quarsh Panaka', 'Shmi Skywalker', 'Darth Maul', 'Bib Fortuna', 'Ayla Secura',
    'Ratts Tyerel', 'Dud Bolt', 'Gasgano', 'Ben Quadinaros', 'Mace Windu',
    'Ki-Adi-Mundi', 'Kit Fisto', 'Eeth Koth', 'Adi Gallia', 'Saesee Tiin',
    'Yarael Poof', 'Plo Koon', 'Mas Amedda', 'Gregar Typho', 'Cordé',
    'Cliegg Lars', 'Poggle the Lesser', 'Luminara Unduli', 'Barriss Offee', 'Dormé',
    'Dooku', 'Bail Prestor Organa', 'Jango Fett', 'Zam Wesell', 'Dexter Jettster',
    'Lama Su', 'Taun We', 'Jocasta Nu', 'R4-P17', 'Wat Tambor',
    'San Hill', 'Shaak Ti', 'Grievous', 'Tarfful', 'Raymus Antilles',
    'Sly Moor', 'Tion Medon'];

  filteredPeopleOptions: string[] = this.peopleOptions;

  constructor(private peopleService: PeopleService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(
      (queryParams) => {
        this.pageNumber = +queryParams['page'] || 1;
        this.searchValue = queryParams['search'] || '';
        this.peopleList = undefined;
        this.loadPeopleList();
      }
    )
  }

  ngOnInit(): void {
    this.searchFormControl.valueChanges.subscribe(
      searchValue => {
        searchValue = searchValue.toLowerCase();
        this.filteredPeopleOptions = this.peopleOptions.filter(option => option.toLowerCase().includes(searchValue));
      }
    )
  }

  loadPeopleList(): void {
    this.peopleService.getPeopleList(this.pageNumber, this.searchValue).subscribe(
      peopleListResponse => this.peopleList = peopleListResponse,
      error => this.router.navigate([''])
    );
  }

  getPeopleId(url: string): string {
    return url
      .replace("https://swapi.dev/api/people/", '')
      .replace('/', '');
  }

  navigateToPeopleDetail(id: string): void {
    this.router.navigate(['people/' + id]);
  }

  navigateToPage(pageNumber: number): void {
    let extras = this.searchValue
      ? {queryParams: {search: this.searchValue, page: pageNumber}}
      : {queryParams: {page: pageNumber}};
    this.router.navigate(['/people'], extras);
  }

  search(): void {
    let extras = this.searchValue
      ? {queryParams: {search: this.searchValue, page: 1}}
      : {};
    this.router.navigate(['/people'], extras);
  }

}
