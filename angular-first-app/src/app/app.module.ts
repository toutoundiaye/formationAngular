import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppRoutingModule} from "./app-routing.module";

import {registerLocaleData} from "@angular/common";
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeFr);
registerLocaleData(localeDe);

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { TodolistComponent } from './todolist/todolist.component';
import { RouteComponent } from './route/route.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TemplateComponent } from './template/template.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { PowerPipe } from './power.pipe';
import { PipelindromePipe } from './pipelindrome.pipe';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { HighlightDirective } from './highlight.directive';
import { AutofocusDirective } from './autofocus.directive';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ParametersComponent } from './parameters/parameters.component';
import { ServiceComponent } from './service/service.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PresentationComponent,
    TodolistComponent,
    RouteComponent,
    NotfoundComponent,
    TemplateComponent,
    CustomPipeComponent,
    PowerPipe,
    PipelindromePipe,
    CustomDirectiveComponent,
    HighlightDirective,
    AutofocusDirective,
    FormulaireComponent,
    ReactiveFormComponent,
    ParametersComponent,
    ServiceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: 'secureRouteGuard',
    useValue: () => { return true;}
  }],
  bootstrap: [RouteComponent]
})
export class AppModule { }
