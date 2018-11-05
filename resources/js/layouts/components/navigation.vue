<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <router-link :to="{ name: 'welcome' }" class="navbar-brand" href="#">Geechs</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li v-if="user">
          <router-link  class="nav-link" exact-active-class="active" :to=" {name:'dashboard'} "> Dashboard </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
      </ul>
      <span class="navbar-text">
        <ul class="navbar-nav mr-auto" v-if="!user">
          <li class="nav-item">
            <router-link class="nav-link" exact-active-class="active" :to="{ name: 'login' }">Sign In</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" exact-active-class="active" :to="{ name: 'register' }">Sign Up</router-link>
          </li>
        </ul>
        <ul class="navbar-nav mr-auto" v-else>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="logout">Logout</a>
          </li>
        </ul>
      </span>
    </div>
  </nav>
</template>

<script>

import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  name: 'DefaultNav',
  computed: mapGetters({
      user: 'user'
  }),
  methods: {
    async logout(){
      await this.$store.dispatch('logout')

      this.$router.push({ name: 'welcome' })
    }
  }
}
</script>
