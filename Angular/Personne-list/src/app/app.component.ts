import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  Personne,
  personnes as echantillon,
} from '../assets/personnes__394__0';

type Tri = 'dateNaissance' | 'prenom' | 'nom' | 'email';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [DatePipe],
})
export class AppComponent {
  title = 'Personne-list';
  personnes: Personne[] = echantillon;
  today = new Date();
  currentSortColumn: Tri = 'nom';
  isAscending: boolean = true;

  order(column: Tri) {
    if (this.currentSortColumn === column) {
      this.isAscending = !this.isAscending;
    } else {
      this.currentSortColumn = column;
      this.isAscending = true;
    }

    this.personnes.sort((a, b) => {
      let comparison = 0;
      if (a[column] > b[column]) {
        comparison = 1;
      } else if (a[column] < b[column]) {
        comparison = -1;
      }
      return this.isAscending ? comparison : -comparison;
    });
  }

  constructor(private datePipe: DatePipe) {}

  isBirthdayToday(dateNaissance: Date): boolean {
    const todayFormatted = this.datePipe.transform(this.today, 'dd-MM');
    const birthDateFormatted = this.datePipe.transform(dateNaissance, 'dd-MM');
    return todayFormatted === birthDateFormatted;
  }
}
