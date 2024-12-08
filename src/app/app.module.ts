import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { AssignmentsComponent } from './assignments/assignments.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { RouterModule } from '@angular/router'; 

//maj
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    MatButtonModule,
    MatSliderModule,
    AssignmentsComponent,
    MatDatepickerModule,
    MatNativeDateModule,
    NavigationComponent,
    SidenavComponent,
    ToolbarComponent,
    RouterOutlet,
    HttpClientModule,
    RouterLink
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
