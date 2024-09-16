import { Component } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../services/auth/login.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  error = {
    status: false,
    message: '',
  };
  user = {
    username: '',
    password: '',
  };
  loading = false;
  constructor(
    private authService: AuthService,
    private routeur: Router
  ) {} /**private route: ActivatedRoute */

  async login(form: NgForm) {
    this.error.status = false; //reset de l'erreur
    this.loading = true; // enclanche le spinner

    let userLoginTry = {
      ...form.value,
      expiresInMins: 30,
    };

    /*
    this.authService.login({
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 30,
    })
    */
    try {
      let result = await firstValueFrom(
        await this.authService.login(userLoginTry)
      );
      console.log('Success', result);
      if (result) {
        this.routeur.navigate(['/', 'recipes']);
      }
    } catch (e: any) {
      this.error = {
        status: true,
        message: e.error.message,
      };
    } finally {
      this.loading = false; // arrete le spinner
    }
  }
}
