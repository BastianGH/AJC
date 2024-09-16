import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type User = {
  username: string;
  password: string;
  rememberMe: boolean;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'login-form';
  alert = '';
  user: User = {
    username: '',
    password: '',
    rememberMe: false,
  };

  login() {
    let validForm = true;

    for (let [key, value] of Object.entries(this.user)) {
      if (value == '' && (key == 'username' || key == 'password')) {
        validForm = false;
        switch (key) {
          case 'username':
            this.alert = "Le champ 'Nom d'utilisateur ne doit pas être vide !";
            break;
          case 'password':
            this.alert = 'Veuillez renseigner votre mot de passe...';
            break;
        }
        alert(this.alert);
      }
    }

    if (validForm) {
      console.log('Les informations sont valides');
      console.log(this.user);
    }
  }
}
