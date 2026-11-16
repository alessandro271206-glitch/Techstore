import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html'
})
export class DashboardComponent {
  titulo:string = 'Dashboard Principal';

  constructor(private router: Router) {}

  irProductos() {
    this.router.navigate(['/productos']);
  }
}