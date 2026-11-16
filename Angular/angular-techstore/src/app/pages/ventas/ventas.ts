import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VentaService } from '../../services/venta.service';
import { ProductoService } from '../../services/producto.service';
import { DetalleVenta } from '../../models/detalle-venta';
import { Producto } from '../../models/producto';
import { Venta } from '../../models/venta';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ventas.html'
})
export class VentasComponent implements OnInit {
  productos: Producto[] = [];
  carrito: DetalleVenta[] = []; // Paso 11
  
  // Totales
  subtotal: number = 0;
  igv: number = 0;
  total: number = 0;

  constructor(
    private ventaService: VentaService,
    private productoService: ProductoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    
    this.productoService.listar().subscribe(data => {
      this.productos = data;
      this.cdr.detectChanges();
    });
  }

  // Paso 12: Agregar al carrito
  agregarProducto(producto: Producto, cantidad: string) {
    const cant = parseInt(cantidad);
    if (!cant || cant <= 0) return;

    const detalle: DetalleVenta = {
      producto: { id: producto.id! }, 
      cantidad: cant,
      precioUnitario: producto.precio,
      subtotal: producto.precio * cant
    };
    
    this.carrito.push(detalle);
    this.calcularTotal(); 
  }

  
  calcularTotal() {
    this.subtotal = this.carrito.reduce((acc, d) => acc + d.subtotal, 0);
    this.igv = this.subtotal * 0.18;
    this.total = this.subtotal + this.igv;
  }

  
  guardarVenta() {
    if (this.carrito.length === 0) return;

    const nuevaVenta: Venta = {
      fecha: new Date().toISOString().split('T')[0],
      subtotal: this.subtotal,
      igv: this.igv,
      total: this.total,
      detalles: this.carrito
    };

    this.ventaService.guardar(nuevaVenta).subscribe(() => {
      alert('Venta registrada con éxito');
      this.carrito = []; 
      this.calcularTotal(); 
      
      
      this.productoService.listar().subscribe(data => {
        this.productos = data;
        this.cdr.detectChanges(); 
      });
    });
  }
}