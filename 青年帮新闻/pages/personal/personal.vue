<template>
  <view class="container">
    <view class="top">
      <image src="../../static/images/history.png" mode=""></image>
      <text class="history">浏览历史</text>
    </view>
    <view class="bottom">
      <view class="item" v-for="item in 10">
        <NewsItem>
          <view class="box">
            <view class="time">浏览时间：2023年01月31日</view>
          </view>
        </NewsItem>
      </view>
    </view>
  </view>
</template>

<script setup>
  import NewsItem from '../../components/NewsItem/NewsItem.vue'
</script>

<style lang="less">
  .container {
    .top {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 20rpx;
      border-bottom: 1rpx dotted #efefef;
      image {
        width: 300rpx;
        height: 300rpx;
      }
      .history {
        font-size: 38rpx
      }
    }
    .bottom {
      .item {
        padding: 20rpx;
        border-bottom: 1rpx dotted #efefef;
        .box {
          flex: 0.95;
          text-align: right;
        }
      }
    }
  }
</style>
