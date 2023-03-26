<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="toggleCanResize"> 新增账号 </a-button>
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts" setup>
import { BasicTable, useTable } from '@/components/Table'
import { columns } from './account'
import { onMounted, ref } from 'vue'
import { getAccountList } from '@/api/demo/system'
const [registerTable, { reload }] = useTable({
  title: '账号列表',
  api: getAccountList,
  columns,
  rowKey: 'id',
  showTableSetting: true
})

const canResize = ref(false)

function toggleCanResize() {
  reload()
  canResize.value = !canResize.value
}

onMounted(() => {
  // from(getAccountList())
  //   .pipe(
  //     map((res: any) => {
  //       return res.items;
  //     }),
  //   )
  //   .subscribe((res) => {
  //     console.log(11);
  //     console.log(res);
  //   });
})
</script>

<style lang="less" scoped></style>
