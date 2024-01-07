<template>
  <Header :title="title"></Header>
  <First></First>
  <div class="main">
    <span>扫二维码，转入 ETH</span>
    <img src="@/assets/QR.png" alt="" />
    <span>我的地址</span>
    <span>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
    <van-button type="primary">复制地址</van-button>
  </div>
  <div class="footer">*本地址仅用于接收 ETH ，请勿将其他资产转入本地址</div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import First from './components/First.vue'
import { ref } from 'vue'
const title = ref('转入')
</script>

<style lang="scss" scoped>
.main {
  width: 340px;
  height: 340px;
  display: flex;
  margin: auto;
  flex-direction: column;
  background-color: #ffffff;
  justify-content: space-around;
  align-items: center;
  img {
    width: 120px;
    height: 120px;
  }
}
.footer {
  width: 340px;
  margin: auto;
  height: 20px;
  margin-top: 20px;
  color: #ff6363;
  font-size: 12px;
}
</style>
