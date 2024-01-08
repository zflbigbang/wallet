<template>
  <Header title="导入 HD 钱包"></Header>
  <div class="main">
    <van-tabs v-model:active="active">
      <van-tab title="助记词导入">
        <Set mark="输入助记词"></Set>
      </van-tab>
      <van-tab title="私钥导入">
        <Set mark="输入私钥"></Set>
      </van-tab>
    </van-tabs>
  </div>

  <div class="text">
    <span
      >*导入新钱包后现有 HD钱包 将被覆盖，请确保您已经备份了现有钱包数据</span
    >
  </div>
  <div class="button">
    <Button text="开始导入" @click="submitForm"></Button>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Button from '@/components/Button.vue'
import Set from './components/Set.vue'
import { ref } from 'vue'
import { showDialog } from 'vant'
import 'vant/es/dialog/style'
import { useRouter } from 'vue-router'
const router = useRouter()
const active = ref(0)
const formData = ref({
  username: '',
  password: '',
  confirmPassword: ''
})

const submitForm = () => {
  // 提交表单的逻辑
  console.log('Form submitted:', formData.value)
  showDialog({
    title: '导入成功',
    message: '您已成功导入 HD 钱包！'
  })
    .then(() => {
      // on confirm

      router.push('/hd')
    })
    .catch(() => {
      // on cancel
    })
}
</script>

<style>
.button {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.main {
  width: 340px;

  margin: 30px auto;
}
.text {
  margin: auto;
  color: #ff6363;
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 80px;
  font-size: 12px;
}
</style>
