import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveSentimentComponent } from './live-sentiment.component';

describe('LiveSentimentComponent', () => {
  let component: LiveSentimentComponent;
  let fixture: ComponentFixture<LiveSentimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveSentimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveSentimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
