import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Film } from '../../assets/movie_dataset__394__0';

@Component({
  selector: 'app-film-display',
  standalone: true,
  imports: [],
  templateUrl: './film-display.component.html',
  styleUrl: './film-display.component.css',
})
export class FilmDisplayComponent {
  @Input() film!: Film;
  @Output() filmSelected = new EventEmitter();

  selectFilm() {
    this.filmSelected.emit();
  }
}
