import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAddComponent } from './pages/contact-add/contact-add.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { ContactSearchComponent } from './pages/contact-search/contact-search.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostsComponent } from './pages/posts/posts.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent ,  pathMatch: 'full',},
  { path: '', component: LandingComponent ,  pathMatch: 'full',},
  { path: 'home/:id', component: PostsComponent },
  { path: 'home/:id/:pid', component: PostDetailsComponent },
  { path: 'contact', component: ContactAddComponent },
  { path: 'phonebook', component: ContactListComponent },
  { path: 'phonebook/:id', component: EditContactComponent },
  { path: 'contact/:id', component: ContactSearchComponent },


 /*  { path: "*",redirectTo:''},
  { path: "**",redirectTo:''} */



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
