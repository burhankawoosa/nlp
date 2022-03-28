import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Nlplvl1Component } from './MainComponents/nlplvl1/nlplvl1.component';
import { Nlplvl2Component } from './MainComponents/nlplvl2/nlplvl2.component';
import { Nlplvl3Component } from './MainComponents/nlplvl3/nlplvl3.component';
import { Nlplvl4Component } from './MainComponents/nlplvl4/nlplvl4.component';

const routes: Routes = [
  { path:'nlplvl1', component: Nlplvl1Component},
  { path:'nlplvl2', component: Nlplvl2Component},
  { path:'nlplvl3', component: Nlplvl3Component},
  { path:'nlplvl4', component: Nlplvl4Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
