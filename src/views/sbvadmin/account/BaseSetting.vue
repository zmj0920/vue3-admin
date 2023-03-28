<template>
  <CollapseContainer title="基本设置" :canExpan="false">
    <a-row :gutter="24">
      <a-col :span="14">
        <a-form ref="formRef" :model="formState" v-bind="layout">
          <a-form-item label="ID" name="id">
            <a-input :disabled="true" v-model:value="formState.id" :placeholder="t('common.inputText')" />
          </a-form-item>
          <a-form-item label="用户名" name="username">
            <a-input :disabled="true" v-model:value="formState.username" :placeholder="t('common.inputText')" />
          </a-form-item>
          <a-form-item
            label="邮箱"
            name="email"
            :rules="[
              {
                required: true,
                message: '必填'
              },
              {
                type: 'email',
                message: 'email'
              }
            ]"
          >
            <a-input v-model:value="formState.email" :placeholder="t('common.inputText')" />
          </a-form-item>
          <a-form-item label="昵称" name="nickname">
            <a-input v-model:value="formState.nickname" :placeholder="t('common.inputText')" />
          </a-form-item>
          <a-form-item label="联系电话" name="phone">
            <a-input v-model:value="formState.phone" :placeholder="t('common.inputText')" />
          </a-form-item>
        </a-form>
      </a-col>
      <a-col :span="10">
        <Divider>账号角色</Divider>
        <a-row :gutter="24">
          <template v-for="item in roles" :key="item.value">
            <Tag color="green">
              {{ item.nameZh }}
            </Tag>
          </template>
        </a-row>
        <Divider>头像</Divider>
        <a-row :gutter="24">
          <div class="change-avatar">
            <CropperAvatar
              :uploadApi="uploadApi"
              :value="avatar"
              btnText="更换头像"
              :btnProps="{ preIcon: 'ant-design:cloud-upload-outlined' }"
              @change="updateAvatar"
              width="150"
            />
          </div>
        </a-row>
      </a-col>
    </a-row>
    <Button type="primary" @click="handleSubmit"> 更新基本信息 </Button>
  </CollapseContainer>
</template>
<script lang="ts" setup>
import { Tag, Button, Row as ARow, Col as ACol, Divider, Form as AForm, FormItem as AFormItem } from 'ant-design-vue'
import { computed, onMounted, reactive, ref, UnwrapRef } from 'vue'
import { CollapseContainer } from '@/components/Container'
import { CropperAvatar } from '@/components/Cropper'
import { useI18n } from '@/hooks/web/useI18n'
import { useMessage } from '@/hooks/web/useMessage'
import headerImg from '@/assets/images/header.jpg'
import { FormState } from './data'
import { useUserStore } from '@/store/modules/user'
import { uploadApi } from '@/api/sys/upload'
import { getUserInfo, editUser } from '@/api/user'
const { t } = useI18n()

const formRef = ref()

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 }
}

let formState: UnwrapRef<FormState> = reactive({
  email: '',
  nickname: '',
  phone: '',
  id: '',
  username: ''
})

const { createMessage } = useMessage()
const userStore = useUserStore()

onMounted(async () => {
  const data: any = await getUserInfo()
  formState.username = data.username
  formState.id = data.id
  formState.email = data.email
  formState.nickname = data.nickname
  formState.phone = data.phone
})

const avatar = computed(() => {
  const { avatar } = userStore.getUserInfo
  return avatar || headerImg
})

const roles = computed(() => {
  const { roles } = userStore.getUserInfo
  console.log(roles)
  return roles || []
})

function updateAvatar({ source, data }) {
  const userinfo = userStore.getUserInfo
  userinfo.avatar = source
  userStore.setUserInfo(userinfo) // 显示直接使用二进制流
  // userinfo.avatar = data.result; // 更新使用url地址
  const userAvatar = {
    id: userinfo.userId,
    avatar: data.result
  }
  setUser(userAvatar)
}

async function handleSubmit() {
  formRef.value
    .validateFields()
    .then((values) => {
      console.log('Received values of form: ', values)
      setUser(values)
    })
    .catch((info) => {
      console.log('Validate Failed:', info)
    })
  // const values = await validate()
  // editUser(values)
  //   .then((res: any) => {
  //     console.log(res)
  //     if (res) {
  //       createMessage.success('更新信息成功')
  //     }
  //   })
  //   .catch(() => {
  //     createMessage.error('更新失败')
  //   })
  //   .finally(() => {
  //     console.log(values)
  //   })
}

const setUser = (values) => {
  editUser(values)
    .then((res: any) => {
      console.log(res)
      if (res) {
        createMessage.success('更新信息成功')
      }
    })
    .catch(() => {
      createMessage.error('更新失败')
    })
    .finally(() => {
      console.log(values)
    })
}
</script>

<style lang="less" scoped>
.change-avatar {
  img {
    display: block;
    margin-bottom: 15px;
    border-radius: 50%;
  }
}
</style>
