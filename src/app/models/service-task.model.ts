export interface ServiceTaskListResponseModel{
  data: Array<ServiceTaskListModel>
  message: string
  status: number
}

export interface ServiceTaskListModel{
  serviceTypeId: string
  serviceTypeName: string
  serviceTypeTasks: Array<ServiceTypeTaskModel>
  taskId: number
  taskName: string
  workType: string
  workTypeId: string
  _id: string
}

export interface ServiceTypeTaskModel{
  createdAt: string
  equipmentModelName: string
  equipmentModelYear: string
  inspectionSheetId: string
  inspectionSheetNo: number
  serviceTypeId:string
  serviceTypeName: string
  serviceTypeTaskName: string
  __v: number
  _id: string
}
