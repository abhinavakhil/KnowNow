import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { Observable } from "rxjs";
import { auth } from "firebase/app";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private user: Observable<firebase.User>;
  public userDetails: firebase.User = null;

  constructor(private fAuth: AngularFireAuth, private router: Router) {
    this.user = this.fAuth.authState;

    this.user.subscribe(user => {
      if (user) {
        this.userDetails = user;
        console.log(this.userDetails);
      } else {
        this.userDetails = null;
      }
    });
  }

  signInwithGoogle() {
    return this.fAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  signInWithFacebook() {
    return this.fAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
  }

  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

  async logout() {
    await this.fAuth.auth.signOut().then(res => {
      this.router.navigate(["/"]);
      alert("You have been SuccessFully Loggedout!");
    });
  }

  signInRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential(
      email,
      password
    );
    return this.fAuth.auth.signInWithEmailAndPassword(email, password);
  }
}
