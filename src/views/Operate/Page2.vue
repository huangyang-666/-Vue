<template>
  <!--//相册类别-->
  <!--path: '/type',-->
    <div style="background-color:rgba(177,226,255,0.15);">
    <div class="center">
      <div class="ll">
        <div class="photo-wrapper">
          <h2 class="photo-title">
            <a href="#">人物</a>
          </h2>
          <div class="photo-img">
            <a href="#">
              <img src="../../assets/image/ren.png" alt="人物"></a>
          </div>
          <ul class="photo-list">
            <li>
              <a href="#">aaaaaaaaaa</a>
            </li><li>
            <a href="#">aaaaaaaaaa</a>
          </li>
          </ul>
        </div></div>
        <div class="ll">
        <div class="photo-wrapper">
          <h2 class="photo-title">
            <a href="#">动物</a>
          </h2>
          <div class="photo-img">
            <a href="#">
              <img src="../../assets/image/dong.png" alt="动物"></a></div>
          <ul class="photo-list">
            <li>
              <a href="#">aaaaaaaaaa</a>
            </li><li>
            <a href="#">aaaaaaaaaa</a>
          </li>
          </ul>
        </div></div>

      <div class="ll">
        <div class="photo-wrapper">
          <h2 class="photo-title">
            <a href="#">风景</a></h2>
          <div class="photo-img">
            <a href="#">
              <img src="../../assets/image/feng.png" alt="风景"></a></div>
          <ul class="photo-list">
            <li><a href="#">aaaaaaaaaa</a></li>
            <li><a href="#">aaaaaaaaaa</a></li></ul>
        </div></div>

      <div class="ll">
        <div class="photo-wrapper">
          <h2 class="photo-title">
            <a href="#">交通</a></h2>
          <div class="photo-img">
            <a href="#">
              <img src="../../assets/image/jiaotong.png" alt="交通"></a></div>
          <ul class="photo-list">
            <li><a href="#">aaaaaaaaaa</a></li>
            <li><a href="#">aaaaaaaaaa</a></li></ul>
        </div></div>

      <div class="ll">
        <div class="photo-wrapper">
          <h2 class="photo-title">
            <a href="#">工具</a></h2>
          <div class="photo-img">
            <a href="#">
              <img src="../../assets/image/gongju.png" alt="工具"></a></div>
          <ul class="photo-list">
            <li><a href="#">aaaaaaaaaa</a></li>
            <li><a href="#">aaaaaaaaaa</a></li></ul>
        </div></div>

      <div class="ll">
        <div class="photo-wrapper">
          <h2 class="photo-title">
            <a href="#">建筑</a></h2>
          <div class="photo-img">
            <a href="#">
              <img src="../../assets/image/jianzhu.png" alt="建筑"></a></div>
          <ul class="photo-list">
            <li><a href="#">aaaaaaaaaa</a></li>
            <li><a href="#">aaaaaaaaaa</a></li></ul>
        </div></div>
      <div class="ll">
        <div class="photo-wrapper">
          <h2 class="photo-title">
            <a href="#">更多</a></h2>
          <div class="photo-img">
            <a href="#">
              <img src="../../assets/bz1.jpg" alt="更多"></a></div>
          <ul class="photo-list">
            <li><a href="#">添加</a></li>
            <li><a href="#">aaaaaaaaaa</a></li></ul>
        </div></div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Page2"
    }
</script>

<style scoped>
  .center{
    text-align: center;
  }
  .ll{
    border: 1px solid paleturquoise;
    width: 425px;
    margin: 20px;
    display: inline-block;
    background-color: rgba(255, 255, 255, 0);
  }

  .photo-wrapper{
    padding:20px 0px 0px 0px;
    width: 100%;
    background-color: #fff;
    border-top: 1px solid #ddd;
    display: inline-block;
    background-color: rgba(255, 255, 255, 0);
  }

  .photo-title{
    display: inline-block;
    height: 15px;
    line-height: 15px;
    border-left: 3px #38fff3 solid;
    margin-top: -1px;
    margin-bottom: 10px;
    padding-left: 10px;
    padding-top: 2px;
    padding-bottom: 3px;
    font-size: 20px;
  }

  .photo-title a{
    color: #404606;
    font-weight: bold;
    text-decoration: none;
  }

  .photo-img{
    height: 290px;
  }

  img{
    width: 100%;
  }

  .photo-list li{
    margin-left: 20px;
    list-style: none;
    line-height: 15px;
    text-align: left;
    margin-bottom: 10px;
  }

  .photo-list li::before{
    content: '■';
    color: rgb(218,218,218);
    font-size:14px;
    margin-right: 4px;
  }

  .photo-list li a{
    font-size: 16px;
    text-decoration: none;
    color: #666;
  }
  .photo-list li a:hover{
    color: rgb(186, 188, 229);
    list-style: none;
  }
</style>
