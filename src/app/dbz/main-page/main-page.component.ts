import { Component, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass'],
})
export class MainPageComponent {
  agregar(event: Personaje) {
    //this.personajes.push(event);
  }

  constructor() {}

  onInit() {}
}
