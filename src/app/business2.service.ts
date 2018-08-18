import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  url = 'http://localhost:4000';
  _url: string="/data/db.json";
  url3: 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getBusinesses() {
    return this
            .http
            .get(`${this.url3}/api/business`);
        }
}
