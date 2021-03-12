import { ServiceTaskListModel } from './../../models/service-task.model';
import { Router } from '@angular/router';
import { WorkOrderListModel } from './../../models/work-order-list.model';
import { WorkOrderService } from './../../services/work-order.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WorkOrderDetailListModel } from 'src/app/models/work-order-details.model';

@Component({
  selector: 'app-work-order-details',
  templateUrl: './work-order-details.component.html',
  styleUrls: ['./work-order-details.component.scss']
})
export class WorkOrderDetailsComponent implements OnInit, OnDestroy {
  selectedWorkOrder: WorkOrderListModel
  inputObj = {
    objectName: "Work Orders",
    serviceRequestId: ''
  }
  serviceTaskObj = {
    objectName: 'Service Task',
    workOrderId: ''
  }
  workOrderDetailsSubscription: Subscription
  workOrderDetails: WorkOrderDetailListModel
  serviceTaskLists: ServiceTaskListModel
  constructor(
    private workOrderService: WorkOrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.workOrderDetailsSubscription = this.workOrderService.selectedWorkOrderFromTable.subscribe(selectedWork => {
      if(Object.keys(selectedWork).length === 0 && selectedWork.constructor === Object){
        this.router.navigate(['/work/orderList'])
      }else{
        this.selectedWorkOrder = selectedWork

        this.inputObj.serviceRequestId = selectedWork._id
        this.workOrderService.getWorkOrderDetails(this.inputObj)
        .subscribe(response => {
          this.workOrderDetails = response.data[0]
          console.log(this.workOrderDetails);

        })

        this.serviceTaskObj.workOrderId = selectedWork._id
        this.workOrderService.getServiceTasks(this.serviceTaskObj)
        .subscribe(response => {
          this.serviceTaskLists = response.data[0]
          // console.log(this.workOrderDetails);

          // console.log(response);


        })

      }
    })
  }

  ngOnDestroy(){
    this.workOrderDetailsSubscription.unsubscribe()
  }

}
