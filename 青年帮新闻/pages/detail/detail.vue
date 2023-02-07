<template>
  <view class="container">
    <view class="title">{{newsInfo.title}}</view>
    <view class="info">
      <view class="author">
        编辑：{{newsInfo.author}}
      </view>
      <view class="time">
        {{newsInfo.posttime}}
      </view>
    </view>
    <view class="content">
      {{newsInfo.content}}
    </view>
    <view class="bottom">
      声明：泵站内容都是黄启强产业，如果侵权去找安欣！泵站内容都是黄启强产业，如果侵权去找安欣！泵站内容都是黄启强产业，如果侵权去找安欣！泵站内容都是黄启强产业，如果侵权去找安欣！！！
    </view>
  </view>
</template>

<script setup>
  import { onLoad } from '@dcloudio/uni-app'
  import { ref } from "vue";
  
  let newsInfo = ref({})
  async function getNewDetail(options) {
    await uni.request({
      url: 'https://ku.qingnian8.com/dataApi/news/detail.php',
      data: {
        cid: options.cid,
        id: options.id
      },
      success(res) {
        console.log(res);
        newsInfo.value = res.data
        uni.hideLoading()
      }
    })
  }
  
  onLoad(options => {
    console.log(options)
    uni.showLoading({
      title: '正在加载中...',
      mask:true
    })
    getNewDetail(options)
  })
</script>

<style lang="less">
  .container {
    padding: 20rpx;
    .title {
      font-size: 40rpx;
    }
    .info {
      display: flex;
      justify-content: space-between;
      padding: 10rpx 20rpx;
      margin: 20rpx 0;
      background-color: #eee;
      font-size: 25rpx
    }
    .bottom {
      margin: 20rpx 0 10rpx 0;
      padding: 20rpx;
      background-color: #fdeff0;
      font-size: 26rpx;
      color: #fab8c2;
    }
  }
</style>
