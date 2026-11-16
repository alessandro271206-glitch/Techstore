package com.techstore.techstore.entity;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="venta")
@Data
public class Venta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private LocalDate fecha;
    private Double subtotal;
    private Double igv;
    private Double total;

    
    @OneToMany(mappedBy="venta", cascade = CascadeType.ALL)
    @JsonManagedReference 
    private List<DetalleVenta> detalles;
}
