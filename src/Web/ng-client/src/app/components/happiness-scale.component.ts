import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-happiness-scale',
  template: `
    <div class="container">
      <h4>Your sentiment is {{ value | number: '0.0' }}%</h4>
      <p class="sentiment-icons">😡🙁😐😃😍</p>
      <div class="sentiment">
        <div class="marker">
          <div [ngStyle]="{ 'margin-left': 'calc(' + value + '% - 10px)' }">
            ▲
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['happiness-scale.component.scss']
})
export class HappinessScaleComponent {
  @Input()
  value: number;
}
