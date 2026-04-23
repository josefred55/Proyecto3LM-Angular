import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HeroComponent} from '../../layout/hero/hero.component';
import {ProductCardComponent} from '../../layout/product-card/product-card.component';

interface Product {
  id: number;
  name: string;
  origin: string;
  process: string;
  note: string;
  badge: string;
  price: number;
  img: string;
}

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, FormsModule, HeroComponent, ProductCardComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit {

  // --- Datos ---
  protected origins = ['Etiopía', 'Colombia', 'Brasil', 'Kenya'];
  protected processes = ['Lavado', 'Natural', 'Honey'];
  protected noteMap: Record<string, string[]> = {
    'Etiopía':  ['Frutos Rojos y Cítricos', 'Floral y Bergamota', 'Bayas y Chocolate'],
    'Colombia': ['Caramelo y Nueces', 'Naranja y Miel', 'Chocolate y Ciruela'],
    'Brasil':   ['Chocolate y Avellana', 'Nuez y Especias', 'Caramel y Azúcar'],
    'Kenya':    ['Limón y Grosella', 'Frambuesa y Menta', 'Tropical y Cítrico']
  };
  protected badgeTypes = ['Orgánico', 'Premium', 'Comercio Justo'];

  // --- Estado ---
  products: Product[] = [];
  filteredProducts: Product[] = [];
  currentYear = new Date().getFullYear();

  // --- Filtros ---
  searchTerm = '';
  selectedOrigins: string[] = [];
  selectedBadges: string[] = [];
  sortValue = '';

  ngOnInit() {
    this.products = Array.from({ length: 7 }, (_, i) => {
      const origin = this.origins[i % this.origins.length];
      return {
        id: i + 1,
        name: `Café ${origin} Lote #${i + 1}`,
        origin,
        process: this.processes[i % this.processes.length],
        note: this.noteMap[origin][i % 3],
        badge: this.badgeTypes[i % this.badgeTypes.length],
        price: parseFloat((12 + ((i * 1.37) % 15)).toFixed(2)),
        img: 'img/productosFoto.png'
      };
    });

    this.filteredProducts = [...this.products];
  }

  toggleFilter(list: string[], value: string) {
    const idx = list.indexOf(value);
    idx === -1 ? list.push(value) : list.splice(idx, 1);
  }

  isChecked(list: string[], value: string): boolean {
    return list.includes(value);
  }

  applyFilters() {
    const term = this.searchTerm.toLowerCase();

    let filtered = this.products.filter(p => {
      const matchSearch = !term || p.name.toLowerCase().includes(term) || p.note.toLowerCase().includes(term);
      const matchOrigin = !this.selectedOrigins.length || this.selectedOrigins.includes(p.origin);
      const matchBadge  = !this.selectedBadges.length  || this.selectedBadges.includes(p.badge);
      return matchSearch && matchOrigin && matchBadge;
    });

    if (this.sortValue === 'price-asc')  filtered.sort((a, b) => a.price - b.price);
    if (this.sortValue === 'price-desc') filtered.sort((a, b) => b.price - a.price);

    this.filteredProducts = filtered;
  }
}
