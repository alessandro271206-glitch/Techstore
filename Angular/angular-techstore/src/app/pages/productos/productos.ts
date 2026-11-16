import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // <-- 1. Importamos ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './productos.html',
  styleUrls: ['./productos.css']
})
export class ProductosComponent implements OnInit {
  
  productos: Producto[] = [];

  // 2. Lo inyectamos en el constructor
  constructor(
    private productoService: ProductoService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit() {
    this.productoService.listar().subscribe({
      next: (data) => {
        this.productos = data;
        this.cdr.detectChanges(); // <-- 3. LA MAGIA: Obliga a Angular a pintar la tabla inmediatamente
      },
      error: (err) => {
        console.error("Error al cargar:", err);
      }
    });
  }

  eliminar(id: number) {
    this.productoService.eliminar(id).subscribe(() => {
      this.ngOnInit(); // Recarga la tabla
    });
  }
}