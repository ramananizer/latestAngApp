import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl : './login.component.html'
})
export class LoginComponent {
  message: string;
  model : LoginModel;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
    this.model = new LoginModel();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn() ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login(this.model.username, this.model.password).subscribe((obj) => {
      if(obj)
      this.setMessage();
      if (this.authService.isLoggedIn()) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/crisis-center/admin';

        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}

export class LoginModel {
  username : string;
  password : string;
}