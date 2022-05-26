import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { KngShellState, KngFooterState } from 'kinetic-angular';
import { ShellService } from '../shell/shell.service';

@Component({
    selector: 'tmhna-portal-lorem-ipsum',
    templateUrl: './lorem-ipsum.component.html',
    styleUrls: ['./lorem-ipsum.component.scss']
})
export class LoremIpsumComponent implements OnInit {

    @Output('clickedOn') clickedOn: EventEmitter<Event> = new EventEmitter<Event>();

    constructor(
        private shellService: ShellService
    ) { }

    ngOnInit(): void { }

    public toogleFooter(event: Event): void {
        const state: KngShellState = this.shellService.state;
        state.footer.hidden = !state.footer.hidden;
        this.shellService.updateState(state);
    }
    public toggleWindowed(event: Event): void {
        const state: KngShellState = this.shellService.state;
        state.content.windowed = !state.content.windowed;
        state.footer.hidden = state.content.windowed ? false : state.footer.hidden;
        this.shellService.updateState(state);
    }
    public toogleFixedFooter(event: Event): void {
        const state: KngShellState = this.shellService.state;
        const footer: KngFooterState = state.footer;
        footer.fixed = !footer.fixed;
        footer.hidden = false;
        state.footer = footer;
        this.shellService.updateState(state);
    }
    public toogleModal(event: Event): void {
        const state: KngShellState = this.shellService.state;
        state.modal.hidden = false;
        this.shellService.updateState(state);
        setTimeout(() => {
            const state: KngShellState = this.shellService.state;
            state.modal.hidden = true;
        }, 5000);
    }
}
