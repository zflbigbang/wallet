<template>
  <Header :title="title"></Header>
  <div class="main">
    <div class="head">请认真阅读如下说明</div>
    <hr />
    <div v-for="item in items" class="text">
      <div class="circle"></div>
      <div class="span">{{ item }}</div>
    </div>
  </div>
  <div class="button">
    <Button text="开始导出" @click="goBackUp"></Button>
    <Button text="暂不导出" color=""></Button>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Button from '@/components/Button.vue'
import { ref, reactive } from 'vue'
const title = ref('导出私钥安全提示')
const items = reactive([
  '获得私钥等于拥有钱包资产所有权',
  '使用纸笔正确抄写，并保管至安全的地方',
  '私钥丢失将无法找回，请务必妥善保存'
])
import { useRouter } from 'vue-router'

const router = useRouter()
const goBackUp = () => {
  router.push('/export')
}
</script>

<style lang="scss" scoped>
.main {
  width: 340px;
  height: 320px;
  background-color: #f0f0f0;
  margin: auto;
  margin-top: 30px;
  text-align: center;
  overflow: hidden;
  .head {
    margin-top: 10px;
    font-weight: 600;
  }
  .text {
    display: flex;
    text-align: center;
    margin-top: 20px;
    .circle {
      width: 10px;
      height: 10px;
      border-radius: 10px;
      background-color: #ffca28;
    }
  }
}
.button {
  margin-top: 40px;
  text-align: center;
}
</style>
