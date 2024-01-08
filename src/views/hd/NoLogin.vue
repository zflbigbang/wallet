<template>
  <div class="nologin">
    <div class="header">HD钱包</div>
    <div class="content">
      <div class="img"><img src="@/assets/login.png" alt="" /></div>
      <div class="text">
        <span>创建属于自己的 HD 钱包</span><span>掌控资产、安全随行</span>
      </div>
      <Button text="创建 HD 钱包" @click="create"></Button>

      <div class="import">
        <span>已有 HD 钱包？</span>
        <span @click="im">点此导入钱包</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '@/components/Button.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const create = () => {
  router.push('/create')
}
const im = () => {
  router.push('/import')
}
</script>

<style lang="scss" scoped>
.nologin {
  .header {
    width: 100px;
    height: 45px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    line-height: 45px;
  }
  .content {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    align-items: center;
    text-align: center;

    .img {
      width: 240px;
      height: 200px;
    }
    .text {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      width: 240px;
      height: 37px;
      font-size: 14px;
      margin-bottom: 35px;
    }

    .import {
      margin-top: 40px;
      font-size: 14px;
      height: 30px;
      span:nth-child(2) {
        color: #ff7800;
      }
    }
  }
}
</style>
