<template>
<div>
  <div class="base-header">
    <i v-if="hasBack" class="el-icon-arrow-left" style="float: left;margin-top: 5px"></i>
    <span>{{title}}</span>
    <span v-if="hasright">{{rightTitle}}</span>
  </div>
</div>
</template>

<script>
    export default {
        name: "Headers",
      props:{
          title:{
            default:''
          },
        hasBack:{
            default:false
        },
        hasright:{
            default:false
        },
        rightTitle:{
            default:''
        },
      }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
.base-header{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background-color: #f5f5f5;
  text-align: center;
  span:nth-child(1){
    text-align: center;
  }
  span:nth-child(2){
    position: absolute;
    right: 6px;
  }
}
</style>
