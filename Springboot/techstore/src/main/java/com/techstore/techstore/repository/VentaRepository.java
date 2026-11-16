package com.techstore.techstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.techstore.techstore.entity.Venta;

public interface VentaRepository extends JpaRepository<Venta, Long> {
    
    
    @Query("SELECT SUM(v.total) FROM Venta v")
    Double sumTotalVentas();
}