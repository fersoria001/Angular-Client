import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit{

  data:any;

  constructor(private productService: ProductsService, private router: Router){
    
  }
  ngOnInit():void {
    this.showData();
  }

  showData(){
    this.productService.getAllProducts().subscribe((datos:any) => 
    {
      console.log(datos);
      this.data = datos;
    })
    console.log(this.data);

  }


}
