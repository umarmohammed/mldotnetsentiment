import { Component, OnInit } from '@angular/core';
import { SentimentService } from 'src/app/services/sentiment.service';

@Component({
  selector: 'app-live-sentiment',
  template: `
    <app-happiness-scale
      [value]="sentiment.value$ | async"
    ></app-happiness-scale>

    <app-sentiment-input
      (predict)="sentiment.predict($event)"
      [loading]="sentiment.loading$ | async"
    ></app-sentiment-input>
  `
})
export class LiveSentimentComponent {
  constructor(public sentiment: SentimentService) {}
}
