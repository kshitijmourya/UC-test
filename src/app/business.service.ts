import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Business } from './Business';

@Injectable({
  providedIn: 'root'
})
export class BusinessSearchService {
private  url: string="/assets/data/db.json";
private url2: string= 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getBusinessesData():Observable<Business[]> {
    return this
    .http
    .get<Business[]>(`${this.url2}/api/business`);
        }
}
