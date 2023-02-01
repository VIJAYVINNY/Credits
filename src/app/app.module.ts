import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ContactsComponent } from './contacts/contacts.component';
import { TodoComponent } from './todo/todo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateComponent } from './template/template.component';
import { MaterialsComponent } from './materials/materials.component';
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
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {ArcreactModule } from './arcreact/arcreact.module';
import {ChandruModule } from './chandru/chandru.module';
import {MatListModule} from '@angular/material/list';
import {LoginModule } from './login/login.module';
import {CorporateModule } from './corporate/corporate.module';
import {AllinoneModule } from './allinone/allinone.module';
import { OfflineModule } from './offline/offline.module';
import { DialogModule } from './dialog/dialog.module';
import { WyderComponent } from './wyder/wyder.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    TodoComponent,
    PagenotfoundComponent,
    AuthorizeComponent,
    ReactiveformComponent,
    TemplateComponent,
    MaterialsComponent,
    WyderComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,

    ],


  imports:
   [AppRoutingModule,
    ArcreactModule,
    FormsModule,
    MatButtonToggleModule,
    MatIconModule,
    MatBadgeModule,
    DialogModule,
    BrowserModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTooltipModule,
    HttpClientModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatMenuModule,
    ArcreactModule,
    ChandruModule,
    MatListModule,
    LoginModule,
    CorporateModule,
    AllinoneModule,
    OfflineModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
