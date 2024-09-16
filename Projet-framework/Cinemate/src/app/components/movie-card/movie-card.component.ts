import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FilmListed } from '../../type';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent {
  backup: string = '';

  @Input() film!: FilmListed;

  ngOnInit(): void {
    if (!this.film.poster_path) {
      this.backup = '../../../assets/backuproom.jpg';
    }
  }
}
