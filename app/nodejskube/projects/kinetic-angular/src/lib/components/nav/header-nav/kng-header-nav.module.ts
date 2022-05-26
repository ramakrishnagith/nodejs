import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KngHeaderNavComponent } from './kng-header-nav.component';

@NgModule({
    declarations: [
        KngHeaderNavComponent
    ],
    imports: [ CommonModule ],
    exports: [
        KngHeaderNavComponent
    ],
    providers: [],
})
export class KngHeaderNavModule {}