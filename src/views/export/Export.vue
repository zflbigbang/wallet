<template>
  <Header :title="title"></Header>
  <div class="main">
    <div class="head">HD 钱包私钥已导出</div>

    <hr />
    <div class="detail">
      请妥善备份好您的私钥，用于恢复您的HD钱包HD钱包不会保存您的私钥
    </div>
    <div class="key">
      <span>
        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span
      >
    </div>
  </div>

  <div class="img">
    <img src="@/assets/backup.png" alt="" />
    <img src="@/assets/backup.png" alt="" />
    <img src="@/assets/backup.png" alt="" />
    <img src="@/assets/backup.png" alt="" />
  </div>

  <div class="button">
    <Button text="我已记住" @click="goBack"></Button>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Button from '@/components/Button.vue'
import { ref } from 'vue'

import { useRouter } from 'vue-router'
import { showDialog } from 'vant'
import 'vant/es/dialog/style'
const router = useRouter()
const title = ref('导出私钥')
const goBack = () => {
  showDialog({
    title: '导出成功',
    message: '您已成功导出私钥！请妥善保管您的HD钱包私钥。'
  }).then(() => {
    // on close
    router.push('/hd')
  })
}
</script>

<style lang="scss" scoped>
.img {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  img {
    margin-top: 10px;
    width: 160px;
    height: 80px;
  }
}
.main {
  width: 340px;
  height: 200px;
  background-color: #ffffff;

  margin: 30px auto 60px;
  text-align: center;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  .head {
    margin-top: 10px;
    font-weight: 600;
  }
  .detail {
    width: 300px;
    height: 45px;
  }
  .key {
    width: 300px;
    height: 60px;
    background-color: #eeeeee;
    word-wrap: break-word;
    padding: 10px;
  }
}

.button {
  margin-top: 40px;
  text-align: center;
}
</style>
