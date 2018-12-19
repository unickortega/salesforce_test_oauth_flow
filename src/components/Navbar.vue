<template>
  <div class="nav-bar">
    <div class="icon-container"> 
      <router-link to="/">
          <img :src="public_path+'/img/geechsjob_logo（black）.png'">
      </router-link>
    </div>
    <div class="user-options">
      <button type="button" class="add-button green-button btn btn-primary">＋　作業開始</button>
      <div class="avatar">
        <img :src="public_path+'/img/avartar-default.jpg'">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .nav-bar{
    position: relative;
    height: 60px;
    
    .icon-container{
      position: relative;
      height: 100%;
      overflow: hidden;
      img{
        position: absolute;
        top: -25px;
        left: -35px;
        height: 120px;

      }
    }
  }
  .user-options{
    position: absolute;
    right: 0px;
    top: 0px;
    padding: 15px;

    .add-button{
      font-size: 10px;
      margin-right: 20px;
      width: 150px;
    }
  }
  .avatar{
    display: inline-block;
    img{
      height: 35px;
      width: 35px;
      border-radius: 50%;
      border: 1px solid gray;
    }
  }
</style>


<script>
export default {
  name: 'Navbar',
  data: () => ({
    // 
  })
}
</script>