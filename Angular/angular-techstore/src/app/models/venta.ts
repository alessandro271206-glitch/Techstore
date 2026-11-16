import { DetalleVenta } from './detalle-venta';

export interface Venta {
    id?: number;
    fecha: string;
    subtotal: number;
    igv: number;
    total: number;
    detalles: DetalleVenta[]; 
}