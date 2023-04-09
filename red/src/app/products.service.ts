import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  ngOnInit(): void{

  }

  public getAllProducts(){
    return this.http.get(`${this.baseUrl}/products`)
  }

  public saveProduct(product: any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/admin/products`, product, {headers: headers});
  }
}
