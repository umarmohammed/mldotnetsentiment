import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sentiment-input',
  template: `
    <div class="container">
      <div class="content">
        <mat-form-field>
          <input
            matInput
            placeholder="Type some text"
            (keyup)="predict.emit($event.target.value)"
          />
          <mat-hint>Type any text like a short product review</mat-hint>
        </mat-form-field>
        <mat-spinner
          [class.show]="loading"
          [diameter]="30"
          [strokeWidth]="3"
        ></mat-spinner>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        padding: 10px;
      }

      .content {
        width: 300px;
        padding: 20px;
        background: #fafafa;
      }

      .container,
      .content {
        display: flex;
        justify-content: center;
      }

      .mat-form-field {
        min-width: 250px;
        margin-right: 5px;
      }

      .mat-spinner {
        position: relative;
        top: 10px;
        visibility: hidden;
      }

      .mat-spinner.show {
        visibility: visible;
      }
    `
  ]
})
export class SentimentInputComponent {
  @Input()
  loading: boolean;

  @Output()
  predict: EventEmitter<string> = new EventEmitter<string>();
}
