import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BioComponent } from './bio/bio.component';
import { DetailsComponent } from './details/details.component';
import { SubjectComponent } from './subject/subject.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';

const routes: Routes = [{path:"",component:HomeComponent},{path:"welcome",component:WelcomeComponent, children:[{path:"welcome",component: WelcomeComponent},{path:"subject",component: SubjectComponent},
  {path:"contact",component: ContactComponent},
  {path:"details",component: DetailsComponent}]},
  {path:"subject",component: SubjectComponent},
  {path:"contact",component: ContactComponent},
  {path:"details",component: DetailsComponent}]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
