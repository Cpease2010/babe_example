import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetTitleService {

  constructor(private http: HttpClient) { }

  getTitle() {
    return this.http.get('http://localhost:3000/any_route_you_want');
  }
}
