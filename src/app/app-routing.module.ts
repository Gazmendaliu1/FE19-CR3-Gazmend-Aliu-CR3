import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [ {
  path: "",component:HomeComponent
},{
  path: "about", component: AboutComponent
},{
  path: "menu", component : MenuComponent
},{
  path: "cart", component : CartComponent
},{
  path:"product/:indexFromRouting",component:ProductDetailsComponent
}, {
  path: "table", component:TableComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
