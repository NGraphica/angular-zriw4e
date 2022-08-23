import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

const appRoutes: Routes = [
  { path: 'a', component: AppComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule,  RouterModule.forRoot(
    appRoutes
  ) ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
