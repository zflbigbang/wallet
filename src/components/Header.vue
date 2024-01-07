<template>
  <div class="header">
    <van-icon name="arrow-left" @click="goBack" class="goBack" />
    <div>{{ title }}</div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
defineProps(['title'])
const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<style lang="scss" scoped>
.header {
  width: 375px;
  height: 45px;
  font-size: 18px;
  font-weight: 600;
  line-height: 45px;

  text-align: center;
  .goBack {
    line-height: 45px;
    position: absolute;
    left: 10px;
  }
}
</style>
