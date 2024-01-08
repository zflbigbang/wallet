<template>
  <Header :title="title"></Header>
  <div class="main">
    <div class="head">请认真阅读如下说明</div>

    <div><hr /></div>

    <div class="text">
      <div v-for="item in items">
        <div class="span">{{ item }}</div>
      </div>
    </div>
  </div>
  <div class="button">
    <Button text="开始导出" @click="goKey"></Button>
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
const goKey = () => {
  router.push('/export')
}
</script>

<style lang="scss" scoped>
.main {
  width: 340px;
  height: 320px;
  background-color: #ffffff;
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
    flex-direction: column;
    text-align: center;
    align-items: center;
    color: black;
  }
}
.button {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
