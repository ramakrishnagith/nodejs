import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KngShellComponent } from './kng-shell.component';
import { KngContentModule } from '../content';
import { KngFooterModule } from '../footer';
import { KngHeaderNavModule } from '../nav';
import { KngModalBlockModule } from '../modal';

@NgModule({
    declarations: [
        KngShellComponent
    ],
    imports: [
        CommonModule,
        KngContentModule,
        KngFooterModule,
        KngHeaderNavModule,
        KngModalBlockModule
    ],
    exports: [
        KngShellComponent
    ],
    providers: [],
})
export class KngShellModule {}
