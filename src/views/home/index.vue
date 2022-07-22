<template>
  <div>
    Home
    {{ userStore.name }}
    <button @click="updateName">修改name</button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
const updateName = () => {
  userStore.updateName('李四')
}
</script>

<style>

</style>