import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { has, isEqual } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { KngHeaderNav, KngHeaderNavMenuOption, KngHeaderNavState } from './definitions/kng-header-nav.interface';
import { KngHeaderNavFactory } from './kng-header-nav.factory';

@Component({
    selector: 'kng-header-nav',
    templateUrl: './template/kng-header-nav.component.html',
    styleUrls: ['./template/kng-header-nav.component.scss']
})
export class KngHeaderNavComponent implements KngHeaderNav {

    private state$: BehaviorSubject<KngHeaderNavState> = new BehaviorSubject<KngHeaderNavState>(
        KngHeaderNavFactory.buildState()
    );
    get state(): KngHeaderNavState {
        return this.state$.value
    }
    @Input() set state(value: KngHeaderNavState) {
        this.state$.next(value);
    }

    @ViewChild('mobileMenuPanel', {static: true}) mobileMenuPanel!: ElementRef;
    @ViewChild('mobileMenuTrigger', {static: true}) mobileMenuTrigger!: ElementRef;

    constructor(
        private renderer: Renderer2
    ) {
        this.renderer.listen('window', 'click',(e:Event)=>{
            const panelEl: HTMLDivElement = this.mobileMenuPanel.nativeElement;
           if(e.target !== this.mobileMenuTrigger.nativeElement && e.target!==panelEl && !panelEl.contains(e.target as Node)){
               this.closeMenu();
           }
       });
    }

    public mobileTriggerClicked(event: Event): void {
        this.state.mobilePanelIsOpen ? this.closeMenu() : this.openMenu();
    }
    public closeMenu(): void {
        const state: KngHeaderNavState = this.state;
        state.mobilePanelIsOpen = false;
        this.state$.next(state);
    }
    public openMenu(): void {
        const state: KngHeaderNavState = this.state;
        state.mobilePanelIsOpen = true;
        this.state$.next(state);
    }
    public selectOption(option: KngHeaderNavMenuOption, event: Event): void {
        const state: KngHeaderNavState = this.state;
        state.menu.forEach(item => item.isSelected = item.id === option.id);
        option.clickOn(event);
    }
    public selectSubOption(subOption: KngHeaderNavMenuOption, event: Event): void {
        const state: KngHeaderNavState = this.state;
        const subOptionsParentMenuOption: KngHeaderNavMenuOption | undefined = state.menu.find(_option => {
            const thisSubOptionsParent: KngHeaderNavMenuOption | undefined = _option.subMenu.find(
                _subOption => isEqual(_subOption, subOption)
            );
            return thisSubOptionsParent !== undefined;
        });
        try {
            const hasSubMenu: boolean = has(subOptionsParentMenuOption, 'subMenu');
            if (!hasSubMenu) {
                throw new Error(`this item was clicked without having a parent menu item`)
            }
            subOptionsParentMenuOption?.subMenu.forEach(item => item.isSelected = item.id === subOption.id);
        } catch (error) {
            throw error;
        }

        subOption.clickOn(event);
    }
}
