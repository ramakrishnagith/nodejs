import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { KngShellModule } from 'kinetic-angular';
import { ShellService } from './shell.service';

@NgModule({
    declarations: [
        ShellComponent
    ],
    imports: [ 
        CommonModule,
        KngShellModule
    ],
    exports: [
        ShellComponent
    ],
    providers: [
        ShellService
    ],
})
export class ShellModule {}