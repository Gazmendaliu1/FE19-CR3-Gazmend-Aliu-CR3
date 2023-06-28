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
    let service = 0;
    let discount = 0;

    for (let val of this.cart) {
      total = total + val.price 
      service = total * 0.1;

    }
    if( total >40) {
      discount = Math.floor((total * 0.15))
    }
    return [total,service,discount] ;

  }
  
}
