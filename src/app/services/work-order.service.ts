import { ServiceTaskListResponseModel } from './../models/service-task.model';
import { WorkOrderListModel } from './../models/work-order-list.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInfo } from './../models/authentication.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';
import { WorkOrderListResponseModel } from '../models/work-order-list.model';
import { WorkOrderDetailListModel, WorkOrderDetailResponseModel } from '../models/work-order-details.model';

@Injectable({
  providedIn: 'root'
})
export class WorkOrderService {
  serverUrl: string
  user_info: UserInfo
  selectedWorkOrderFromTable: BehaviorSubject<WorkOrderListModel> = new BehaviorSubject({});
  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {
    this.serverUrl = environment.SERVER_URL
    this.authService.user_info.subscribe(user => {
      console.log('User');
      console.log(user);
      this.user_info = user
    })
   }

   getWorkOrderList(inputObj): Observable<WorkOrderListResponseModel>{
    //  pageNo = pageNo.IsNullOrEmpty ? '%02%03' : pageNo
    //  searchText = searchText.IsNullOrEmpty ? '""' : searchText
    //  objectName = objectName.IsNullOrEmpty ? '%02%03' : objectName

    var params = new HttpParams()
    .set('userId', this.user_info.userId)
    .set('pageNo', inputObj.pageNo)
    .set('objectName', inputObj.objectName)


    // Object.keys(inputObj).forEach(input => {
    //   if (inputObj[input]) {
    //     params.set(input, inputObj[input])
    //   }
    // });
     return this.http.get<WorkOrderListResponseModel>(`${this.serverUrl}${environment.API.getWorkOrderList}`, { params })
   }

   getWorkOrderDetails(inputObj) :Observable<WorkOrderDetailResponseModel>{
    var params = new HttpParams()
    .set('userId', this.user_info.userId)
    .set('serviceRequestId', inputObj.serviceRequestId)
    .set('objectName', inputObj.objectName)

    Object.keys(inputObj).forEach(input => {
      if (inputObj[input]) {
        params.set(input, inputObj[input])
      }
    });
    console.log(params);
    return this.http.get<WorkOrderDetailResponseModel>(`${this.serverUrl}${environment.API.getWorkOrderDetails}`, { params })
  }

  getServiceTasks(inputObj): Observable<ServiceTaskListResponseModel>{
    var params = new HttpParams()
    .set('userId', this.user_info.userId)
    .set('workOrderId', inputObj.workOrderId)
    .set('objectName', inputObj.objectName)

    Object.keys(inputObj).forEach(input => {
      if (inputObj[input]) {
        params.set(input, inputObj[input])
      }
    });
    console.log(params);
    return this.http.get<ServiceTaskListResponseModel>(`${this.serverUrl}${environment.API.getUserServiceTasks}`, { params })
  }

}
