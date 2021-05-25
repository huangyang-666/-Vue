<template>
  <!--//图片上传upload-->
    <div style="background-color:rgba(155,200,229,0.21);background-image: url('../../assets/001.jpg');">
      <div class="box1">
        <!-- 大盒子 -->
        <div class="box">
          <!-- 左侧按钮 -->
          <a href="javascript:;" class="left">&lt</a>
          <!-- 右侧按钮 -->
          <a href="javascript:;" class="right">&gt</a>
          <!-- 轮播图片 -->
          <ul class="imgs" >
            <li class="one">
              <a href="#"><img src="../../assets/001.jpg" alt=""></a>
            </li>
            <li class="two">
              <a href="#" ><img src="../../assets/002.jpg" alt=""></a>
            </li>
            <li class="three">
              <a href="#"><img src="../../assets/003.jpg" alt=""></a>
            </li>
            <li class="four">
              <a href="#"><img src=../../assets/004.jpg alt="" class="rose"></a>
            </li>
            <li class="five">
              <a href="#"><img src=../../assets/005.jpg alt=""></a>
            </li>
            <li class="six">
              <a href="#"><img src="../../assets/006.jpg" alt=""></a>
            </li>
          </ul>
          <!--//小圆圈-->
          <ul class="list">
          </ul>
          <!--//两个空盒子，实现左右两侧图片点击效果-->
          <div class="rights"></div>
          <div class="lefts"></div>
        </div>
      </div>


      <div class="center">
      <div class="bd">

        <el-row>
          <el-col :span="8" :offset="8">
            <div id="upload">
              <label class="el-form-item__label" style="width: 80px;">上传图片</label>
              <!--elementui的上传图片的upload组件-->
              <el-upload
                class="upload-demo"
                :before-upload="beforeupload"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                style="margin-left:80px;"
                prop="image">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <!--<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
              </el-upload><br>

              <!--elementui的form组件-->
              <!--<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">-->
                <!--<el-form-item label="图片名称" prop="name">-->
                  <!--<el-input v-model="ruleForm.name" style="width:20%"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="图片类别" prop="region">-->
                  <!--<el-select v-model="ruleForm.region" placeholder="请选择图片类别">-->
                    <!--<el-option label="人物" value="1"></el-option>-->
                    <!--<el-option label="动物" value="2"></el-option>-->
                    <!--<el-option label="风景" value="3"></el-option>-->
                    <!--<el-option label="交通" value="4"></el-option>-->
                    <!--<el-option label="工具" value="5"></el-option>-->
                    <!--<el-option label="建筑" value="6"></el-option>-->
                  <!--</el-select>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="原创" prop="delivery">-->
                  <!--<el-switch v-model="ruleForm.delivery"></el-switch>-->
                <!--</el-form-item>-->

                <!--<el-form-item label="图片描述" prop="desc">-->
                  <!--<el-input type="textarea" v-model="ruleForm.desc"></el-input>-->
                <!--</el-form-item>-->

                <!--<el-form-item>-->
                  <!--<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>-->
                  <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
                <!--</el-form-item>-->
              <!--</el-form>-->
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="图片名称" prop="name">
                  <el-input v-model="ruleForm.name" style="width:50%"></el-input>
                </el-form-item>
                <el-form-item label="图片类别" prop="type">
                  <el-select v-model="ruleForm.type" placeholder="请选择图片类别">
                    <el-option label="人物" value="1"></el-option>
                    <el-option label="动物" value="2"></el-option>
                    <el-option label="风景" value="3"></el-option>
                    <el-option label="交通" value="4"></el-option>
                    <el-option label="工具" value="5"></el-option>
                    <el-option label="建筑" value="6"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="原创" prop="delivery">
                  <el-switch v-model="ruleForm.delivery"></el-switch>
                </el-form-item>

                <el-form-item label="图片描述" prop="desc">
                  <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>

            </div>
          </el-col>

          <!--展示选中图片的区域-->
          <el-col :span="4" >
            <div style="width:100%;overflow: hidden;margin-left:150px;">
              <img :src="src" alt="" style="width:100%;"/>
            </div>
          </el-col>
        </el-row>

      </div></div>


  </div>
</template>

