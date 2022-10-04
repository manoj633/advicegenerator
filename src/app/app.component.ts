import { Component, OnInit } from '@angular/core';
import { AdviceService } from './services/advice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  id: number = 1;
  advice: string = "It is never too late to be who you might have been";

  constructor(private adviceService: AdviceService) {

  }

  ngOnInit(): void {
    this.getAdvice();
  }

  getAdvice() {
    this.adviceService.getAdvice().subscribe(response => {
      this.id = response.slip.id;
      this.advice = response.slip.advice;
    });
  }



}
