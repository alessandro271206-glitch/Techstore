import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { ProductosComponent } from './pages/productos/productos';
import { VentasComponent } from './pages/ventas/ventas';
import { ReportesComponent } from './pages/reportes/reportes';
import { FormularioProductoComponent } from './pages/formulario-producto/formulario-producto';
// 1. IMPORTAR LOGIN Y GUARD
import { LoginComponent } from './pages/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [authGuard] 
  },
  { 
    path: 'productos', 
    component: ProductosComponent,
    canActivate: [authGuard] 
  },
  { 
    path: 'producto/:id', 
    component: FormularioProductoComponent,
    canActivate: [authGuard] 
  },
  { 
    path: 'ventas', 
    component: VentasComponent,
    canActivate: [authGuard] 
  },
  { 
    path: 'reportes', 
    component: ReportesComponent,
    canActivate: [authGuard] 
  },
  { 
    path: 'formulario-producto', 
    component: FormularioProductoComponent,
    canActivate: [authGuard] 
  }
];
