import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ContactAddComponent } from './pages/contact-add/contact-add.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactListComponent } from './pages/contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    PostDetailsComponent,
    LandingComponent,
    ContactAddComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
