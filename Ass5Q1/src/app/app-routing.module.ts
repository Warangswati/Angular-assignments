import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DatabaseComponent} from './database/database.component';
import {ProgramminglanguageComponent} from './programminglanguage/programminglanguage.component';
import {OperaingSystemComponent} from './operaing-system/operaing-system.component';
const routes: Routes = [
 {path:'database',component:DatabaseComponent},
 {path:'programminglanguage',component:ProgramminglanguageComponent},
 {path:'OperatingSystem',component:OperaingSystemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
