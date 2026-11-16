import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  
  private api = 'http://localhost:8080/api/reportes';

  constructor(private http: HttpClient) {}

  obtenerTotalVentas(): Observable<number> {
    return this.http.get<number>(`${this.api}/total-ventas`);
  }

  obtenerCantidadVentas(): Observable<number> {
    return this.http.get<number>(`${this.api}/cantidad-ventas`);
  }
}