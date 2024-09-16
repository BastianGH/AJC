import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  Personne,
  personnes as personnesList,
} from '../assets/personnes__394__0';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Annuaire';
  faTrash = faTrash;
  personnes: Personne[] = personnesList;
  newContact: Personne = {
    id: 0,
    prenom: '',
    nom: '',
    email: '',
    dateNaissance: new Date(),
  };
  infoContact: Partial<Personne> = {};
  displayAddContact = false;
  displayContactInfos = false;

  displayForm() {
    this.displayAddContact = !this.displayAddContact;
  }

  displayInfos(infos: Personne) {
    if (!this.displayContactInfos) {
      this.displayContactInfos = !this.displayContactInfos;
    }
    this.infoContact = infos;
  }

  close() {
    this.displayContactInfos = false;
  }

  createContact(addContactForm: NgForm) {
    this.newContact.id = this.personnes.length + 1;
    this.personnes.push(this.newContact);
    this.displayForm();
  }

  removePersonne(personne: Personne) {
    this.personnes.splice(this.personnes.indexOf(personne), 1);
  }
}
