import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  private baseUrl = 'http://localhost:8080/api/products';
  private categoyUrl = 'http://localhost:8080/api/product-category';


  constructor(private httpClent: HttpClient) { }

  getProductList(theCategoryId: number): Observable<Product[]>{
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;
    return this.httpClent.get<GetResponseProduct> (searchUrl).pipe(
      map(response => response._embedded.products));
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClent.get<GetResponseProductCategory> (this.categoyUrl).pipe(
      map(response => response._embedded.productCategories));
  }

}

interface GetResponseProduct{
  _embedded: {
    products: Product[];
  }

}
interface GetResponseProductCategory{
  _embedded: {
    productCategories: ProductCategory[];
  }
}
