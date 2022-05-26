import { NgModule } from '@angular/core';
import { KngComponentsModule } from './components/kng-components.module';
import { KineticAngularComponent } from './kinetic-angular.component';



@NgModule({
  declarations: [
    KineticAngularComponent
  ],
  imports: [
    KngComponentsModule
  ],
  exports: [
    KineticAngularComponent,
    KngComponentsModule
  ]
})
export class KineticAngularModule { }
