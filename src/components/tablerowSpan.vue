<template>
  <div style="padding: 15px">
    <a-table :columns="columns" :data-source="data" :pagination="false" bordered />
  </div>
</template>
<script lang="ts" setup>
import { Table as ATable } from 'ant-design-vue'

const data = [
  {
    key: '1',
    name1: '法人代表',
    name2: 32,
    name3: '经营状态',
    name4: 4,
    name5: '工商注册号',
    name6: 6,
    name7: 7,
    name8: 8,
    name9: 9,
    name10: 10
  },
  {
    key: '2',
    name1: '1111',
    name2: '11111',
    name3: '成立日期',
    name4: 4,
    name5: 5,
    name6: 6,
    name7: 7,
    name8: 8,
    name9: 9,
    name10: 10
  },
  {
    key: '3',
    name1: '营业期限',
    name2: 32,
    name3: '注册资本',
    name4: 4,
    name5: '组织机构代码',
    name6: 6,
    name7: 7,
    name8: 8,
    name9: 9,
    name10: 10
  },
  {
    key: '4',
    name1: '企业类型',
    name2: 18,
    name3: '实缴资本',
    name4: 4,
    name5: '111',
    name6: 6,
    name7: 7,
    name8: 8,
    name9: 9,
    name10: 10
  },
  {
    key: '5',
    name1: '统一社会信用代码',
    name2: 18,
    name3: '纳税人识别号',
    name4: 4,
    name5: '核准日期',
    name6: 6,
    name7: 7,
    name8: 8,
    name9: 9,
    name10: 10
  },
  {
    key: '6',
    name1: '营业期限',
    name2: 18,
    name3: '纳税人资质',
    name4: 4,
    name5: 5,
    name6: 6,
    name7: 7,
    name8: 8,
    name9: 9,
    name10: 10
  },
  {
    key: '7',
    name1: '企业类型',
    name2: 18,
    name3: '行业',
    name4: 4,
    name5: '人员规模',
    name6: 6,
    name7: 7,
    name8: 8,
    name9: 9,
    name10: 10
  },
  {
    key: '8',
    name1: '参保人数',
    name2: 18,
    name3: '登记机关',
    name4: 4,
    name5: 5,
    name6: 6,
    name7: 7,
    name8: 8,
    name9: 9,
    name10: 10
  },
  {
    key: '9',
    name1: '注册地址',
    name2: 18,
    name3: '行业',
    name4: 4,
    name5: 5,
    name6: 6,
    name7: 7,
    name8: 8,
    name9: 9,
    name10: 10
  },
  {
    key: '10',
    name1: '经营范围',
    name2: 18,
    name3: '行业',
    name4: 4,
    name5: 5,
    name6: 6,
    name7: 7,
    name8: 8,
    name9: 9,
    name10: 10
  }
]

const columns: any[] = [
  {
    title: '',
    dataIndex: 'name1',
    colSpan: 0,
    customCell: (row, index) => {
      if (row.name1 === '法人代表') {
        return { rowSpan: 4 }
      }
      if ([1, 2, 3].includes(index)) {
        return { rowSpan: 0 }
      }
      if (['经营范围', '注册地址'].includes(row.name1)) {
        return { colSpan: 6 }
      }
    }
  },
  {
    title: 'Age',
    colSpan: 0,
    dataIndex: 'name2',
    customCell: (row, index) => {
      if (index === 0) {
        return { rowSpan: 4 }
      }
      if ([1, 2, 3].includes(index)) {
        return { rowSpan: 0 }
      }
      if (['经营范围', '注册地址'].includes(row.name1)) {
        return { colSpan: 0 }
      }
    }
  },
  {
    title: 'Home phone',
    colSpan: 0,
    dataIndex: 'name3',
    customCell: (row, index) => {
      if (['经营范围', '注册地址'].includes(row.name1)) {
        return { colSpan: 0 }
      }
    }
  },
  {
    title: 'Address',
    colSpan: 0,
    dataIndex: 'name4',
    customCell: (row, index) => {
      if (['经营范围', '注册地址'].includes(row.name1)) {
        return { colSpan: 0 }
      }
    }
  },
  {
    title: 'Address',
    colSpan: 0,
    dataIndex: 'name5',
    customCell: (row, index) => {
      if (['经营范围', '注册地址'].includes(row.name1)) {
        return { colSpan: 0 }
      }
      if (['工商注册号', '组织机构代码', '核准日期', '人员规模'].includes(row.name5)) {
        return { rowSpan: 2 }
      }
      if ([1, 3, 5, 7].includes(index)) {
        return { rowSpan: 0 }
      }
    }
  },
  {
    title: 'Address',
    colSpan: 0,
    dataIndex: 'name6',
    customCell: (row, index) => {
      if (['经营范围', '注册地址'].includes(row.name1)) {
        return { colSpan: 0 }
      }
    }
  }
]
</script>
