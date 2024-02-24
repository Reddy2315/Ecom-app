import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private baseUrl="http://localhost:8081/Ecom/Product/";

  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
   return this.http.get<Product[]>(`${this.baseUrl}`);
  }
  addProduct(product:Product):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,product);
  }

  // updateProduct(product: Product): Observable<Object> {
  //   return this.http.post("http://localhost:8081/Ecom/ProductResource/new-product/", product);
  // }

  getProductById(id:any):Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}${id}`);
  }
  updateProduct(id:any,product:Product):Observable<Object>{
    return this.http.put(`${this.baseUrl}${id}`,product);
  }
  deleteProduct(id:any):Observable<Object>{
    return this.http.delete(`${this.baseUrl}${id}`);
  }
}
