import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KngSwatch, KngSwatchState } from './definitions';
import { KngSwatchFactory } from './kng-swatch.factory';

@Component({
    selector: 'kng-swatch',
    templateUrl: './template/kng-swatch.component.html',
    styleUrls: ['./template/kng-swatch.component.scss']
})
export class KngSwatchComponent implements KngSwatch {
    
    private state$: BehaviorSubject<KngSwatchState> = new BehaviorSubject<KngSwatchState>(
        KngSwatchFactory.build()
    );
    get state(): KngSwatchState {
        return this.state$.value;
    }
    @Input('state') set state(value: KngSwatchState) {
        this.state$.next(value);
    } 

    constructor() { }

}
