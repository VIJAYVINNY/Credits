import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeComponent } from './authorize/authorize.component';
import { ChandruComponent } from './chandru/chandru.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CorporateComponent } from './corporate/corporate.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  // {path:'',redirectTo:'corporate',pathMatch:"full"},

  {path:'authorize',component:AuthorizeComponent},

  {path:'pagenotfound',component:PagenotfoundComponent},
  // {path:'task',component:TaskComponent},
  {path:'login',component:LoginComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'chandru',component:ChandruComponent},
  {path:'corporate',component:CorporateComponent},
  {path:'todo',component:TodoComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
