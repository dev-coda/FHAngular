import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.sass'],
})
export class AgregarComponent {
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  @Output() onAgregarPersonaje: EventEmitter<Personaje> =
    new EventEmitter<Personaje>();
  //@Input() personajes: Personaje[] = [];
  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.onAgregarPersonaje.emit(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
    /*
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.personajes);
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    }; */
  }
}
