import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent implements OnInit{

  cantidad: number = 0;

//Inicio objeto de producto.
  product = {
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  }
//fin objeto de producto.
  constructor() { }

  ngOnInit() {
  }

  addProduct(){
    this.cantidad++;
  }

  removeProduct(){
    this.cantidad--;
  }

}