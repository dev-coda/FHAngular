import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContadorComponent } from './contador.component';

@NgModule({
  declarations: [ContadorComponent],
  imports: [FormsModule],
  exports: [ContadorComponent],
})
export class ContadorModule {}
