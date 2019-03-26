<template>
<div>
  <div class="tabbar-class">
    <el-row >
    <el-col :span="6" v-for="(item,i) in tabInfo" @click.native="go(item.path,i)" :key="i">
      <img :src="i==tableindex?item.imgselectsrc:item.imgsrc" alt="" style="height: 20px;width: auto;margin-top: 5px">
      <div class="grid-content bg-purple">{{item.name}}</div></el-col>
  </el-row>
  </div>
</div>
</template>
<script>
  import img1 from '@/assets/tabBarImage/index.png'
  import img2 from '@/assets/tabBarImage/quotes.png'
  import img3 from '@/assets/tabBarImage/assets.png'
  import img4 from '@/assets/tabBarImage/mine.png'
  import img1s from '@/assets/tabBarImage/index_selected.png'
  import img2s from '@/assets/tabBarImage/quotes_seleted.png'
  import img3s from '@/assets/tabBarImage/assets_selected.png'
  import img4s from '@/assets/tabBarImage/mine_selected.png'
    export default {
        name: "tabbar",
      data() {
        return {
          active: this.tabIndex,
          tabInfo:[
            // {name:'首页',imgsrc:img1,imgselectsrc:img1s,path:'/'},
            // {name:'美食',imgsrc:img2,imgselectsrc:img2s,path:'/qoutes'},
            // {name:'餐厅',imgsrc:img3,imgselectsrc:img3s,path:'/assets'},
            // {name:'我的',imgsrc:img4,imgselectsrc:img4s,path:'/mine'},
            {name:'首页',imgsrc:img1,imgselectsrc:img1s,path:'/'},
            {name:'test1',imgsrc:img2,imgselectsrc:img2s,path:'/qoutes'},
            {name:'test2',imgsrc:img3,imgselectsrc:img3s,path:'/assets'},
            {name:'test3',imgsrc:img4,imgselectsrc:img4s,path:'/mine'},
          ],
          tableindex:0,
        }
      },
      methods:{
        go(path,i){
          this.tableindex=i
          this.$router.push({
            path:path
          })
        },
      },
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .tabbar-class{
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #f5f5f5;
    left: 0;
    height: 50px;
    text-align: center;
  }
</style>
