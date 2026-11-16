import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {
  correo: string = '';
  password: string = '';
  error: boolean = false;

  constructor(private http: HttpClient, private auth: AuthService, private router: Router) {}

  ingresar() {
    this.http.post<any>('http://localhost:8080/api/usuarios/login', { correo: this.correo, password: this.password })
      .subscribe(user => {
        if (user) {
          this.auth.guardarSesion(user);
          
          if (this.auth.esVendedor()) {
            this.router.navigate(['/ventas']);
          } else {
            this.router.navigate(['/reportes']);
          }
        } else {
          this.error = true; 
        }
      });
  }
}
