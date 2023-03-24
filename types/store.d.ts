import { ErrorTypeEnum } from '/@/enums/exceptionEnum';
import { MenuModeEnum, MenuTypeEnum } from '/@/enums/menuEnum';
import { RoleInfo } from '/@/api/sys/model/userModel';

// Lock screen information
export interface LockInfo {
  // Password required
  pwd?: string | undefined;
  // Is it locked?
  isLock?: boolean;
}

// Error-log information
export interface ErrorLogInfo {
  type: ErrorTypeEnum; // 错误类型
  file: string; // 产生错误文件
  name?: string; // 错误名称
  message: string; // 错误信息
  stack?: string; // 调用堆栈信息
  detail: string; // 错误详情
  url: string; // 页面url
  time?: string; // 发生时间
}

export interface UserInfo {
  userId: string | number;
  username: string;
  realName: string;
  avatar: string;
  desc?: string;
  homePath?: string;
  roles: RoleInfo[];
}

export interface BeforeMiniState {
  menuCollapsed?: boolean; // 菜单折叠
  menuSplit?: boolean; // 分割菜单
  menuMode?: MenuModeEnum; // 菜单类型
  menuType?: MenuTypeEnum; // 菜单模式
}
