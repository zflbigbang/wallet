<template>
  <Header :title="title"></Header>
  <div class="factors">
    <div class="factor" @click="backup">备份助记词</div>
    <div class="factor" @click="ex">导出私钥</div>
  </div>

  <Passward :isShow="isShow" @close="close"></Passward>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Passward from '@/components/Passward.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { showDialog } from 'vant'
import 'vant/es/dialog/style'
const router = useRouter()
const title = ref('HD 钱包管理')
const isShow = ref(false)
let back = false
const backup = () => {
  back = true
  isShow.value = true
}
const ex = () => {
  isShow.value = true
}
function close(flag) {
  if (flag && back) {
    router.push('/sw')
  } else if (flag) {
    router.push('/sk')
  } else {
    showDialog({
      title: '密码错误',
      message: '请重新输入'
    }).then(() => {
      // on close
    })
  }
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
