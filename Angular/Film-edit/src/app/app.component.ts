import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, formatDate } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

type Film = {
  titre: string;
  dateSortie: Date;
  duree: number;
  genre: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Film-edit';
  menuVisible = false;
  otherFilm = {};
  film: Partial<Film> = {
    titre: 'Titre du Film en question',
    dateSortie: new Date(),
    duree: 90,
    genre: 'feur',
  };

  openForm() {
    this.otherFilm = this.film;
    this.toggleMenuVisibility();
  }

  toggleMenuVisibility() {
    this.menuVisible = !this.menuVisible;
  }

  saveDatas(editForm: NgForm) {
    this.toggleMenuVisibility();
  }

  cancelEdit() {
    this.film = this.otherFilm;
    this.toggleMenuVisibility();
  }
}
