import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReporteService } from '../../services/reporte.service';
import { VentaService } from '../../services/venta.service';
import { Venta } from '../../models/venta';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './reportes.css',
  templateUrl: './reportes.html'
})
export class ReportesComponent implements OnInit {
  totalVentas: number = 0;
  cantidadVentas: number = 0;
  historialVentas: Venta[] = [];

  constructor(
    private reporteService: ReporteService,
    private ventaService: VentaService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    
    this.reporteService.obtenerTotalVentas().subscribe(total => {
      this.totalVentas = total;
      this.cdr.detectChanges(); 
    });

    
    this.reporteService.obtenerCantidadVentas().subscribe(cantidad => {
      this.cantidadVentas = cantidad;
      this.cdr.detectChanges();
    });

    
    this.ventaService.listar().subscribe(ventas => {
      this.historialVentas = ventas;
      this.cdr.detectChanges();
    });
  }
}