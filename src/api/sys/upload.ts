import { UploadApiResult } from './model/uploadModel'
import { defHttp } from '@/utils/http/axios'
import { UploadFileParams } from '@/types/axios'
import { useGlobSetting } from '@/hooks/setting'

const { uploadUrl = '' } = useGlobSetting()

/**
 * @description: Upload interface
 */
export function uploadApi(params: UploadFileParams): Promise<any> {
  return defHttp.uploadFile<UploadApiResult>(
    {
      url: uploadUrl
    },
    params
  )
}
