<!--
 * @Author: BGG
 * @Date: 2022-08-08 11:06:06
 * @LastEditors: BGG
 * @LastEditTime: 2022-08-08 13:49:55
 * @Description:  切换主题
-->

<template>
  <div>
    <div class="panel"></div>
    <span class="btn" @click="handleChangeTheme">切换主题</span>
  </div>
</template>

<script setup lang="ts">
const handleChangeTheme = () => {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark')
  } else {
    document.body.classList.add('dark')
  }
}
</script>

<style scoped lang="less">
.panel {
  width: 200px;
  height: 200px;
  background-color: var(--panel-bg-color);
}
.btn {
  user-select: none;
  cursor: pointer;
  color: var(--font-main-color);
}
</style>
