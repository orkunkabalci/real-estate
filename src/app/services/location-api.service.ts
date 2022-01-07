import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocationApiService {
  constructor(private _http: HttpClient) {}

  getCountries(): Promise<[]> {
    return this._http
      .get('https://countriesnow.space/api/v0.1/countries/codes')
      .toPromise() as any;
  }
  getCityByCountry(country): Promise<[]> {
    return this._http
      .post('https://countriesnow.space/api/v0.1/countries/states', {
        country: country,
      })
      .toPromise() as any;
  }
  getStateByCity(country, state): Promise<[]> {
    return this._http
      .post('https://countriesnow.space/api/v0.1/countries/state/cities', {
        country: country,
        state: state
      })
      .toPromise() as any;
  }
}
