<!--
 * @Author: BGG
 * @Date: 2022-07-25 10:40:08
 * @LastEditors: BGG
 * @LastEditTime: 2022-07-25 11:03:28
 * @Description:  VueUse demo
-->

<template>
  <div>
    <h1> 测试 vueUse 的鼠标坐标 </h1>
    <h3>Mouse: {{ x }} x {{ y }}</h3>
  </div>
</template>

<script setup lang="ts">
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()
</script>

<style>

</style>
