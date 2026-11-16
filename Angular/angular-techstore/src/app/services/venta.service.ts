

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venta } from '../models/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  
  private api = 'http://127.0.0.1:8080/api/ventas';

  constructor(private http: HttpClient) {}

  listar(): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.api);
  }

  guardar(venta: Venta): Observable<Venta> {
    return this.http.post<Venta>(this.api, venta);
  }
}
