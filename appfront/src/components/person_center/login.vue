<template>
<div>
  <el-row>
    <el-input placeholder="用户名" v-model="username" clearable></el-input>
    <el-input placeholder="密码"  v-model="pwd" show-password></el-input>
  </el-row>
</div>
</template>

<script>
    export default {
        name: "login",
      data(){
          return{
            username:'',
            pwd:''
          }
      }
    }
</script>

<style scoped>

</style>
