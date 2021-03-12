export interface WorkOrderDetailResponseModel{
  data: Array<WorkOrderDetailListModel>
  message: string
  status: number
}
export interface WorkOrderDetailListModel{
  assetId: string
  assetName: string
  createdAt: string
  customerID: string
  customerName: string
  dueDate: string
  dueTime: string
  isDeleted: number
  isSameAsCustomerAddress: boolean
  isWorkOrder: string
  maintenanceTypeId: string
  maintenanceTypeName: string
  priority: string
  priorityId: string
  quotationRejectionFlag: boolean
  requestTitle: string
  schedularID: string
  serviceAddress: string
  serviceRequestId: number
  serviceTasks: Array<string>
  signature: Array<any>
  status: string
  wfa: boolean
  workOrderId: number
  workOrderStatusId: string
  workType: string
  workTypeId: string
  workshopID: string
  _id: string
}
