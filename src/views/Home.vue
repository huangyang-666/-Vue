<template>
  <div>
    <!--<HelloWorld/>-->
      <div class="pg-header">
        <div class="w">
          <ul>
            <li class="l1"><i class="el-icon-picture-outline-round"></i>云相册</li>
            <li><router-link to="/Home1"><i class="el-icon-s-home"></i>回到首页</router-link></li>
            <li><router-link to="/Page0"><i class="el-icon-copy-document"></i>全部图片</router-link></li>
            <li><router-link :to="{name:'Page1'}">
              <i class="el-icon-upload"></i>图片上传 </router-link></li>
            <li><router-link to="/type">
              <i class="el-icon-picture"></i>相册类别</router-link></li>
            <li><router-link to="/recognition"><i class="el-icon-s-custom"></i>人体识别</router-link></li>
            <li><router-link to="/moment"><i class="el-icon-video-camera-solid"></i>精彩时刻</router-link></li>
          </ul>
          <ul class="il">
            <li><a href="#"><i class="el-icon-more"></i></a></li>
            <li><a href="#">
              <span>{{$store.getters.getUser.username}}</span>
            </a></li>
          </ul>
        </div>
      </div>

    <router-view/>

    <div class="footer">
      <div><br></div>
      <div>
        <nav class="left-nav">
          <div class="item">
            <div class="cp"><a href="#">回到首页</a></div>
          </div>
        </nav>
      </div>

      <div>
        <nav class="left-nav">
          <div class="item">
            <div class="jia"><a href="#">功能分类</a></div>
          </div>
          <div class="item">
            <a href="#">图片上传</a>
          </div>
          <div class="item">
            <a href="#">相册类别</a>
          </div>
          <div class="item">
            <a href="#">人体识别</a>
          </div><div class="item">
          <a href="#">精彩时刻</a>
        </div>

        </nav>
      </div>
      <div>
        <nav class="left-nav">
          <div class="item">
            <div class="cp"><a href="#">关于我们</a></div>
          </div>
          <div class="item">
            <a href="#">我们的产品</a>
          </div>
          <div class="item">
            <a href="#">我们的</a>
          </div>
          <div class="item">
            <a href="#">我们的</a>
          </div><div class="item">
          <a href="#">我们的</a>
        </div>

        </nav>
      </div>
      <div>
        <nav class="left-nav">
          <div class="item">
            <div class="jia"><a href="">联系我们</a></div>
          </div>
        </nav>
      </div>
      <div class="foot"><br></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Home.vue"
    }

</script>

<style scoped>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .pg-header{
    margin: 0;
    height: 65px;
    background-color: rgba(180, 219, 255, 0.24);
    line-height: 40px;
    width: 100%;
    border-bottom: 2px solid white;
  }
  .w{
    width: 1300px;
    margin: 0 auto;
    /* background-color: rgb(8, 64, 246); */
  }
  ul{
    margin: 0;
    list-style-type: none;
  }
  ul li{
    border-radius: 8%;
    height: 50px;
    line-height: 50px;
    float: left;
    margin: 7px 2px 0 2px;
    padding: 0 10px 0 10px;
    color: rgb(87, 171, 250);
    cursor: pointer;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .l1{
    font-size: 20px;
  }
  .il{
    float: right;
    padding: 0 10px 0 10px;
    color: floralwhite;
    cursor: pointer;
  }

  ul li:hover{
    background-color: rgb(198, 218, 241);
  }

  .pg-header .w ul li a{
    color:rgb(85, 86, 90);
    text-decoration: none;
  }
  .w ul li a:hover{
    color: rgb(0, 0, 0);
  }


  .center{
    text-align: center;
  }
  .footer{
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: rgb(180, 209, 229);
    border:1px solid #e8ffff;
  }
  .foot{
    clear: both;
    height: 0;
    overflow: hidden;
  }
  .cp{
    margin-left:0;
    padding-left: 2px;
    width: 70px;
    height: 40px;
    background-color: rgba(221, 219, 219, 0);
    border-bottom: 3px rgba(4, 198, 202, 0.75) solid;
  }
  .jia{
    margin-left:0;
    width: 70px;
    height: 40px;
    background-color: rgba(221, 219, 219, 0);
    border-bottom: 3px rgba(245, 255, 9, 0.75) solid;
  }

  /* 设置菜单外部容器 */
  .left-nav{
    width: 100px;
    height: 270px;
    padding-top: 5px;
    padding-left: 25px;
    padding-right: 25px;
    margin: 2px;
    background-color: rgb(180, 209, 229);
    float: left;
    clear: none;
  }
  /* 设置菜单内部item */
  .left-nav .item{
    height: 50px;
    /* 使文字在父元素中居中：父元素line-height设置与height一样 */
    line-height: 50px;
    padding-left: 18px;
  }
  /* 鼠标移入 */
  .item:hover{
    cursor: text;
  }
  a{
    font-size: 16px;
    color: rgba(255, 252, 255, 0.8);
    /* 去除下划线 */
    text-decoration: none;
  }
  a:hover{
    color: rgb(159, 9, 255);
    cursor: pointer;
  }
  a:active{
    color: rgba(251, 251, 251, 0.917);
  }

  ul li a{
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
    /* 去除下划线 */
    text-decoration: none;
  }
  ul li a:hover{
    color: rgb(255, 255, 255);
    cursor: pointer;
  }
  ul li a:active{
    color: rgba(255, 255, 255, 0.91);
  }
</style>
