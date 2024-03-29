import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private baseUrl = 'http://localhost:8080/api/products';


  constructor(private httpClent: HttpClient) { }

  getProductList(theCategoryId: number): Observable<Product[]>{
    //@TOD: need to build URL based on category id ... wil come cack to this!

    return this.httpClent.get<GetResponse> (this.baseUrl).pipe(map(response => response._embedded.products));
  }

}

interface GetResponse{
  _embedded: {
    products: Product[];
  }
}