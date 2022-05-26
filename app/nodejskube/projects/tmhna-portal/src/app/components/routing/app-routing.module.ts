import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoremIpsumComponent } from '../lorem-ipsum/lorem-ipsum.component';
import { LoremIpsumModule } from '../lorem-ipsum/lorem-ipsum.module';

const routes: Routes = [
  {
    path: '',
    component: LoremIpsumComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoremIpsumModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
