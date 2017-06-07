import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonalComponent } from './personal/personal.component';
import { AboutComponent } from './about/about.component';

import { APP_STATES } from './app.states';
import { UIRouterConfigFn } from './router.config';

@NgModule({
   imports: [
    BrowserModule,
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: true,
      otherwise: { state: 'personal'},
      config: UIRouterConfigFn
     })   
  ],
  providers: [],
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonalComponent,
    AboutComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
