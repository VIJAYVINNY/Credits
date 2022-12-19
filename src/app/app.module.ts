import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CorporateComponent } from './corporate/corporate.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ChandruComponent } from './chandru/chandru.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';



@NgModule({
  declarations: [
    AppComponent,
    CorporateComponent,
    ContactsComponent,
    ChandruComponent,
    TodoComponent,
    LoginComponent,
    PagenotfoundComponent,
    AuthorizeComponent,
    ReactiveformComponent,

    ],


  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [

],
  bootstrap: [AppComponent]
})
export class AppModule { }
