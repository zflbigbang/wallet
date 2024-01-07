<template>
  <div class="first">
    <div class="left">
      <img src="@/assets/ethsmall.png" alt="" />
      <span>ETH</span>
    </div>
    <van-icon name="arrow" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.first {
  width: 340px;
  height: 50px;
  margin: 50px auto 20px;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  align-items: center;
  padding: 0 10px;
  .left {
    display: flex;
    img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
    line-height: 30px;
  }
}
</style>
