import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KngGridModule } from './grid/kng-grid.module';
import { KngButtonModule } from './button';

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        KngGridModule,
        KngButtonModule
    ],
    exports: [
        KngGridModule,
        KngButtonModule
    ],
    providers: [],
})
export class KngComponentsModule {}