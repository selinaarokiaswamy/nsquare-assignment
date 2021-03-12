import { WorkOrderService } from './../../services/work-order.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkOrderListModel } from 'src/app/models/work-order-list.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-order-list',
  templateUrl: './work-order-list.component.html',
  styleUrls: ['./work-order-list.component.scss']
})
export class WorkOrderListComponent implements OnInit {
  displayedColumns: string[] = ['woNo', 'title', 'dueOn', 'status', 'actions'];
  dataSource: MatTableDataSource<WorkOrderListModel>

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  inputObj = {
    pageNo: '1',
    searchText: "",
    objectName: "Work Orders"
  }
  constructor(
    private workOrderService: WorkOrderService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.workOrderService.getWorkOrderList(this.inputObj)
    .subscribe(response => {
      console.log('Work Order List')
      console.log(response)
      this.dataSource = new MatTableDataSource(response.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  viewWorkOrder(selectedWork){
    this.workOrderService.selectedWorkOrderFromTable.next(selectedWork)
    this.router.navigate(['/work/orderDetails'])

  }

}
