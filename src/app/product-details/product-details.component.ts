import { Component,OnInit } from '@angular/core';
import { Iproducts } from '../Iproducts';
import { ActivatedRoute, Params } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
product : Iproducts = {} as Iproducts;
index : number = 0;

constructor (private route : ActivatedRoute, private cartService: CartService) {

}

  addToCart () {
    this.cartService.addToCart(this.product)
  }

   ngOnInit(): void {
  this.route.params.subscribe((params : Params) => {
    this.index = + params['indexFromRouting'];
    this.product = products[this.index];
  });
}
}