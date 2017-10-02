import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { HeroService } from './app/services/hero.service';

import { AppComponent } from './app/components/app.component';
import { HeroComponent } from './app/components/hero/hero.component';
import { HeroDetailsComponent } from './app/components/hero-details/hero-details.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './app/components/dashboard/dashboard.component';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        {
            path: 'heroes',
            component: HeroComponent
        },{
            path: 'detail/:id',
            component: HeroDetailsComponent
        },{
            path: 'dashboard',
            component: DashboardComponent
        },{
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
        }
    ])
  ],
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailsComponent,
    DashboardComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }