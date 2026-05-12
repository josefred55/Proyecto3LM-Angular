import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  step = 1;

  // Datos de envío
  nombre = '';
  apellido = '';
  email = '';
  telefono = '';
  direccion = '';
  ciudad = '';
  codigoPostal = '';
  pais = '';

  // Datos de pago
  metodoPago = 'tarjeta';
  numeroTarjeta = '';
  nombreTitular = '';
  fechaExpiracion = '';
  cvv = '';
  emailPaypal = '';

  onSubmitEnvio() {
    this.step = 2;
  }

  onSubmitPago() {
    this.step = 3;
  }

  volverAlCarrito() {
    this.step = 1;
  }
}
