import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-product',
  templateUrl: './store-product.component.html',
  styleUrls: ['./store-product.component.sass']
})
export class StoreProductComponent {

  constructor(private productService: ProductsService, private router: Router){}

  public product = {
    price: '',
    stock: '',
    description: '',
    brand: '',
    model: ''
  }

  formSubmit(){
    this.productService.saveProduct(this.product).subscribe
    ((data:any) => {
      console.log(data);
    }, (error) =>{
      console.log(error);
    })
  }
}
