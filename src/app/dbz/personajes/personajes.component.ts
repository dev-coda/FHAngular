import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.sass'],
})
export class PersonajesComponent {
  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) {}
}
