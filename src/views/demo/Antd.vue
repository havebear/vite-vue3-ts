<!--
 * @Author: BGG
 * @Date: 2022-08-10 15:07:32
 * @LastEditors: BGG
 * @LastEditTime: 2022-08-10 16:25:56
 * @Description:  antd 组件
-->

<template>
  <div>
    <PageHeader
      style="border: 1px solid rgb(235, 237, 240)"
      title="Title"
      sub-title="This is a subtitle"
      @back="() => null"
    />
  </div>
</template>

<script setup lang="ts">
import { PageHeader } from 'ant-design-vue'

</script>

<style>

</style>
