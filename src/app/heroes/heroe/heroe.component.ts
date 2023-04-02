import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.sass'],
})
export class HeroeComponent {
  nombre: string = 'Ironman';
  edad: number = 45;
  obtenerEdad(): number {
    return this.edad;
  }

  obtenerHeroe(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  changeName(name: string): void {
    this.nombre = name;
  }

  changeAge(age: string): void {
    this.edad = parseInt(age);
  }
}
