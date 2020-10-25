import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DetailComponent } from './components/detail/detail.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ValidLoginGuard } from './guards/valid-login.guard'
const routes: Routes = [
  
  {
    path: 'main', component: LoginComponent
  },
  {
    path: 'orders', component: OrdersComponent, canActivate : [ValidLoginGuard]
  },
  {
    path: 'detail/:id', component: DetailComponent, canActivate : [ValidLoginGuard]
  },
  {
    path: '', redirectTo: '/main', pathMatch: 'full'
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
