import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { FormsModule } from '@angular/forms'

/* App Root */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

/* Feature Components */
import { PersonalComponent } from './personal/personal.component';
import { AboutComponent } from './about/about.component';
import { AddressComponent } from './address/address.component';
import { ResultComponent } from './result/result.component';
import { WorkComponent } from './work/work.component';

/* App Router */
import { APP_STATES } from './app.states';
import { UIRouterConfigFn } from './router.config';

/* Shared Service */
import { FormDataService }    from './data/formData.service';
import { WorkflowService }    from './workflow/workflow.service';

@NgModule({
   imports: [
    BrowserModule,
    FormsModule,
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: true,     
      config: UIRouterConfigFn
     })   
  ],
  providers: [
    { provide: FormDataService, useClass: FormDataService },
    { provide: WorkflowService, useClass: WorkflowService }
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonalComponent,
    AboutComponent,
    AddressComponent,
    ResultComponent,
    WorkComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
