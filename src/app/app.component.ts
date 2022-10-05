import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of, Subject } from 'rxjs';
import { AdviceService } from './services/advice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  id: number = 1;
  advice: string = "It is never too late to be who you might have been";
  advice$?: Observable<any>;
  loadingError$ = new Subject<boolean>();

  constructor(private adviceService: AdviceService) {

  }

  ngOnInit(): void {
    this.getAdvice();
  }

  getAdvice() {
    this.advice$ = this.adviceService.getAdvice().pipe(
      catchError((error) => {
        console.log('error loading the advice', error);
        this.loadingError$.next(true);
        return of();
      }));
  }

  onReload() {
    window.location.reload();
  }


}
