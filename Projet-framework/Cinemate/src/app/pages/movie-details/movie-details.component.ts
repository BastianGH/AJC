import { Component } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { Film } from '../../type';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent {
  film!: Film;
  backup: string = '';
  isLoad: boolean = false;

  constructor(
    private filmService: FilmsService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit() {
    let paramId = this.route.snapshot.paramMap.get('id');
    if (paramId != null) {
      // console.log(paramId);
      let id = parseInt(paramId);
      this.filmService.getMovie(id).then((res) => {
        this.film = res;

        if (!this.film.poster_path) {
          this.backup = '../../../assets/backuproom.jpg';
        }

        this.isLoad = true;

        this.titleService.setTitle(`${this.film.title} / Cinemate`);
      });
    }
  }
}
