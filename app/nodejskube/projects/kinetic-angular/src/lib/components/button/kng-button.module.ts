import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KngButtonComponent } from './kng-button.component';

@NgModule({
    declarations: [
        KngButtonComponent
    ],
    imports: [ CommonModule ],
    exports: [
        KngButtonComponent
    ],
    providers: [],
})
export class KngButtonModule {}