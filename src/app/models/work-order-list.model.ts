export interface WorkOrderListResponseModel{
  data: Array<WorkOrderListModel>
  message: string
  status: number
  totalRecords: number
}
export interface WorkOrderListModel {
  assetId?: string
  createdAt?: string
  customerID?: string
  customerName?: string
  dueDate?: string
  dueTime?: string
  isDeleted?: number
  isSameAsCustomerAddress?: boolean
  isWorkOrder?: string
  maintenanceTypeId?: string
  maintenanceTypeName?:string
  priority?: string
  priorityId?: string
  quotationRejectionFlag?: boolean
  requestTitle?: string
  schedularID?: string
  serviceAddress?: string
  serviceRequestId?: number
  serviceTasks?: Array<string>
  signature?: Array<any>
  status?: string
  wfa?: false
  workOrderId?: number
  workOrderStatusId?: string
  workType?: string
  workTypeId?: string
  workshopID?: string
  __v?: number
  _id?: string
}
