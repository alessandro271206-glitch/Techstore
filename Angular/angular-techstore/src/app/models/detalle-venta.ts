export interface DetalleVenta {
    producto: { id: number }; 
    cantidad: number;
    precioUnitario: number;
    subtotal: number;
}