
<script setup>
import { ref } from "vue";

// 1. 准备表单对象
const form = ref({
  account: "",
  password: "",
  agree: false,
});
// 2. 准备规则对象
const rules = {
  account: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
  password: [
    { required: true, message: "密码不能为空", trigger: "blur" },
    { min: 6, max: 14, message: "密码长度为6-14个字符", trigger: "blur" },
  ],
  agree: [
    {
      validator: (rule, value, callback) => {
        // 自定义校验逻辑
        // 勾选就通过 不勾选就不通过
        if (value) {
          callback();
        } else {
          callback(new Error("请勾选协议"));
        }
      },
    },
  ],
};
// 3. 获取form实例做统一校验
const formRef = ref(null);
const doLogin = () => {};
</script>
<template>
  <header class="header">
    <div class="contanier">
      <div class="logo"></div>
      <div class="main"></div>
      <div class="login_reg">
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
        <router-link to="/home"
          >首页
          <span
            ><i class="iconfont icon-angle-right"></i>
            <i class="iconfont icon-angle-right"></i></span
        ></router-link>
      </div>
    </div>
  </header>
  <div class="login-section">
    <div class="wrapper">
      <nav>账户登录</nav>
      <div class="account-box">
        <div class="form">
          <el-form
            ref="formRef"
            :model="form"
            :rules="rules"
            label-position="right"
            label-width="60px"
            status-icon
          >
            <el-form-item prop="account" label="账户">
              <el-input v-model="form.account" />
            </el-form-item>
            <el-form-item prop="password" label="密码">
              <el-input v-model="form.password" />
            </el-form-item>
            <el-form-item prop="agree" label-width="20px">
              <el-checkbox size="large" v-model="form.agree">
                我已同意隐私条款和服务条款
              </el-checkbox>
            </el-form-item>
            <el-button size="large" class="subBtn" @click="doLogin"
              >点击登录</el-button
            >
          </el-form>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer">
    <div class="container">
      <p>
        <a href="javascript:;">关于我们</a>
        <a href="javascript:;">售后服务</a>
        <a href="javascript:;">帮助中心</a>
        <a href="javascript:;">商务合作</a>
        <a href="javascript:;">相关攻略</a>
        <a href="javascript:;">搜素推荐</a>
        <a href="javascript:;">友情链接</a>
        <a href="javascript:;">联系我们</a>
        <a href="javascript:;">找我投资</a>
      </p>
      <p>乡水流情</p>
    </div>
  </footer>
</template>

<style scoped lang='scss'>
.header {
  height: 120px;
  background-color: #fff;

  .contanier {
    display: flex;
    width: 1200px;
    height: 120px;
    margin: 0 auto;
  }
  .logo {
    flex: 1;
    background: url(@/assets/logo.png) no-repeat;
    background-size: 60% 100%;
  }
  .main {
    flex: 3;
  }
  .login_reg {
    flex: 1;
    text-align: center;
    line-height: 120px;
    font-size: 20px;

    a {
      padding: 0 10px;
      border-left: 1px solid #ccc;

      &:first-child {
        border: 0;
      }
      span {
        display: inline-block;
        width: 30px;
        height: 30px;
        color: blue;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
}
.login-section {
  position: relative;
  height: 500px;
  background: url("./images/login-bg.jpg");

  .wrapper {
    position: absolute;
    width: 380px;
    background: #fff;
    right: 18%;
    top: 90px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  }

  nav {
    font-size: 20px;
    height: 55px;
    line-height: 55px;
    text-align: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #f5f5f5;
    padding: 0 40px;
  }

  .account-box {
    .form {
      padding: 0 20px 20px 20px;
    }
    .subBtn {
      background: rgb(0, 170, 255);
      margin-left: 4px;
      width: 100%;
      color: #fff;
    }
  }
}

.footer {
  padding: 20px 0 30px;
  background-color: #fff;

  p {
    text-align: center;
    color: #999;
    margin-top: 15px;
    font-size: 12px;

    a {
      display: inline-block;
      font-size: 12px;
      padding: 0 15px;
      color: #999;
      line-height: 1;
      border-right: 1px solid #ccc;

      &:nth-last-child(1) {
        border: 0;
      }
    }
  }
}
</style>