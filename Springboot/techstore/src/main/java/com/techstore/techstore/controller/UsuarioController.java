package com.techstore.techstore.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techstore.techstore.entity.Usuario;
import com.techstore.techstore.repository.UsuarioRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping("/login")
    public Usuario login(@RequestBody Usuario usuario) {
        return usuarioRepository.findByCorreoAndPassword(usuario.getCorreo(), usuario.getPassword())
                .orElse(null); 
    }
}
