import { MaterialModule } from './../utils/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkOrderListComponent } from './work-order-list/work-order-list.component';
import { WorkOrderDetailsComponent } from './work-order-details/work-order-details.component';
import { Routes, RouterModule } from '@angular/router';

const WorkOrderRoutes: Routes = [
  {
    path: 'orderList',
    component: WorkOrderListComponent
  },
  {
    path: 'orderDetails',
    component: WorkOrderDetailsComponent
  }
]

@NgModule({
  declarations: [WorkOrderListComponent, WorkOrderDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(WorkOrderRoutes),
    MaterialModule
  ]
})
export class WorkOrderModule { }
