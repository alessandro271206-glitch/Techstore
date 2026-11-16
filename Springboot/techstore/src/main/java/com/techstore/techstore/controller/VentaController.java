package com.techstore.techstore.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techstore.techstore.entity.Venta;
import com.techstore.techstore.service.VentaService;

@RestController
@RequestMapping("/api/ventas")
public class VentaController {
    @Autowired
    private VentaService service;

    @GetMapping
    public List<Venta> listar() {
        return service.listar();
    }

    @PostMapping
    public Venta guardar(@RequestBody Venta venta) {
        return service.guardar(venta);
    }
}
