import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface'; // Importa la interfaz Product
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private baseUrl: string = environment.baseURL;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/product`);
  }

  getProductByName(name: string): Observable< Product > {
    let url = `${this.baseUrl}/product/${name}`

    return this.http.get<Product>(url);
  }
}
