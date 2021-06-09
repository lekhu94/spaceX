import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: "root",
})

export class UserServices {

  constructor(private http: HttpClient) { }

  getLaunches(limit, launch, land, year) {
    let url = 'https://api.spacexdata.com/v3/launches';
    let params = new HttpParams().append('limit', limit);
    if(year) params = params.append('launch_year', year);
    if(launch == 'true') params = params.append('launch_success', 'true');
    if(land == 'true') params = params.append('land_success', 'true');
    return this.http.get<Response>(url, { params });
  }

  filterOptions = new EventEmitter();

}