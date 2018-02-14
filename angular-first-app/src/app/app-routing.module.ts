import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {AppComponent} from "./app.component";
import {PresentationComponent} from "./presentation/presentation.component";
import {TodolistComponent} from "./todolist/todolist.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {TemplateComponent} from "./template/template.component";
import {CustomPipeComponent} from "./custom-pipe/custom-pipe.component";
import {CustomDirectiveComponent} from "./custom-directive/custom-directive.component";
import {FormulaireComponent} from "./formulaire/formulaire.component";
import {ReactiveFormComponent} from "./reactive-form/reactive-form.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'app', component: AppComponent},
  {path: 'presentation', component: PresentationComponent},
  {path: 'todolist', component: TodolistComponent},
  {path: 'template', component: TemplateComponent},
  {path: 'custom-pipe', component:CustomPipeComponent},
  {path: 'custom-directive', component:CustomDirectiveComponent},
  {path: 'formulaire', component:FormulaireComponent},
  {path: 'signup', component:ReactiveFormComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
