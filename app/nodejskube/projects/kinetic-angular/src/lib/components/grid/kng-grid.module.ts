import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KngGridComponent } from './kng-grid.component';

@NgModule({
    declarations: [
        KngGridComponent
    ],
    imports: [ CommonModule ],
    exports: [
        KngGridComponent
    ],
    providers: [],
})
export class KngGridModule {}