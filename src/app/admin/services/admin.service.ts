import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../environments/environments';
import {  Content, Product } from '../interfaces/product.interface';
import { Category } from '../interfaces/category.interface';


@Injectable({
  providedIn: 'root',
})
export class adminService {

  private baseUrl: string = environment.baseURL;

  constructor(private http: HttpClient) {}

  //Product

  getProducts(): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/product`);
  }

  getProductByName(name: string): Observable< Product > {
    let url = `${this.baseUrl}/product/${name}`

    return this.http.get<Product>(url);
  }

  AddProduct( product: Content ): Observable<Product>{
    return this.http.post<Product>( `${this.baseUrl}/product`, product)
  }



  deleteProductById(id: number): Observable<boolean>{

  return this.http.delete<boolean>(`${this.baseUrl}/product/${id}`)
    .pipe(
      catchError(err => of(false)),
      map(resp => true)
    );
  }

  //Category

  getCategory(): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/category`)
  }


}
