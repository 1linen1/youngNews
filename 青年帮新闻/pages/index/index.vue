<template>
	<view class="container">
    <view class="nav">
      <scroll-view scroll-x class="scroll">
        <view class="item" v-for="item in 10">中国{{item}}</view>
      </scroll-view>
    </view>
    <view class="content">
      <view class="item" v-for="item in 10">
        <NewsItem>
          <view class="author">帅哥·黄</view>
          <view class="viewdNum">299浏览</view>
          <view class="time">2023年01月31日</view>
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
    .nav {
      padding: 10rpx 0;
      .scroll {
        font-size: 40rpx;
        display: flex;
        height: 60rpx;
        line-height: 60rpx;
        white-space: nowrap;
        // 去除scroll-view带的滑动条（微信小程序中没有）
        /deep/ ::-webkit-scrollbar {
        	width: 4px !important;
        	height: 1px !important;
        	overflow: auto !important;
        	background: transparent !important;
        	-webkit-appearance: auto !important;
        	display: block;
        }
        .item {
          display: inline-block;
          padding: 0 30rpx;
        }
      }
    }
    .content {
      .item {
        padding: 20rpx;
        border-bottom: 1rpx dotted #efefef;
      }
    }
  }
</style>
