import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewspageComponent } from "./newspage/newspage.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { NewsdetailComponent } from "./newsdetail/newsdetail.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: "news", component: NewspageComponent },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "newsdetail", component: NewsdetailComponent },
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
