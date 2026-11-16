import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { ProductoService } from '../../services/producto.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-formulario-producto',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './formulario-producto.html',
  styleUrl: './formulario-producto.css'
})
export class FormularioProductoComponent implements OnInit {
  formularioProducto!: FormGroup;

  
  constructor(private fb: FormBuilder, private productoService: ProductoService) {}

  ngOnInit() {
    this.formularioProducto = this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(1)]],
      stock: [0, [Validators.required, Validators.min(0)]]
    });
  }

  
  guardarProducto() {
    this.productoService.guardar(this.formularioProducto.value).subscribe(() => {
      alert('Producto guardado correctamente');
      this.formularioProducto.reset(); 
    });
  }
}
