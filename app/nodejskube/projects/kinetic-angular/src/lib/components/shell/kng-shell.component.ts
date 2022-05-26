import { Component, Input, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KngContentComponent } from '../content';
import { KngFooterComponent } from '../footer';
import { KngModalBlockComponent } from '../modal';
import { KngHeaderNavComponent } from '../nav';
import { KngShell, KngShellState } from './definitions/KngShell.interface';
import { KngShellFactory } from './kng-shell.factory';
import { isEqual as _isEqual} from 'lodash';

@Component({
    selector: 'kng-shell',
    templateUrl: './template/kng-shell.component.html',
    styleUrls: ['./template/kng-shell.component.scss']
})
export class KngShellComponent implements KngShell {

    private state$: BehaviorSubject<KngShellState> = new BehaviorSubject<KngShellState>(
        KngShellFactory.buildState()
    );
    @Input() set state(value: KngShellState) {
        this.state$.next(value);
    }
    get state(): KngShellState {
        const state: KngShellState = this.state$.value;
        if (!_isEqual(state.footer, state.content.footer)) {
            console.warn(`Content's footer must match shell's footer. Shell footer will be used to update content's footer`);
            state.content.footer = state.footer;
        }
        return state;
    }
    
    @ViewChild('header', {static: true}) headerComponent!: KngHeaderNavComponent;
    @ViewChild('content', {static: true}) contentComponent!: KngContentComponent;
    @ViewChild('footer', {static: true}) footerComponent!: KngFooterComponent;
    @ViewChild('modalBlock', {static: true}) modalBlcokComponent!: KngModalBlockComponent;

    constructor() { }

}
