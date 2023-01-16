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
import { MethodsComponent } from './methods/methods.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { ImplementingComponent } from './implementing/implementing.component';
import { TemplateComponent } from './template/template.component';
import { ArcreactComponent } from './arcreact/arcreact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';

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
    MethodsComponent,
    ListEmployeeComponent,
    ImplementingComponent,
    TemplateComponent,
    ArcreactComponent,
    ],

  imports: [
    FormsModule,MatButtonToggleModule,MatIconModule,MatBadgeModule,
    BrowserModule,MatProgressSpinnerModule,MatCardModule,
    AppRoutingModule,MatTooltipModule,
    HttpClientModule,MatRadioModule,
    BrowserAnimationsModule,MatSliderModule,
    ReactiveFormsModule,MatToolbarModule,MatTabsModule,MatSidenavModule

  ],

  providers: [


],
  bootstrap: [AppComponent]
})
export class AppModule { }
