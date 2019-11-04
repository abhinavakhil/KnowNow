import { Component, OnInit } from "@angular/core";
import { AuthService } from "../service/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  verticalImage = "assets\vertical-line.png";
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  user = {
    email: "",
    password: ""
  };

  async signInWithGoogle() {
    await this.authService
      .signInwithGoogle()
      .then(res => {
        this.router.navigate(["news"]);
      })
      .catch(err => console.log(err));
  }

  signWithFacebook() {
    this.authService
      .signInWithFacebook()
      .then(res => {
        this.router.navigate(["news"]);
      })
      .catch(err => console.log(err));
  }

  signInWithEmail() {
    this.authService
      .signInRegular(this.user.email, this.user.password)
      .then(res => {
        console.log(res);

        this.router.navigate(["dashboard"]);
      })
      .catch(err => console.log("error: " + err));
  }
}
