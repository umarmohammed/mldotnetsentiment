import { Injectable } from '@angular/core';
import { Subject, Observable, of, BehaviorSubject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError,
  tap
} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SentimentService {
  predictionUrl = `${environment.baseUrl}api/sentimentanalysis/predict/`;

  private loadingSubject$ = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject$.asObservable();

  private textSubject$ = new Subject<string>();
  private text$ = this.textSubject$.pipe(
    debounceTime(300),
    distinctUntilChanged()
  );

  private valueSubject$ = new BehaviorSubject<number>(0);
  value$ = this.valueSubject$.asObservable();

  constructor(private http: HttpClient) {
    this.text$
      .pipe(
        tap(() => this.loadingSubject$.next(true)),
        switchMap(text => this.doPrediction(text).pipe(catchError(() => of(0))))
      )
      .subscribe(value => this.updateValue(value));
  }

  predict(text: string) {
    this.textSubject$.next(text);
  }

  private updateValue(value: number) {
    this.loadingSubject$.next(false);
    this.valueSubject$.next(value);
  }

  private doPrediction(text: string): Observable<number> {
    return !text.trim()
      ? of(50)
      : this.http.get<number>(`${this.predictionUrl}${text}`);
  }
}
