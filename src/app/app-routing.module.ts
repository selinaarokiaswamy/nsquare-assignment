import { WorkOrderListComponent } from './work-order/work-order-list/work-order-list.component';
import { LoginComponent } from './authentication/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkOrderAccessGuard } from './guards/work-order-access.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'work',
    loadChildren: () => import('./work-order/work-order.module').then(
      m => m.WorkOrderModule
    ),
    canActivate: [WorkOrderAccessGuard]
  },
  { path: '', redirectTo: '/work/orderList', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
