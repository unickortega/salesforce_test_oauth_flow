<template>
  <div class="sidebar">
    <ul class="sidebar-options">
      <li class="option-item">
        <img :src="public_path+'/img/Group1.png'" alt="">
      </li>
      <li class="option-item">
        <img :src="public_path+'/img/Group2.png'" alt="">
      </li>
      <li class="option-item">
        <img :src="public_path+'/img/Group3.png'" alt="">
      </li>
      <li class="option-item">
        <img :src="public_path+'/img/Group11.png'" alt="">
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .sidebar{
    .sidebar-options{
      list-style: none;
      padding: 0px;

      .option-item{
        padding: 15px;
        text-align: center;
        img{
          height: 40px;
        }
      }
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