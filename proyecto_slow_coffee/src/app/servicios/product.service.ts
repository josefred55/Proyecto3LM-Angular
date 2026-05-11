import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs'; // <--- ¡Asegúrate de importar 'map'!
import { Product } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private jsonUrl = 'data/productos.json';
  private http = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.jsonUrl);
  }

  // ESTE ES EL MÉTODO QUE TE FALTA O TIENE OTRO NOMBRE
  getProductById(id: number): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map(products => products.find(p => p.id === id))
    );
  }
}
