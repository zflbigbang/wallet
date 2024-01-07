<template>
  <Header :title="title"></Header>
  <div class="content">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div class="text">
        <span>*密码用于保护您的私钥，建议设置足够强度的密码</span>
        <span>*钱包密码丢失将无法找回，请务必牢记您设置的密码</span>
      </div>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          确认创建
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import { ref } from 'vue'
import { showConfirmDialog } from 'vant'
import 'vant/es/dialog/style'
import { useRouter } from 'vue-router'

const router = useRouter()
const title = ref('创建 HD 钱包')
const username = ref('')
const password = ref('')
const onSubmit = (values) => {
  console.log('submit', values)

  showConfirmDialog({
    title: '创建成功',
    message: '您已成功创建 HD 钱包！请您立即前往备份助记词。'
  })
    .then(() => {
      // on confirm
      router.push('/security')
    })
    .catch(() => {
      // on cancel
    })
}
</script>

<style lang="scss" scoped>
.content {
  flex-direction: column;
  margin-top: 40px;
  align-items: center;
  text-align: center;

  .img {
    width: 340px;
    height: 206px;
  }
  .text {
    margin: auto;
    color: #ff6363;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 340px;
    height: 80px;
    font-size: 14px;
  }
}
</style>
