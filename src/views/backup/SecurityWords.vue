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
    <Button text="开始备份" @click="goBackUp"></Button>
    <Button text="暂不备份" color=""></Button>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Button from '@/components/Button.vue'
import { ref, reactive } from 'vue'
const title = ref('备份助记词安全提示')
const items = reactive([
  '未备份助记词，将无法保障资产安全',
  '助记词等同于您的银行卡号+密码，获得助记词等同于获得HD钱包资产的所有权。',
  '请确保在四周无人、没有摄像头的安全环境下进行备份。',
  '请勿将助记词发送给任何人，包括任何自称是工作人员的人。',
  '如果您的手机丢失、损坏或者卸载APP后，您可以使用助记词恢复HD钱包。'
])
import { useRouter } from 'vue-router'

const router = useRouter()
const goBackUp = () => {
  router.push('/backup')
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
