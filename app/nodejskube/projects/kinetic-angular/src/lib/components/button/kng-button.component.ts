import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ButtonStyle } from './definitions';

@Component({
    selector: 'kng-button',
    templateUrl: './template/kng-button.component.html',
    styleUrls: ['./template/kng-button.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class KngButtonComponent implements OnInit {
    
    @Input('styleName') styleName: ButtonStyle = 'primary';
    @Input('disabled') disabled: boolean = false;
    @Input('label') label: string = '';

    constructor() { }

    ngOnInit(): void {}

}
