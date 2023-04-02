import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador/contador.module';

@NgModule({
  declarations: [AppComponent, HeroesComponent],
  imports: [BrowserModule, FormsModule, HeroesModule, ContadorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
