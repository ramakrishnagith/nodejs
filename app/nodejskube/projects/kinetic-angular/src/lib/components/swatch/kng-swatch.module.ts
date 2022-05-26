import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KngSwatchComponent } from './kng-swatch.component';

@NgModule({
    declarations: [
        KngSwatchComponent
    ],
    imports: [ CommonModule ],
    exports: [
        KngSwatchComponent
    ],
    providers: [],
})
export class KngSwatchModule {}
