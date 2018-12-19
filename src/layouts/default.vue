<template>
  <div>
    <navbar/>
    <div class="main-content">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" :to="{name: 'top'}">Top</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" :to="{name: 'time.management'}">Time Management</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" :to="{name: 'project.management'}">Project Management</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link">Remuneration</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Questionnaire</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Chat</a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <child/>
        </div>
    </div>
    <sidebar class="sidebar"/>
  </div>
</template>

<style lang="scss" scoped>
  .main-content{
    padding: 15px;
    padding-right: 70px;
    .nav-tabs{
      border-color: #adadad;
      .nav-link{
        border-top-left-radius: 0.9rem;
        border-top-right-radius: 0.9rem;
        color: #8c8c8c;
        font-size: 14px;
        &.active{
          border-color: #adadad #adadad #fff;
          color: inherit;
        }
      }
    }
    .tab-content{
      border: 1px solid #adadad;
      border-top: none;
      padding: 15px;
      background: white;
    }
  }

  .sidebar{
    position: absolute;
    right: 0px;
    top: 115px;
    bottom: 0px;
    width: 70px;
  }
</style>


<script>

import Child from '@/components/Child'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
export default {
  name: 'MainLayout',

  components: {
    Child,
    Navbar,
    Sidebar
  }
}
</script>
