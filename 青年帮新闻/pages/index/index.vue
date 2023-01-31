<template>
	<view class="container">
    <view class="nav">
      <scroll-view scroll-x class="scroll">
        <view class="item" v-for="item in 10">中国{{item}}</view>
      </scroll-view>
    </view>
	</view>
</template>

<script setup>
	
</script>

<style lang="less">
  .container {
    .nav {
      .scroll {
        font-size: 40rpx;
        display: flex;
        height: 100rpx;
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
  }
</style>
