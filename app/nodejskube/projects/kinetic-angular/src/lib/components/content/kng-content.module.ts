import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KngContentComponent } from './kng-content.component';

@NgModule({
    declarations: [
        KngContentComponent
    ],
    imports: [ CommonModule ],
    exports: [
        KngContentComponent
    ],
    providers: [],
})
export class KngContentModule {}