<template>
  <div class="login-wrap">
    <el-form label-position="top" ref="form" :model="userForm" label-width="80px">
      <el-form-item label="用户名">
        <el-input
          v-model="userForm.username"></el-input>
        </el-form-item>
      <el-form-item label="密码">
        <el-input
          type="password"
          v-model="userForm.password"></el-input>
        </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="login">立即登陆</el-button>

      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import {saveUserInfo} from '@/assets/js/auth'

export default {
  data () {
    return {
      userForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      // 1. 采集表单数据
      // 2. 表单验证
      // 3. 发请求执行登陆操作
      // 4. 根据响应做交互
      const res = await this.$http.post('/login', this.userForm)
      const data = res.data
      if (data.meta.status === 200) {
      // 登陆成功将服务器签发给用户的token身份令牌记录到localstorage中
        saveUserInfo(data.data)
        this.$router.push({
          name: 'home'
        })
        this.$message({
          type: 'success',
          message: '登陆成功!'
        })
      }
    }
  }
}
</script>

<style>
 .login-wrap {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

  .login-wrap .login-from {
    background-color: #fff;
    width: 400px;
    padding: 30px;
    border-radius: 8px;
  }

  .login-wrap .login-from .login-btn {
    width: 100%;
  }
</style>
