<template>
  <div>
    <input type="text" class="search-input" @click="dosomething"  :placeholder="placeholders" >
  </div>
</template>

<script>
    export default {
        name: "searchinput",
        data(){
          return{
            inputtitle:''
          }
        },
      props:{
          placeholders:{
            default:'请输入查询内容'
          }
      },
      methods:{
        dosomething(){
          this.$emit('seach')
        }
      },
    }
</script>

<style scoped>
.search-input{
  border-radius: 14px;
  height: 26px;
  line-height: 26px;
  border: 1px solid white;
  /*background: none;*/
  outline: none;
  padding-left: 24px;
  color: grey;
  /*border: 0;*/
}
</style>
