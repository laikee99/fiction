<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">书城</div>
    </nav-bar>
    
    <user-head class="user-head">
      <div slot="left">
        <img src="~assets/img/profile/headshot.png" alt="">
      </div>
      <div slot="center">用户昵称</div>
      <div slot="right" class="user-head-right">签到</div>
    </user-head>

    <user-info class="user-info">
      <div slot="left" class="user-info-left"><img src="~assets/img/profile/user.png" alt=""></div>
      <div slot="center">账户信息</div>
      <div slot="right" class="user-info-right"><img :src="imgURL" alt=""></div>
    </user-info>
    <user-info class="user-info">
      <div slot="left" class="user-info-left"><img src="~assets/img/profile/history.png" alt=""></div>
      <div slot="center">浏览历史</div>
      <div slot="right" class="user-info-right"><img :src="imgURL" alt=""></div>
    </user-info>
    <user-info class="user-info">
      <div slot="left" class="user-info-left"><img src="~assets/img/profile/sign.png" alt=""></div>
      <div slot="center">我的签到</div>
      <div slot="right" class="user-info-right"><img :src="imgURL" alt=""></div>
    </user-info>
    <user-info class="user-info">
      <div slot="left" class="user-info-left"><img src="~assets/img/profile/collect.png" alt=""></div>
      <div slot="center">我的收藏</div>
      <div slot="right" class="user-info-right"><img :src="imgURL" alt=""></div>
    </user-info>
    <user-info class="user-info">
      <div slot="left" class="user-info-left"><img src="~assets/img/profile/level.png" alt=""></div>
      <div slot="center">我的等级</div>
      <div slot="right" class="user-info-right"><img :src="imgURL" alt=""></div>
    </user-info>
    
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import UserHead from 'components/common/userHead/UserHead'
import UserInfo from 'components/common/userInfo/UserInfo'

export default {
  name: "Profile",
  components: {
    NavBar,
    UserHead,
    UserInfo
  },
  created() {
    let URL = "assets/img/common/entrance.png";
    this.imgURL = require("../../" + URL)
  }
  // data() {
  //   return {
  //     imgURL: require('../../assets/img/profile/entrance.png')
  //   }
    
  // }
}
</script>

<style scoped>
  .nav-bar {
    color: #fff;
    background-color: #ff9999;
  }
  .user-info:hover {
    background-color: #eee;
  }
  .user-head img {
    width: 40px;
    height: 40px;
    vertical-align: middle;
    margin-left: 40%;
  }
  
  .user-head-right {
    padding-left: 30%;
  }
  .user-info-left img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
    margin-left: 42%;
  }
  .user-info-right img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
    margin-left: 30%;
  }
</style>