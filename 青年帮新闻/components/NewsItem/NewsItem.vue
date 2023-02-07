<template>
  <view class="newsItem">
    <view class="left">
      <!-- aspectFill：让图片短边能完全显示出来 -->
      <image :src="item.picurl" mode="aspectFill"></image>
    </view>
    <view class="right">
      <view class="title">
        {{item.title}}
      </view>
      <view class="other">
        <slot></slot>
      </view>
    </view>
  </view>
</template>
  
<script setup>
  const {item} = defineProps(['item'])
</script>

<style lang="less">
  .newsItem {
    display: flex;
    .left {
      image {
        width: 230rpx;
        height: 160rpx;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-top: -15rpx;
      padding-bottom: 12rpx;
      margin-left: 15rpx;
      flex: 1;
      .title {
        font-weight: 400;
        font-size: 40rpx;
        color: #333;
        overflow: hidden;
        /*将对象作为弹性伸缩盒子模型显示*/
        display: -webkit-box;
        /*设置子元素排列方式*/
        -webkit-box-orient: vertical;
        /*设置显示的行数，多出的部分会显示为...*/
        -webkit-line-clamp: 2;	
      }
      .other {
        display: flex;
        justify-content: space-between;
        margin-bottom: -8rpx;
        font-weight: 400;
        font-size: 20rpx;
        color: #ccc;
      }
    }
  }
</style>