import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  currentRoute: string = '';
  isNight: boolean = false;
  isBurgerOpen: boolean = false;

  @ViewChild('test') test: ElementRef;

  constructor(
    private router: Router,
    test: ElementRef,
    private renderer: Renderer2
  ) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url.toString();
    });
    this.test = test;
  }

  changeSVG() {
    let newPathD;
    if (this.isNight) {
      newPathD =
        'M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z';
    } else {
      newPathD =
        'M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z';
    }
    this.updateCSSVariables();
    this.isNight = !this.isNight;
    this.test.nativeElement.setAttribute('d', newPathD);
  }

  updateCSSVariables() {
    if (this.isNight) {
      this.renderer.removeClass(document.documentElement, 'day-mode');
    } else {
      this.renderer.addClass(document.documentElement, 'day-mode');
    }
  }

  changeToMobile() {
    this.isBurgerOpen = !this.isBurgerOpen;
  }

  searchQuery(form: NgForm) {
    this.router.navigate(['/search'], { queryParams: { q: form.value.query } });
    form.resetForm();
  }
}
