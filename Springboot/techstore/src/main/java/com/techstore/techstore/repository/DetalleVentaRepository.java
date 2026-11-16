package com.techstore.techstore.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.techstore.techstore.entity.DetalleVenta;

public interface DetalleVentaRepository extends JpaRepository<DetalleVenta, Long> {
}
