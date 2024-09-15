import { Injectable } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  descrption: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {

  private cart: Product[] = [];

  constructor() { }

  addToCart (product: Product) {
    this.cart.push(product)
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(product => product.id !== productId);
  }

  getCart(){
    return this.cart
  }

  getTotalPrice(){
    return this.cart.reduce((total,product) => total + product.price, 0)
  }

  clearCart(){
    this.cart = [];
  }
}
