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
  <div class="outer">
    <div class="register">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="手机号:" prop="phone">
          <el-input v-model.number="ruleForm.phone" />
        </el-form-item>
        <el-form-item label="验证码:" prop="code">
          <el-input
            v-model="ruleForm.pass"
            type="password"
            autocomplete="off"
          />
          <el-button @click="getCode">获取验证码</el-button>
        </el-form-item>
        <el-form-item label="密码:" prop="pass">
          <el-input
            v-model="ruleForm.pass"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="确认密码:" prop="checkPass">
          <el-input
            v-model="ruleForm.checkPass"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <div class="controls">
          <input name="m1" type="checkbox" :checked="agree" v-model="agree" />
          <span>同意协议并注册《用户协议》</span>
          <span class="error-msg" ref="check" style="display: none"
            >请勾选协议</span
          >
        </div>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >注册</el-button
          >
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
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

<script setup>
import { reactive, ref } from "vue";
import { FormInstance, FormRules } from "element-plus";

const ruleFormRef = ref();

const checkNum = (rule, value, callback) => {
  let number = /^1(3|4|5|6|7|8|9)\d{9}$/;
  if (value === "") {
    return callback(new Error("手机号不能为空"));
  } else if (!number.test(ruleForm.phone)) {
    callback(new Error("手机号格式不正确"));
  } else {
    callback();
  }
};
const checkCode = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入验证码"));
  } else {
    callback();
  }
};
const validatePass = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    if (ruleForm.checkPass !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("checkPass", () => null);
    }
    callback();
  }
};
const validatePass2 = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请再次输入密码"));
  } else if (value !== ruleForm.pass) {
    callback(new Error("两次输入密码不一致"));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  phone: "",
  code: "",
  pass: "",
  checkPass: "",
});

const agree = ref(false);
const rules = {
  phone: [{ validator: checkNum, trigger: "blur" }],
  code: [{ validator: checkCode, trigger: "blur" }],
  pass: [{ validator: validatePass, trigger: "blur" }],
  checkPass: [{ validator: validatePass2, trigger: "blur" }],
};

const submitForm = (formEl) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};
const getCode = () => {};
</script>
<style lang="scss" scoped>
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
.register {
  position: relative;
  width: 70%;
  height: 470px;
  margin: 10px auto;
  border: solid 1px #ccc;

  .el-form {
    position: absolute;
    width: 580px;
    height: 300px;
    left: 55%;
    top: 50%;
    transform: translate(-50%, -50%);

    .el-input {
      width: 300px;
      height: 38px;
    }

    .el-button {
      width: 135px;
      height: 40px;
      margin-left: 10px;
    }
    .controls {
      position: relative;
      margin-left: 120px;
      margin-bottom: 22px;
      font-size: 12px;

      .error-msg {
        position: absolute;
        top: 20px;
        left: 20px;
        color: red;
      }
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