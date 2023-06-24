import { Injectable } from '@angular/core';
import { Iproducts } from './Iproducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart : Iproducts [] = []
  constructor() { }


  addToCart (obj: Iproducts) {
    this.cart.push(obj);
  }

  getCart () {
    return this.cart;
  }

  clearCart (){
    this.cart = []
    return this.cart;
  }

 
  addto (obj: Iproducts) {
    this.cart.push(obj)
  }

  


  calculateTotal() {
    let total :number = 0;
    for (let val of this.cart) {
      total = total + val.price 
    }
    return total ;
  }
}
