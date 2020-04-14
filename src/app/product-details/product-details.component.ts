import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route : ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params  => {
      //alert(params.get('productId'));
      //alert(products.findIndex(function (product) {return product.id == "P02"}));
      this.product = products[products.findIndex(function (product) { return product.id == params.get("productId") })];
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your producct has been added to the cart!');
  }

}