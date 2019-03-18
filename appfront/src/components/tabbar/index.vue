<template>
  <!-- 登录组件 -->
  <div class="account-container">
    <baseheader :hasBack='hasback' title="首页"></baseheader>
    <form class="account-container-form" v-on:submit.prevent="login">
      <p>
        <span class="phone-ico"></span>
        <input type="text" placeholder="请输入手机号" maxlength="11" class="phone" v-model="username" />
      </p>
      <p>
        <span class="pwd-ico"></span>
        <input type="password" placeholder="请输入密码" class="pwd" v-model="password" />
      </p>
      <p>
        <input type="submit" value="登	录" class="account-btn" />
      </p>
      <div>
        <el-row>
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
        </el-row>

        <el-row>
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-service"
            v-model="input21">
          </el-input>
        </el-row>

        <span @click="go(0)">注册用户</span>
        <span @click="go(1)">忘记密码？</span>
      </div>
    </form>
  </div>
</template>

<script>
  import baseheader from '@/common/header_view/Headers'
export default {
  name: 'index',
  components:{baseheader},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username:'',
      password:'',
      input21:'',
      hasback:false,
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
  }
}
</script>
<style scoped lang="less" rel="stylesheet/less">
  /*
   * Description: 登录、注册页、找回密码等表单页面样式
   * User: zhaoyiming
   * Date: 2017/9/4
  */

  .account-container {
    width: 84%;
    padding: 20px 8% 0 8%;
  }

  .account-container-form p {
    position: relative;
    margin-bottom: 15px;
  }

  .phone,
  .code,
  .pwd,
  .account {
    height: 45px;
    border-radius: 3px;
    font-size: 14px;
    color: #4d4d4d;
  }

  .phone-ico,
  .code-ico,
  .phone-ico,
  .pwd-ico {
    display: block;
    position: absolute;
    height: 100%;
    background-size: 30px 30px;
  }

  .phone-ico {
    /*background-image: url("./images/phone.png");*/
    background-repeat: no-repeat;
    background-position: 0 7px;
  }

  .code-ico {
    background-image: url("../../static/images/verify.png");
    background-repeat: no-repeat;
    background-position: 0 7px;
  }

  .phone-ico {
    background-image: url("../../static/images/account.png");
    background-repeat: no-repeat;
    background-position: 0 7px;
  }

  .pwd-ico {
    background-image: url("../../static/images/password.png");
    background-repeat: no-repeat;
    background-position: 0 7px;
  }

  .account-btn {
    display: block;
    width: 100%;
    height: 45px;
    margin: 0 0 20px 0;
    text-align: center;
    line-height: 45px;
    border-radius: 25px;
    background-color: #2577e3;
    color: #fff;
    font-size: 15px;
  }

  .unable {
    display: block;
    text-align: right;
    color: #2577e3;
    font-size: 12px;
  }

  .phone-prompt {
    display: block;
    text-align: right;
    color: #afafaf;
    font-size: 12px;
  }

  @media only screen and (max-width: 319px) {
    .phone-ico,
    .code-ico,
    .pwd-ico,
    .phone-ico {
      width: 11%;
    }

    .phone,
    .code,
    .pwd,
    .account {
      width: 89%;
      padding-left: 11%;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 374px) {
    .phone-ico,
    .code-ico,
    .pwd-ico,
    .phone-ico {
      width: 11%;
    }

    .phone,
    .code,
    .pwd,
    .account {
      width: 89%;
      padding-left: 11%;
    }
  }

  @media only screen and (min-width: 375px) and (max-width: 413px) {
    .phone-ico,
    .code-ico,
    .pwd-ico,
    .phone-ico {
      width: 10%;
    }

    .phone,
    .code,
    .pwd,
    .account {
      width: 90%;
      padding-left: 10%;
    }
  }

  @media only screen and (min-width: 414px) and (max-width: 480px) {
    .phone-ico,
    .code-ico,
    .pwd-ico,
    .phone-ico {
      width: 9%;
    }

    .phone,
    .code,
    .pwd,
    .account {
      width: 91%;
      padding-left: 9%;
    }
  }

  @media only screen and (min-width: 480px) and (max-width: 767px) {
    .phone-ico,
    .code-ico,
    .pwd-ico,
    .phone-ico {
      width: 7%;
    }

    .phone,
    .code,
    .pwd,
    .account {
      width: 93%;
      padding-left: 7%;
    }
  }

  @media only screen and (min-width: 768px) {
    .phone-ico,
    .code-ico,
    .pwd-ico,
    .phone-ico {
      width: 6%;
    }

    .phone,
    .code,
    .pwd,
    .account {
      width: 94%;
      padding-left: 6%;
    }
  }
</style>
