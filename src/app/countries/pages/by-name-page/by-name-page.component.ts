import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-name-page',
  templateUrl: './by-name-page.component.html',
  styles: [
  ]
})
export class ByNamePageComponent implements OnInit {
  public isLoading: boolean = false;
  public countries: Country[] = [];
  public initialValue: string = "";
  constructor(private countriesService: CountriesService) { }
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;

  }

  searchByCountry(term: string): void {
    this.isLoading = true
    this.countriesService.searchCountry(term).subscribe(countries => {
      this.countries = countries
      this.isLoading = false
    })
  }
}
