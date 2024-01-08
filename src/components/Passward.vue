<template>
  <div class="Passward">
    <van-popup :show="isShow" position="bottom" :style="{ height: '50%' }">
      <!-- 密码输入框 -->
      <van-password-input
        :value="value"
        info="请输入钱包密码"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
      />
      <!-- 数字键盘 -->
      <van-number-keyboard
        v-model="value"
        :show="showKeyboard"
        @blur="showKeyboard = false"
      />
    </van-popup>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const value = ref('')
const show = defineProps(['isShow'])
const showKeyboard = ref(false)
const emit = defineEmits(['close'])
watch(showKeyboard, () => {
  if (showKeyboard.value == false) {
    if (value.value === '123456') {
      emit('close', true)
    } else {
      emit('close', false)
    }
    value.value = ''
  }
})
</script>

<style lang="scss" scoped></style>
