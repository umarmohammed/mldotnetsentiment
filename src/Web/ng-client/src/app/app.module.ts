import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { LiveSentimentComponent } from './containers/live-sentiment.component';
import { HappinessScaleComponent } from './components/happiness-scale.component';
import { SentimentInputComponent } from './components/sentiment-input.component';

@NgModule({
  declarations: [
    AppComponent,
    LiveSentimentComponent,
    HappinessScaleComponent,
    SentimentInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
