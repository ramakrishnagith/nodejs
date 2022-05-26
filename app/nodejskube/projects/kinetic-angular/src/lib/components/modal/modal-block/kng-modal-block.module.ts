import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KngModalBlockComponent } from './kng-modal-block.component';

@NgModule({
    declarations: [
        KngModalBlockComponent
    ],
    imports: [ CommonModule ],
    exports: [
        KngModalBlockComponent
    ],
    providers: [],
})
export class KngModalBlockModule {}