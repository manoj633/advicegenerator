import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  constructor(private http: HttpClient) {
  }

  getAdvice(): Observable<any> {
    return this.http.get('https://api.adviceslip.com/advice');
  }
}
