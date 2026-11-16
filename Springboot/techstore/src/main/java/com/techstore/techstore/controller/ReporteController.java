package com.techstore.techstore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techstore.techstore.repository.VentaRepository;

@CrossOrigin(origins = "http://localhost:4200") 
@RestController
@RequestMapping("/api/reportes")
public class ReporteController {

    @Autowired
    private VentaRepository ventaRepository;

    @GetMapping("/total-ventas")
    public Double totalVentas() {
        Double total = ventaRepository.sumTotalVentas();
        return total != null ? total : 0.0;
    }

    @GetMapping("/cantidad-ventas")
    public Long cantidadVentas() {
        return ventaRepository.count();
    }
}
