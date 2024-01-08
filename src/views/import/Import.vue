<template>
  <Header title="创建 HD 钱包"></Header>
  <div class="registration-page">
    <van-cell-group v-model="formData">
      <van-field
        v-model="formData.username"
        label="钱包名称"
        placeholder="请输入钱包名称"
        clearable
      ></van-field>

      <van-field
        v-model="formData.password"
        label="钱包密码"
        placeholder="请输入密码"
        type="password"
        clearable
      ></van-field>
      <van-field
        v-model="formData.confirmPassword"
        label="确认密码"
        placeholder="请确认密码"
        type="password"
        clearable
      ></van-field>
    </van-cell-group>
  </div>
  <div class="text">
    <span>*密码用于保护您的私钥，建议设置足够强度的密码</span>
    <span>*钱包密码丢失将无法找回，请务必牢记您设置的密码</span>
  </div>
  <div class="button">
    <Button text="确认创建" @click="submitForm"></Button>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Button from '@/components/Button.vue'
import { ref } from 'vue'
import { showConfirmDialog } from 'vant'
import 'vant/es/dialog/style'
import { useRouter } from 'vue-router'
const router = useRouter()

const formData = ref({
  username: '',
  password: '',
  confirmPassword: ''
})

const submitForm = () => {
  // 提交表单的逻辑
  console.log('Form submitted:', formData.value)
  showConfirmDialog({
    title: '创建成功',
    message: '您已成功创建 HD 钱包！请您立即前往备份助记词。'
  })
    .then(() => {
      // on confirm
      router.push('/sw')
    })
    .catch(() => {
      // on cancel
    })
}
</script>

<style>
.registration-page {
  margin-top: 20px;
  padding: 20px;
  margin-bottom: 50px;
}
.button {
  display: flex;
  justify-content: center;
  margin-top: 30px;
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
