package com.techstore.techstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techstore.techstore.entity.Producto;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
}
