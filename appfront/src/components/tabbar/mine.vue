<template>
    <div style="height: 200px;width: 100%">
      <baseheader title="我的" :hasright="hasright" rightTitle="消息"></baseheader>
        <div class="items-mine" v-for="(item,i) in mineinfo" :key="i">
          <div class="items-inner">
            <img :src="item.logo" style="width: 24px;height: 24px;"/>
            <span>{{item.name}}</span>
            <img class="mine-left-arr" src="../../assets/mineImg/arrow.png" style="width: 16px;height: auto;"/>
          </div>
        </div>

      </div>
</template>

<script>
import baseheader from '@/common/header_view/Headers'
    export default {
        name: "mine",
      data(){
        return{
          mineinfo:[
            {logo:require('../../assets/mineImg/01.png'),name:'资金流水',path:'/'},
            {logo:require('../../assets/mineImg/02.png'),name:'银行卡',path:'/'},
            {logo:require('../../assets/mineImg/03.png'),name:'交易规则',path:'/'},
            {logo:require('../../assets/mineImg/04.png'),name:'我的红包',path:'/'},
            {logo:require('../../assets/mineImg/05.png'),name:'邀请好友',path:'/'},
          ],
          rightTitle:'消息',
          hasright:true,
        }
      },
        components:{baseheader}
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
.items-mine{
  position: relative;
  height: 40px;
  line-height: 40px;
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid rgb(225,225,225);
  /*background: grey;*/
  .items-inner{
    position: absolute;
    /*background-color: aqua;*/
    height: 24px;
    line-height: 24px;
    width: 100%;
    margin: auto;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    span{
      float:left;
      margin-left: 30px;
    }
    img:nth-child(1){
      float:left;
    }
    .mine-left-arr{
      float: right;
      margin-top: 4px;
    }
  }
}
</style>
