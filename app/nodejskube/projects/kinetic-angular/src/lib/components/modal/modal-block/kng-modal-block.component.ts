import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KngModalBlockState, KngModalBlock } from './definitions/modal-block.interface';
import { KngModalBlockFactory } from './kng-modal-block.factory';

@Component({
    selector: 'kng-modal-block',
    templateUrl: './template/kng-modal-block.component.html',
    styleUrls: ['./template/kng-modal-block.component.scss']
})
export class KngModalBlockComponent implements KngModalBlock {
    private state$: BehaviorSubject<KngModalBlockState> = new BehaviorSubject<KngModalBlockState>(
        KngModalBlockFactory.buildState()
    );
    @Input() set state(value: KngModalBlockState) {
        this.state$.next(value);
    }
    get state(): KngModalBlockState {
        return this.state$.value;
    }

    constructor() { }

    public hide(): void {
        const state: KngModalBlockState = this.state;
        state.hidden = true;
        this.state$.next(state);
    }
    public show(): void {
        const state: KngModalBlockState = this.state;
        state.hidden = false;
        this.state$.next(state);
    }

}
