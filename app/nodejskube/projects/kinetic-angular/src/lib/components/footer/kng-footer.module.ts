import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KngFooterComponent } from './kng-footer.component';

@NgModule({
    declarations: [
        KngFooterComponent
    ],
    imports: [ CommonModule ],
    exports: [
        KngFooterComponent
    ],
    providers: [],
})
export class KngFooterModule {}