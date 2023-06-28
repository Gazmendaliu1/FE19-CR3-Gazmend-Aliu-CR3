import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../Iproducts';
import { products } from '../products';
import { CartService } from '../cart.service';
import { Params } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
 products  : Array <Iproducts> = products
 cart : Iproducts [] = []
 product :Iproducts = {} as Iproducts
 index : number =0;
  route: any;



 constructor (private CartService : CartService ) {


 }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
 addTo() {
  this.CartService.addToCart
  //  addToCart() {
//   this.CartService.addToCart(this.product)
// i am getting errors 
 }
 clearCart (){
  this.cart = []
  return this.cart;
}

// addToCart (obj: Iproducts) {
//   alert(`ADDED`)
//   this.cart.push(obj);
// }
addToCart (product: Iproducts) {
  this.CartService.addToCart(product)
  }


ngOnInit(): void {
  this.route.params.subscribe((params : Params) => {
    this.index = + params['indexFromRouting'];
    this.product = products[this.index];
  });
}
}