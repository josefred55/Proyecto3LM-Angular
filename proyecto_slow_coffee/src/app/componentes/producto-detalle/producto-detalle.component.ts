import {Component, OnInit, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../servicios/product.service';
import { Product } from '../../interfaces/producto';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.css'
})
export class ProductoDetalleComponent implements OnInit {
  producto: Product | undefined;

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  ngOnInit(): void {
    // Obtenemos el id de la URL
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Buscamos el producto en el servicio
    this.productService.getProductById(id).subscribe({
      next: (data) => {
        this.producto = data;
      },
      error: (err) => console.error('Error al cargar el detalle:', err)
    });
  }

  agregarAlCarrito() {
    alert(`¡${this.producto?.titulo} añadido al carrito!`);
  }
}