<script>
  import * as axios from "axios";
    export default {
      name: "Page1",
      data() {
        return {
          dialogImageUrl: '',
          dialogVisible: false,
          ruleForm: {
            name: '',
            delivery: false,
            type: [],
            desc: '',
            param: "",//表单要提交的参数
            // url: '/shopGroup/updateImage/' + this.editShopImg.id,
          },
          rules: {
            image: [
              {required: true, message: '请上传图片', trigger: 'blur'}
            ],
            name: [
              {required: true, message: '请输入图片名称', trigger: 'blur'},
              {min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur'}
            ],
            type: [
              {required: true, message: '请选择图片类别', trigger: 'change'}
            ],
            desc: [
              {required: true, message: '请填写图片描述', trigger: 'blur'}
            ]
          }
        };
      },
      mounted() {
        this.getDic();
      },
      methods: {
        beforeRemove(file, fileList) {
          //return this.$confirm(`确定移除 ${ file.name }？`);
        },
        //阻止upload的自己上传，进行再操作
        beforeupload(file) {
          console.log(file);
          //创建临时的路径来展示图片
          var windowURL = window.URL || window.webkitURL;

          this.src = windowURL.createObjectURL(file);
          //重新写一个表单上传的方法
          this.param = new FormData();
          this.param.append('file', file, file.name);
          return false;
        },
        //覆盖默认的上传行为
        httprequest() {

        },
        onSubmit() {//表单提交的事件
          var names = this.form.name;
          //下面append的东西就会到form表单数据的fields中；
          this.param.append('message', names);
          let config = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          };
          //然后通过下面的方式把内容通过axios来传到后台
          //下面的this.$reqs 是在主js中通过Vue.prototype.$reqs = axios 来把axios赋给它;
          this.$reqs.post("/upload", this.param, config).then(function (result) {
            console.log(result);
          })
        },

        test() {
          console.log(this.ruleForm)
        },
        // //获取表单对象
        // var form = new FormData();
        // //接受表单第一个上传的数据，file命名不能和form里面的名字重复，为传到.java页面的值
        // form.append("file",document.getElementById("file").files[0]);
        submitForm(formName) {
          const _this = this
          this.$refs[formName].validate((valid) => {
            if (valid) {
              axios.post('http://localhost:8185/toPhoto/upload', this.ruleForm).then(function (resp) {
                console.log(resp)
                if (resp.data === 'success') {
                  _this.$alert('信息已经添加成功！', 'OK', {
                    confirmButtonText: '确定',
                    callback: action => {
                      _this.$router.push('/Page0')
                    }
                  });
                }
              })
              console.log(this.ruleForm)
              _this.$refs['ruleForm'].resetFields();
            } else {
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }

      }
    }

    window.addEventListener('load',function(){
      //获取元素
      var leftb = document.querySelector('.left');
      var rightb = document.querySelector('.right');
      var box = document.querySelector('.box');
      var imgs = box.querySelector('.imgs');
      var imgt = imgs.querySelectorAll('li');
      //自动翻页函数
      var timeone = setInterval(function(){
        rightf();
      },3000);
      //左右按钮的出现
      box.addEventListener('mouseover',function(){
        leftb.style.display = 'block';
        rightb.style.display = 'block';
        //移入时清除定时器
        clearInterval(timeone);
        timeone = null;
      })

      //左右按钮的消失
      box.addEventListener('mouseout',function(){
        leftb.style.display = 'none';
        rightb.style.display = 'none';
        //恢复定时器
        clearInterval(timeone);
        timeone = setInterval(function(){
          rightf();
        },1000)
      })
      //动态生成小圆圈，小圈圈模块
      var list = box.querySelector('.list');
      for(var i = 0;i < imgs.children.length;i++){
        //创建li，加入ul中
        var li =document.createElement('li');
        list.appendChild(li);
        //给小圈圈添加类名
        li.setAttribute('index',i);
        //排他思想，实现点击小圆圈，变色
        li.addEventListener('click',colors);
        //经过小圆圈，切换图片
        li.addEventListener('mouseenter',jump);
      }
      //一开始第二个亮
      list.children[1].className = 'change';
      //变色函数
      function colors(){
        //把所有的小圆圈变白
        for(var i = 0 ; i < list.children.length ; i++){
          list.children[i].className = '';
        }
        //给图片对应的小圆圈上色
        var index = this.getAttribute('index');
        list.children[index].className = 'change';
      }
      //跳转函数
      function jump(){
        var index = this.getAttribute('index');
        var now = num.indexOf('two');
        //计算经过点与当前点的距离
        var dif = Math.max(index,now) - Math.min(index,now);
        // console.log(dis);
        if(index > now){
          while(dif--){
            rightf();
          }
        }else {
          while(dif--){
            leftf();
          }
        }
      }
      //小圆圈跟随着图片移动
      var j = 1;
      function colort (){
        for(var i = 0 ; i < list.children.length ; i++){
          list.children[i].className = '';
        }
        if(j >= 6){
          j = 0;
        }else if (j < 0 ){
          j = 5;
        }
        list.children[j].className = 'change';
      }
      //翻页模块
      var num = ['one','two','three','four','five','six'];
      //右翻页
      rightb.addEventListener('click',rightf);
      function rightf(){
        //把数组的最后一个添加到第一个
        num.unshift(num[5]);
        //删除最后一个
        num.pop();
        //重新给li添加类名
        for(var i = 0;i < num.length;i++){
          imgt[i].setAttribute('class',num[i]);
        }
        //通过这个全局变量来让小圆圈的颜色一起变化
        j++;
        colort();
      }
      //左翻页
      leftb.addEventListener('click',leftf)
      function leftf(){
        num.push(num[0]);
        num.shift();
        for(var i = 0;i < num.length;i++){
          imgt[i].setAttribute('class',num[i]);
        }
        j--;
        colort();
      }
      //点击图片实现翻页,这里我是通过在左右两边添加一个盒子来实现的
      var rights = document.querySelector('.rights');
      rights.addEventListener('click',function(){
        rightf();
      })
      var lefts = document.querySelector('.lefts');
      lefts.addEventListener('click',function(){
        leftf();
      })
    })

</script>

<style scoped>
  .box1{
    width: 100%;
    background-color: #b5d4e5;
    height:520px ;
  }
  /* 更改图片的大小 */
  img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
  }
  /* 确定盒子的大小 */
  .box {
    position: relative;
    width: 1000px;
    height: 400px;
    /* 居中 */
    top: -155px;
    left: 50%;
    transform: translate(-50%,50%);
  }
  .imgs {
    position: absolute;
    width: 900px;
    height: 284px;
    top: 0;
    left: 50%;
    transform: translate(-50%,0%);
  }
  /* 让图片都叠在一起 */
  .imgs li {
    position: absolute;
    width: 900px;
    transition: 0.5s;
  }
  /* 给左右按钮设计样式，和定位 */
  .box .left {
    position: absolute;
    font-size: 24px;
    color: white;
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    background-color: black;
    border-radius: 18px;
    /* 添加半透明 */
    opacity: .3;
    top: 50%;
    left: 0;
    z-index: 999;
  }
  .box .right {
    position: absolute;
    font-size: 24px;
    color: white;
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    background-color: black;
    border-radius: 18px;
    /* 添加半透明 */
    opacity: .3;
    top: 50%;
    right: 0;
    z-index: 999;
  }
  /* 给左右按钮添加鼠标移入样式 */
  .left:hover {
    /* 把透明度挑高一点，让按钮看起来更亮一些 */
    opacity: .5;
  }
  .right:hover {
    opacity: .5;
  }
  /* 把图片错开 */
  .imgs .one {
    transform: translateX(-150px) scale(0.9);
    z-index: 1;
  }
  /* 第二张图片在中间，层级最高 */
  .imgs .two {
    z-index: 2;
  }
  .imgs .three {
    transform: translateX(150px) scale(0.9);
    z-index: 1;
  }
  /* 刚开始不显示的图片就放在中间图片的下面 */
  .imgs .four {
    transform: scale(0.9);
  }
  .imgs .five {
    transform: scale(0.9);
  }
  .imgs .six {
    transform: scale(0.9);
  }
  /* 设计小圆圈 */
  /* 定位 */
  .list {
    position: absolute;
    bottom: -25px;
    left: 50%;
    margin-left: -81px ;
    z-index: 777;
  }
  /* 设计样式 */
  .list li {
    float: left;
    width: 15px;
    height: 15px;
    background-color: rgb(230, 230, 230);
    border-radius: 50%;
    margin: 0 6px;
    cursor: pointer;
  }
  /* 小圆圈改变后的样式 */
  .list .change {
    background-color: rgb(154, 202, 236);
  }
  /* 左右两边各一个盒子 */
  .rights{
    position: absolute;
    right: 0;
    bottom: 30px;
    height: 255.5px;
    width: 100px;
  }
  .lefts{
    position: absolute;
    left: 0;
    bottom: 14px;
    height: 255.5px;
    width: 100px;
  }

  .center{
    text-align: center;
  }
  .bd{
    text-align: left;
    margin-top: 100px;
    margin-bottom: 100px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
  }

</style>
