<template>
	<view class="container">
    <view class="nav">
      <scroll-view scroll-x class="scroll">
        <view
          class="item"
          :class="navIndex == index ? 'active' : ''" 
          v-for="(item, index) in navList"
          :key="item.id"
          @click="changeIndex(index, item.id)"
          >
          {{item.classname}}
        </view>
      </scroll-view>
    </view>
    <view class="content">
      <view class="item" v-for="item in newsList" :key="item.id">
        <NewsItem @click="toDetail(item.id, item.classid)" :item="item">
          <view class="author">{{item.author}}</view>
          <view class="viewdNum">{{item.hits}}浏览量</view>
          <view class="time">{{item.posttime}}</view>
        </NewsItem>
      </view>
    </view>
	</view>
</template>

<script setup>
	import { ref } from "vue";
  import NewsItem from '../../components/NewsItem/NewsItem.vue'
  import { onLoad } from '@dcloudio/uni-app'
  let navList = ref([])
  let newsList = ref([])
  let navIndex = ref(0)
  
  function changeIndex(index, id = 50) {
    console.log(index);
    navIndex.value = index
    getNewsList(id)
  }
  function toDetail(id, cid) {
    uni.navigateTo({
      url: `/pages/detail/detail?id=${id}&cid=${cid}`
    })
  }
  
  function getNavList() {
    uni.request({
      url: 'https://ku.qingnian8.com/dataApi/news/navlist.php',
      success(res) {
        console.log(res);
        navList.value = res.data
      }
    })
  }
  
  function getNewsList(id) {
    uni.request({
      url: 'https://ku.qingnian8.com/dataApi/news/newslist.php',
      data: {
        cid: id,
        num: 5
      },
      success(res) {
        newsList.value = res.data
        console.log(res);
      }
    })
  }
  
  onLoad(() => {
    getNavList()
    getNewsList(50)
  }) 
  
</script>

<style lang="less">
  
    
  .container {
    .nav {
      position: fixed;
      // 在uniapp中，top:0 会在最上面
      // http://zh.uniapp.dcloud.io/tutorial/syntax-css.html#css-%E5%8F%98%E9%87%8F
      top: var(--window-top);
      left: 0;
      // position:fixed的情况下必须设置width:100%
      width: 100%;
      padding: 10rpx 0;
      background-color: #fff;
      z-index: 10;
      .scroll {
        display: flex;
        height: 60rpx;
        line-height: 60rpx;
        white-space: nowrap;
        font-size: 40rpx;
        // 去除scroll-view带的滑动条（微信小程序中没有）
        /deep/ ::-webkit-scrollbar {
        	width: 0 !important;
        	height: 0 !important;
        	overflow: auto !important;
        	background: transparent !important;
        	-webkit-appearance: auto !important;
        	display: block;
        }
        .item {
          display: inline-block;
          padding: 0 30rpx;
          &.active {
            color: #3dc684;
          }
        }
      }
    }
    .content {
      padding-top: 80rpx;
      .item {
        padding: 20rpx;
        border-bottom: 1rpx dotted #efefef;
      }
    }
  }
</style>
