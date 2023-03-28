import { defHttp } from '@/utils/http/axios'
import { getMenuListResultModel } from './menuModel'

export const getMenus = () => {
  return defHttp.get<getMenuListResultModel>({ url: '/getMenuList' }, { successMessageMode: 'none' })
}
