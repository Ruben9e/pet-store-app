import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


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
    image: '',
    cantidad: 0
  };

  @Output() addToCart = new EventEmitter();

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

  addToCartHandler() {
    if(this.cantidad > 0) {
      this,this.product['cantidad'] = this.cantidad;
      this.addToCart.emit(this.product)
    }
  }

}