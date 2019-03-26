<template>
  <!-- 登录组件 -->
  <div class="container" id="scrollTop">
    <div class="banner-header" :class="{active:isActive}">
      <div class="search-div">
        <searchInput :placeholders="placehold" class="direction-place" @seach="seach" style="width: 60px"></searchInput>
        <i class="el-icon-arrow-down down-arrow" ></i>
      </div>
      <div class="search-div">
        <i class="iconfont iconsousuo search-icon" ></i>
        <searchInput :placeholders="placeholders" class="serach-input"></searchInput>
      </div>
    </div>
    <el-carousel indicator-position="none" height="110px" interval="10000">
      <el-carousel-item v-for="item in bannerdata" :key="item">
        <img :src="item.logo" style="width: 100%;height: 120px" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  // import baseheader from '@/common/header_view/Headers'
  import searchInput from '@/common/search_input/Searchinput'
export default {
  name: 'index',
  components:{searchInput},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      placehold:'福州',
      placeholders:'找美食',
      input21:'',
      box:'',
      isActive:false,
      bannerdata:[
        {logo:require('../../assets/bannerImg/img1.jpg'),name:1111},
        {logo:require('../../assets/bannerImg/img2.jpg'),name:2222},
        {logo:require('../../assets/bannerImg/img5.jpg'),name:3},
      ]
    }
  },
  methods: {
    login () {
      let data={
        user_name:this.username,
        user_pwd:this.password
      }
      var options = {
        url: '/api/login',
        method: 'POST',
        data:data,
      }
      this.$httpReq(options).then((res) => {
        console.log('response',res)
      }).catch((err) => {
        console.error(err, '捕捉')
      })
    },
    go(tag){
      if(tag===1){
        this.$router.push({
          path: '/resign',
        })
      }else{
      }
    },
    handleScroll: function () {
      var t =document.documentElement.scrollTop||document.body.scrollTop;
      // 设备/屏幕高度
      // let scrollObj = document.getElementById('scrollTop'); // 滚动区域
      // let scrollTop = scrollObj.scrollTop; // div 到头部的距离
      // let scrollHeight = scrollObj.scrollHeight; // 滚动条的总高度
      console.log(t)
      if(t>60){
        console.log(7777)
        this.isActive=true
      }else{
        this.isActive=false
      }
      //滚动条到底部的条件
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true);
  },
  destroyed(){
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
<style scoped lang="less" rel="stylesheet/less">
  .container{
    position: relative;
    width: 100%;
    height: 800px;
    overflow-y: auto;
    background-color: grey;
  }
  .direction-place /deep/ .search-input{
    width:60px;
    padding-left: 4px;
    background-color: rgba(240,240,240,.6);
    border: none;
    /*color: white;*/
  }
  .serach-input{
    margin-left: 30px;
  }
  .serach-input /deep/.search-input{
    width:235px
  }
.banner-header{
  display: flex;
  position: fixed;
  /*top:10px;*/
  /*left:10px;*/
  height: 60px;
  /*background-color: aqua;*/
  /*right:10px;*/
  z-index: 3000;
  width: 100%;
}
.search-div{
    position: relative;
    top:10px;
    left:5px
  }
  .search-icon{
    position: absolute;
    left:35px;
    top:4px
  }
  .down-arrow{
    position: absolute;
    left:40px;
    top:8px
  }
  .active{
    background-color: #f7483e ;
  }
</style>
