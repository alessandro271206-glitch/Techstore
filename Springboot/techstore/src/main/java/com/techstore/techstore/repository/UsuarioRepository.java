package com.techstore.techstore.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techstore.techstore.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByCorreoAndPassword(String correo, String password);
}
