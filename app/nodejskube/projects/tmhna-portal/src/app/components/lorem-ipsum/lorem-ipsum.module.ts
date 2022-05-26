import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoremIpsumComponent } from './lorem-ipsum.component';
import { ShellService } from '../shell/shell.service';

@NgModule({
    declarations: [
        LoremIpsumComponent
    ],
    imports: [ CommonModule ],
    exports: [
        LoremIpsumComponent
    ],
    providers: [
        ShellService
    ],
})
export class LoremIpsumModule {}