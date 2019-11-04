import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NewspageComponent } from "./newspage/newspage.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NewsService } from "./service/news.service";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { NgbModule, NgbAlertModule } from "@ng-bootstrap/ng-bootstrap";
import { NewsdetailComponent } from "./newsdetail/newsdetail.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AuthService } from "./service/auth.service";
import { AuthGuardService } from "./service/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    NewspageComponent,
    LoginComponent,
    LogoutComponent,
    NewsdetailComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, "medoc"),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbAlertModule
  ],
  providers: [AuthGuardService, AuthService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
