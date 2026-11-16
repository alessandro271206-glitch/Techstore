package com.techstore.techstore.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.techstore.techstore.entity.DetalleVenta;
import com.techstore.techstore.entity.Producto;
import com.techstore.techstore.entity.Venta;
import com.techstore.techstore.repository.ProductoRepository;
import com.techstore.techstore.repository.VentaRepository;

@Service
public class VentaService {
    @Autowired
    private VentaRepository repository;
    
    @Autowired
    private ProductoRepository productoRepository; 

    public List<Venta> listar() {
        return repository.findAll();
    }

    public Venta guardar(Venta venta) {
        
        if (venta.getDetalles() != null) {
            for (DetalleVenta detalle : venta.getDetalles()) {
                detalle.setVenta(venta);
                
                Producto p = productoRepository.findById(detalle.getProducto().getId()).orElse(null);
                if (p != null) {
                    p.setStock(p.getStock() - detalle.getCantidad());
                    productoRepository.save(p);
                }
            }
        }
        return repository.save(venta);
    }
}
