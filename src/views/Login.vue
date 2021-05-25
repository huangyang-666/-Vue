<template>
  <div>
    <!--<video src="../assets/bj.mp4">ert</video>-->
    <el-form ref="form" :model="form" :rules="rules" label-width="80px;" class="login-box">
      <div class="login-title">欢迎登录</div>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item class="login-button">
        <el-button type="primary" plain @click="submitForm('form')">登录</el-button>
      </el-form-item>
    </el-form>

    <div class="homepage-hero-module">
      <div class="video-container">
        <div :style="fixStyle" class="filter"></div>
        <video :style="fixStyle" autoplay loop class="fillWidth" v-on:canplay="canplay">
          <source src="../assets/bj1.mp4" type="video/mp4"/>
          浏览器不支持 video 标签，建议升级浏览器。
          <!--<source src="../assets/bj1.webm" type="video/webm"/>-->
          <!--浏览器不支持 video 标签，建议升级浏览器。-->

        </video>
        <!--<div class="poster hidden" v-if="!vedioCanPlay">-->
          <!--<img :style="fixStyle" src="PATH_TO_JPEG" alt="">-->
        <!--</div>-->
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Login",
    data: function () {
      return{
        vedioCanPlay: false,
        fixStyle: '',
        form:{
          username:'',
          password:''
        },
        rules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          ],
        }
      }
    },
    methods:{
      canplay() {
        this.vedioCanPlay = true
      },
      submitForm: function (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //是否登录
            sessionStorage.setItem('isLogin','true');
            this.$store.dispatch('asyncUpdateUser',{username:this.form.username});
            // alert('submit!');1
            this.$message({
              message: '恭喜你，验证通过！',
              type: 'success'
            });
            //编程式导航，以代码方式跳转
            // this.$router.push("/main");
            this.$router.push({name:'Home1',params:{username:this.form.username}});
          } else {
            this.$message({
              message: '账号或密码错误！',
              type: 'warning'
            });
            return false;
          }
        });
      }
    },
    mounted: function() {
      window.onresize = () => {
        const windowWidth = document.body.clientWidth
        const windowHeight = document.body.clientHeight
        const windowAspectRatio = windowHeight / windowWidth
        let videoWidth
        let videoHeight
        if (windowAspectRatio < 0.5625) {
          videoWidth = windowWidth
          videoHeight = videoWidth * 0.5625
          this.fixStyle = {
            height: windowWidth * 0.5625 + 'px',
            width: windowWidth + 'px',
            'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
            'margin-left': 'initial'
          }
        } else {
          videoHeight = windowHeight
          videoWidth = videoHeight / 0.5625
          this.fixStyle = {
            height: windowHeight + 'px',
            width: windowHeight / 0.5625 + 'px',
            'margin-left': (windowWidth - videoWidth) / 2 + 'px',
            'margin-bottom': 'initial'
          }
        }
      }
      window.onresize()
    }
  }

</script>

<style scoped>
  .login-box{
    position: relative;
    width: 350px;
    margin: 120px auto;
    border: 1px solid #DCDFE6;
    padding: 35px;
    border-radius: 5px;
    box-shadow: 0 0 25px #DCDFE6;
  }
  .login-title{
    text-align: center;
  }
  .login-button{
    margin:50px 135px 20px;
  }
  video{
    width: 100%;
  }

  .homepage-hero-module,
  .video-container {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .video-container .poster img,
  .video-container video {
    z-index: 0;
    position: absolute;
  }

  .video-container .filter {
    z-index: 1;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
  }
</style>
