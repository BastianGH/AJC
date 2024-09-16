import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Film } from '../../assets/movie_dataset__394__0';

@Component({
  selector: 'app-film-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './film-edit.component.html',
  styleUrl: './film-edit.component.css',
})
export class FilmEditComponent {
  @Input() filmToEdit: Partial<Film> = {};

  @Output() editedFilm = new EventEmitter<Partial<Film>>();

  editFilm(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      this.editedFilm.emit(form.value);
    } else {
      console.error('Le formulaire est invalide');
    }
  }
}
