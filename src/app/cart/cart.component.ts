import { Component ,OnInit} from '@angular/core';
import { Iproducts } from '../Iproducts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
cart : Iproducts [] = []
total : number =0
constructor(private CartService : CartService){}

ngOnInit():void {
  this.cart = this.CartService.getCart();
  this.total = this.CartService.calculateTotal();
}
}
