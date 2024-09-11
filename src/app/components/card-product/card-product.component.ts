import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent implements OnInit {

  @Input() product = {
    name: '',
    price: 0,
    description: '',
    inventory: 0,
    image: ''
  };

  cantidad: number = 0;
  soldOut: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  addProduct() {
    if (this.cantidad < this.product.inventory) {
      this.soldOut = false;
      this.cantidad++;
    } else {
      this.soldOut = true;
    }
  }

  removeProduct() {
    if (this.cantidad > 0) {
      this.soldOut = false;
      this.cantidad--;
    }
  }

}