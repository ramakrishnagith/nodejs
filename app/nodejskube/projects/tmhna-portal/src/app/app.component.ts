import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppFactory } from './app.factory';
import { App, AppState } from './definitions/app.interface';

@Component({
  selector: 'tmhna-portal-root',
  templateUrl: './template/app.component.html',
  styleUrls: ['./template/app.component.scss']
})
export class AppComponent implements OnInit, App {
  private state$: BehaviorSubject<AppState> = new BehaviorSubject<AppState>(
    AppFactory.buildAppState()
  );
  get state(): AppState {
    return this.state$.value;
  }
  ngOnInit(): void {
    
  }
}
