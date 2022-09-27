import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {FilmListResponse} from "../../shared/model/film-list-response.model";
import {FilmService} from "../../shared/service/film.service";

@Component({
  selector: 'app-film',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  filmList?: FilmListResponse;
  pageNumber!: number;
  searchValue: string = '';
  searchFormControl: FormControl = new FormControl('');

  filmOptions: string[] = ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi', 'The Phantom Menace',
    'Attack of the Clones', 'Revenge of the Sith'];

  filteredFilmOptions: string[] = this.filmOptions;

  constructor(private filmService: FilmService,
              private activatedRoute: ActivatedRoute,
              private router: Router,) {
    this.activatedRoute.queryParams.subscribe(
      (queryParams) => {
        this.pageNumber = +queryParams['page'] || 1;
        this.searchValue = queryParams['search'] || '';
        this.filmList = undefined;
        this.loadFilmList();
      }
    );
  }

  ngOnInit(): void {
    this.searchFormControl.valueChanges.subscribe(
      searchValue => {
        searchValue = searchValue.toLowerCase();
        this.filteredFilmOptions = this.filmOptions.filter(option => option.toLowerCase().includes(searchValue));
      }
    )
  }

  loadFilmList(): void {
    this.filmService.getFilmList(this.pageNumber, this.searchValue).subscribe(
      filmListResponse => this.filmList = filmListResponse,
      error => this.router.navigate([''])
    );
  }

  getFilmId(url: string): string {
    return url
      .replace("https://swapi.dev/api/films/", '')
      .replace('/', '');
  }

  navigateToFilmDetail(id: string): void {
    this.router.navigate(['films/' + id]);
  }

  navigateToPage(pageNumber?: number): void {
    let queryParams: { search?: string, page?: number } = {};

    if (this.searchValue) {
      queryParams.search = this.searchValue;
    }

    if (pageNumber) {
      queryParams.page = pageNumber;
    }

    this.router.navigate(['/films'], {queryParams: queryParams});
  }

  search(): void {
    this.navigateToPage();
  }

}
