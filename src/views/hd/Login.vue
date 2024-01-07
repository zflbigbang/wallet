<template>
  <div class="nologin">
    <div class="header">
      <span>HD钱包</span>
      <van-icon name="setting-o" size="30px" class="set" @click="manage" />
    </div>
    <div class="content">
      <div class="property">
        <div class="rate">
          <span>总资产估值</span>
          <span>412.53532866 USDT</span>
          <span>≈ 32352.14 CNY</span>
        </div>
        <br />
        <div class="factors">
          <div class="accept" @click="accept">
            <van-icon name="arrow-down" size="30" />
            <span>转入</span>
          </div>
          <div class="accept" @click="to">
            <van-icon name="arrow-up" size="30" />
            <span>转出</span>
          </div>
        </div>
      </div>
    </div>

    <div class="detail">
      <span>资产明细</span>
      <div class="coins">
        <div class="coin">
          <div class="logo">
            <img src="@/assets/eth.png" alt="" /> <span>ETH</span>
          </div>
          <div class="num">
            <span>412.53532866 USDT</span> <span>≈ 32352.14 CNY</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const manage = () => {
  router.push('/manage')
}
const accept = () => {
  router.push('/accept')
}
const to = () => {
  router.push('/to')
}
</script>

<style lang="scss" scoped>
.nologin {
  .header {
    width: 360px;
    height: 45px;
    font-size: 18px;
    font-weight: 600;
    margin: auto;
    line-height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    align-items: center;
    margin-bottom: 20px;
    .factors {
      display: flex;
      justify-content: space-around;
      .accept {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    .property {
      color: white;
      width: 340px;
      height: 206px;
      background-image: url('@/assets/in.png');
      .rate {
        height: 106px;
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        justify-content: space-around;
        span:nth-child(2) {
          font-weight: 600;
        }
      }
    }
  }
  .detail {
    margin: auto;
    width: 340px;
    height: 225px;

    background-color: #ffffff;
    .coins {
      .coin {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        height: 40px;
        .logo {
          display: flex;
          img {
            width: 40px;
            height: 40px;
          }

          line-height: 40px;
        }
        .num {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
}
</style>
