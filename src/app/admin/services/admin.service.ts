import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../environments/environments';
import {  ContentProduct, Product } from '../interfaces/product.interface';
import { Category, ContentCategory } from '../interfaces/category.interface';
import { ContentSupplier, Supplier } from '../interfaces/supplier.interface';


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

  AddProduct( product: ContentProduct ): Observable<Product>{
    return this.http.post<Product>( `${this.baseUrl}/product`, product)
  }

  updateProduct( product: ContentProduct ): Observable<ContentProduct>{
    return this.http.put<ContentProduct>(`${this.baseUrl}/product/${product.id}`, product)
  }


  deleteProductById(id: number): Observable<boolean>{
    return this.http.delete<boolean>(`${this.baseUrl}/product/${id}`)
      .pipe(
        catchError(err => of(false)),
        map(resp => true)
      );
  }

  //Category

  addCategory( category: ContentCategory ): Observable<Category>{
    return this.http.post<Category>(`${this.baseUrl}/category`, category)
  }

  getCategory(): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/category`)
  }

  deleteCategory(id: number): Observable<Boolean>{
    return this.http.delete<boolean>(`${this.baseUrl}/category/${id}`)
    .pipe(
      catchError(err => of(false)),
      map(resp => true)
    );
  }

  //Supplier
  getSuppliers(): Observable<Supplier>{
    return this.http.get<Supplier>(`${this.baseUrl}/supplier`)
  }

  deleteSupplier(id: number): Observable<boolean>{
    return this.http.delete<boolean>(`${this.baseUrl}/supplier/${id}`)
    .pipe(
      catchError(err => of(false)),
      map(resp => true)
    );
  }

  addSupplier( supplier: ContentSupplier ): Observable<Supplier>{
    return this.http.post<Supplier>(`${this.baseUrl}/supplier`, supplier)
  }

  getSupplierById( id: number ): Observable<ContentSupplier>{
    return this.http.get<ContentSupplier>(`${this.baseUrl}/supplier/${id}`)
  }

  updateSupplier( supplier: ContentSupplier ): Observable<ContentSupplier>{
    return this.http.put<ContentSupplier>(`${this.baseUrl}/supplier/${supplier.id}`, supplier)
  }


}
