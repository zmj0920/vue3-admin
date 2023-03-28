import { ErrorMessageMode } from '@/types/axios'
import { defHttp } from '@/utils/http/axios'
import { GetUserInfoModel, LoginResultModel, User, UserList, UserParams } from './userModel'

export function login(params: any, model: ErrorMessageMode) {
  return defHttp.post<LoginResultModel>(
    { url: '/login', params },
    {
      errorMessageMode: model
    }
  )
}

export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>(
    {
      url: '/getUserInfo'
    },
    { successMessageMode: 'none' }
  )
}

export function logout() {
  return defHttp.get({ url: '/logout' })
}

export function getPermissions() {
  return defHttp.get<string[]>(
    {
      url: '/getPermCode'
    },
    { successMessageMode: 'none' }
  )
}

export function getUsers(params: UserParams) {
  return defHttp.get<UserList>({
    url: '/users',
    params
  })
}

export function addUser(data: User) {
  return defHttp.post<User>({ url: '/users', data })
}

export function editUser(data: any) {
  return defHttp.put<User>({ url: `/users/${data.id}`, data })
}

export function deleteUser(id: number) {
  return defHttp.delete({ url: `/users/${id}` })
}

export function changePassword(data: any) {
  return defHttp.post<User>({ url: '/users/changePassword', data })
}
