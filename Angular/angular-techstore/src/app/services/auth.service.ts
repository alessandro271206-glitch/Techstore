import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  guardarSesion(usuario: any) {
    sessionStorage.setItem('usuario', JSON.stringify(usuario));
  }

  obtenerUsuario() {
    const user = sessionStorage.getItem('usuario');
    return user ? JSON.parse(user) : null;
  }

  logout() {
    sessionStorage.clear();
  }

  estaLogueado(): boolean {
    return this.obtenerUsuario() != null;
  }

  esAdministrador(): boolean {
    const user = this.obtenerUsuario();
    return user?.rol?.nombre === 'ADMINISTRADOR';
  }

  esVendedor(): boolean {
    const user = this.obtenerUsuario();
    return user?.rol?.nombre === 'VENDEDOR';
  }

  esSupervisor(): boolean {
    const user = this.obtenerUsuario();
    return user?.rol?.nombre === 'SUPERVISOR';
  }
}
