<template>
  <Header title="转出"></Header>
  <First></First>
  <div class="main">
    <!-- 可以使用 CellGroup 作为容器 -->
    <van-cell-group inset>
      <van-field
        v-model="value"
        label="转出地址"
        placeholder="输入或长按粘贴地址"
        label-align="top"
      />
      <van-field
        v-model="value"
        label="转出数量"
        :placeholder="left"
        label-align="top"
      />
    </van-cell-group>
    <span>矿工费：0.01 ETH</span>
  </div>
  <div class="footer">*本地址仅用于接收 ETH ，请勿将其他资产转入本地址</div>
  <div class="button">
    <Button text="确定转出" @click="transfer"></Button>
  </div>
  <Passward :isShow="isShow" @close="close"></Passward>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Button from '@/components/Button.vue'
import Passward from '@/components/Passward.vue'
import First from './components/First.vue'
import { ref } from 'vue'
const isShow = ref(false)
const left = ref('输入转出数量' + '   当前余额：12.34567890 BTC ')
const transfer = () => {
  isShow.value = true
}
function close() {
  console.log('hhh')
  isShow.value = false
}
</script>

<style lang="scss" scoped>
.main {
  width: 350px;
  height: 250px;
  display: flex;
  margin: auto;
  flex-direction: column;
  background-color: #ffffff;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
}
.footer {
  width: 340px;
  margin: auto;
  height: 20px;
  margin-top: 20px;
  color: #ff6363;
  font-size: 12px;
}
.button {
  margin-top: 60px;
  text-align: center;
}
</style>
