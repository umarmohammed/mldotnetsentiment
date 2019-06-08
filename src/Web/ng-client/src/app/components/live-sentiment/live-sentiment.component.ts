import { Component, OnInit } from '@angular/core';
import { SentimentService } from 'src/app/services/sentiment.service';

@Component({
  selector: 'app-live-sentiment',
  templateUrl: './live-sentiment.component.html',
  styleUrls: ['./live-sentiment.component.scss']
})
export class LiveSentimentComponent implements OnInit {
  text = '';

  constructor(public sentiment: SentimentService) {}

  ngOnInit() {}
}
