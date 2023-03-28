import { BasicFetchResult, BasicPageParams } from '../model/baseModel'

/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string
  password: string
}

export interface RoleInfo {
  roleName: string
  value: string
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  userId: string | number
  token: string
  role: RoleInfo
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  roles: RoleInfo[]
  // 用户id
  userId: string | number
  // 用户名
  username: string
  // 真实名字
  realName: string
  // 头像
  avatar: string
  // 介绍
  desc?: string
}

export interface User {
  id: number
  name: string
  username: string
  avatar: string
  last_login_at: string
  last_login_ip: string
  enabled: boolean
  locked: boolean
}

export type UserParams = BasicPageParams & {
  id: number
  createdAt: string
}

export type UserList = BasicFetchResult<User>
