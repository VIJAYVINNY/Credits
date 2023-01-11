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
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { ImplementingComponent } from './implementing/implementing.component';
import { TemplateComponent } from './template/template.component';
import { ArcreactComponent } from './arcreact/arcreact.component';
import { MaterialsComponent } from './materials/materials.component';
import { MaterialsModule } from './materials/materials.module';


const routes: Routes = [
  // {path:'',redirectTo:'corporate',pathMatch:"full"},

  {path:'authorize',component:AuthorizeComponent},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'login',component:LoginComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'chandru',component:ChandruComponent},
  {path:'corporate',component:CorporateComponent},
  {path:'todo',component:TodoComponent},
  {path:'Reactiveform',component:ReactiveformComponent},
  {path:'listemployee',component:ListEmployeeComponent},
  {path:'implements',component:ImplementingComponent},
  {path:'template',component:TemplateComponent},
  {path:'arcreact',component:ArcreactComponent},
  {path:'materials',component:MaterialsComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,MaterialsModule]
})
export class AppRoutingModule { }
