import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KngFooter, KngFooterState } from './definitions/footer.interface';
import { KngFooterFactory } from './kng-footer.factory';

@Component({
    selector: 'kng-footer',
    templateUrl: './template/kng-footer.component.html',
    styleUrls: ['./template/kng-footer.component.scss']
})
export class KngFooterComponent implements KngFooter {
    private state$: BehaviorSubject<KngFooterState> = new BehaviorSubject<KngFooterState>(
        KngFooterFactory.buildState()
    );
    @Input('state') set state(value: KngFooterState) {
        this.state$.next(value);
    }
    get state(): KngFooterState {
        return this.state$.value;
    }
    constructor() { }
}
