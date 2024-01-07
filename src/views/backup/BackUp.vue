<template>
  <Header :title="title"></Header>
  <div class="main">
    <div class="head">HD 钱包助记词已生成</div>

    <hr />
    <div class="detail">
      请妥善备份好您的助记词，用于恢复您的HD钱包HD钱包不会为您保存助记词
    </div>
    <div class="words">
      <div v-for="word in words" class="word">
        {{ word }}
      </div>
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
import { ref, reactive } from 'vue'

import { useRouter } from 'vue-router'
import { showDialog } from 'vant'
import 'vant/es/dialog/style'
const router = useRouter()
const title = ref('备份助记词')
const goBack = () => {
  showDialog({
    title: '备份成功',
    message: '您已成功备份助记词！请妥善保管您的HD钱包助记词。'
  }).then(() => {
    // on close
    router.push('/hd')
  })
}
const words = reactive([
  'guide',
  'behave',
  'antique',
  'under',
  'coment',
  'sorry',
  'elemet',
  'assent',
  'inhale',
  'jeans',
  'float',
  'garden'
])
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
  height: 300px;
  background-color: #f0f0f0;
  margin: auto;
  margin-top: 30px;
  text-align: center;
  overflow: hidden;
  padding: 0 10px;
  .head {
    margin-top: 10px;
    font-weight: 600;
  }

  .words {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    .word {
      margin-left: 10px;
      margin-top: 20px;
      line-height: 30px;
      width: 80px;
      height: 30px;

      background-color: pink;
    }
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
