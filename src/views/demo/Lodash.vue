<!--
 * @Author: BGG
 * @Date: 2022-08-09 16:01:10
 * @LastEditors: BGG
 * @LastEditTime: 2022-08-09 16:22:00
 * @Description:  Lodash
-->

<template>
  <div>
    {{ objArr2 }}
  </div>
</template>

<script setup lang="ts">
import { groupBy } from 'lodash-es'

// const arr = [ 1, 2, 3 ]
const objArr = [
  { time: '2022-08-09', b: 1 },
  { time: '2022-08-09', b: 2 },
  { time: '2022-08-10', b: 3 }
]
const objArr2 = groupBy(objArr, 'time')
</script>

<style>

</style>
