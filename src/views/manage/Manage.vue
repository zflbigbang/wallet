<template>
  <Header :title="title"></Header>
  <div class="factors">
    <div class="factor" @click="backup">备份助记词</div>
    <div class="factor">导出私钥</div>
  </div>
  <Passward :isShow="isShow" @close="close"></Passward>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Passward from '@/components/Passward.vue'
import { ref } from 'vue'

const title = ref('HD 钱包管理')
const isShow = ref(false)

const backup = () => {
  isShow.value = true
}
function close() {
  isShow.value = false
}
</script>

<style lang="scss" scoped>
.factors {
  display: flex;
  .factor {
    margin: auto;
    width: 115px;
    height: 92px;
    background-image: url('@/assets/manage.png');
    text-align: center;
  }
}
</style>
