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
import { NewsdetailComponent } from './newsdetail/newsdetail.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

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
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbAlertModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
