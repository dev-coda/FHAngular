import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.sass'],
})
export class ContadorComponent {
  contador: number = 0;
  amount: number = 1;
  constructor() {}

  increase() {
    this.contador += this.amount;
  }

  decrease() {
    if (this.contador > 0 && this.amount <= this.contador) {
      this.contador -= this.amount;
    }
  }
}
