<template>
<div>
  <baseheader title="我的"  ></baseheader>
  <el-row><el-button type="primary" @click="loginout" style="width:100%">退出登录</el-button>
  </el-row>
</div>
</template>

<script>
  import baseheader from '@/common/header_view/Headers'
  export default {
    data(){
      return{
       hasBack:true
      }
    },
    components:{baseheader},
    methods: {
      loginout() {
        this.$confirm('确认退出登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info',
          center:true,
        }).then(() => {
          console.log('sure')
          this.$router.push({
            path:'/login'
          })
        }).catch(() => {
          console.log('cancel')
        });

      },
      goBack(){

      }
    }
  }
</script>

<style scoped>

</style>
