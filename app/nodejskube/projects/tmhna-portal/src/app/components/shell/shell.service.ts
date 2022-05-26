import { Injectable } from '@angular/core';
import { KngShellFactory, KngShellState } from 'kinetic-angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShellFactory } from './shell.factory';

@Injectable({
    providedIn: 'root'
})
export class ShellService {

    private state$: BehaviorSubject<KngShellState> = new BehaviorSubject<KngShellState>(
        ShellFactory.buildState()
    );
    get state(): KngShellState {
        return this.state$.value;
    }
    get stateObservable$(): Observable<KngShellState> {
        return this.state$.asObservable();
    }
    constructor(){}

    public updateState(value: KngShellState): void {
        this.state$.next(value);
    }
}