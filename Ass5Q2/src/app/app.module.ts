import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperaingSystemComponent } from './operaing-system/operaing-system.component';
import { ProgramminglanguageComponent } from './programminglanguage/programminglanguage.component';
import { DatabaseComponent } from './database/database.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    OperaingSystemComponent,
    ProgramminglanguageComponent,
    DatabaseComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
