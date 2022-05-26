import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KngContent, KngContentState } from './definitions/kng-content.interface';
import { KngContentFactory } from './kng-content.factory';

@Component({
    selector: 'kng-content',
    templateUrl: './template/kng-content.component.html',
    styleUrls: ['./template/kng-content.component.scss']
})
export class KngContentComponent implements KngContent {

    private state$: BehaviorSubject<KngContentState> = new BehaviorSubject<KngContentState>(
        KngContentFactory.buildState()
    );
    @Input() set state(value: KngContentState) {
        this.state$.next(value);
    }
    get state(): KngContentState {
        return this.state$.value;
    }

    constructor() { }
    
    public hasFixedFooter(): boolean {
        return this.state.footer.fixed && !this.state.footer.hidden
    }
}
