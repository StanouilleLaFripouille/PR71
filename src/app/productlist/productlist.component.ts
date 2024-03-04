import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  ProductArray : Product[] = []

  constructor() { }

  ngOnInit(): void {
    this.ProductArray.push(new Product('Sun', 'Grosse dédicace à mon Bibou', '10', 'UTBM', './assets/img/sun.jpg'))
    this.ProductArray.push(new Product('Star1', 'Kawaii star', '78451', 'UTBM', './assets/img/Star.avif'))
    this.ProductArray.push(new Product('Star2', 'Nice star', '12', 'UTBM', './assets/img/Star2.webp'))
    this.ProductArray.push(new Product('Star3', 'Another star', '40', 'UTBM', './assets/img/Star3.png'))
  }

}
