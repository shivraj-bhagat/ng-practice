import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { UsersComponent } from './users/users.component';
import { UserCtoPDataComponent } from './user-cto-pdata/user-cto-pdata.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserPtoCDataComponent } from './user-pto-cdata/user-pto-cdata.component';
import { CommonComponent } from './common/common.component';
import { CustomStyleDirective } from './common/custom-style.directive';
import { HttpClientModule } from '@angular/common/http';
import { UsersDataModule } from './users-data/users-data.module'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    UserCtoPDataComponent,
    AdminComponent,
    PageNotFoundComponent,
    UserPtoCDataComponent,
    CommonComponent,
    CustomStyleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    HttpClientModule,
    UsersDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
