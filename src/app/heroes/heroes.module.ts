import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [HeroeComponent, ListadoComponent],
  imports: [CommonModule, FormsModule],
  exports: [HeroeComponent, ListadoComponent],
})
export class HeroesModule {}
