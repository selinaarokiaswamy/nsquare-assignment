export interface LoginRequestModel{
  email: string
  password: string
}

export interface LoginResponseModel{
  data: Array<UserInfo>
  message: string
  status: number
  token: string

}

export interface UserInfo{
  isActivated: number
  isDeleted: number
  roleType: number
  userId: string
  userName: string
}
