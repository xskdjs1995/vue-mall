<template>
  <div class="login">
    <div class="login-header">帐号登录</div>
    <div class="login-context">
      <div class="wrap">
        <el-input
          v-model="input"
          placeholder="手机号/邮件地址/帐号名"
        ></el-input>
        <el-input
          placeholder="请输入密码"
          v-model="password"
          show-password
        ></el-input>
        <div class="a-link">
          <a href="https://github.com/xskdjs1995">验证码</a>
        </div>

        <div class="login-button">
          <el-button type="danger" @click="login(input, password,userInfo)"
            >登录</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: "",
      password: "",
      userInfo: {
        userName: "威酱",
        photoUrl:
          "http://5b0988e595225.cdn.sohucs.com/images/20190324/26b14ff8956b4661a456a7e6751ce085.jpeg",
        token: "",
      },
    };
  },
  methods: {
    //   验证密码 将token等数据放在sessionStorage
    login(input, password,userInfo) {
      console.log(password);
      console.log(input);
      alert("登录了");
    //   将数据放在 store 或者 session 后在路由中取出来放在meta
      this.$router.push({
        path: "/home",
        query: userInfo,
      });
    },
  },
};
</script>

<style lang="css" >
/* .login{

  } */
.login-header {
  padding: 80px 0 64px;
  font-size: 25.6px;
}
.login-context {
  display: flex;
  justify-content: center;
}
.wrap {
  width: 290px;
  display: flex;
  flex-direction: column;
}
.el-input {
  margin-bottom: 20px;
}
.wrap .el-input__inner {
  background-color: #f2f2f2;
}
.wrap div .el-button {
  width: 290px;
}
.a-link {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 12px;
  font-size: 12px;
  padding-left: 2px;
}
.login-button {
  margin-top: 15px;
}
</style>