<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>

      <b-navbar toggleable="md" type="light" variant="light">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#">
          <b>geechs</b>
          job
        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

          <!-- <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav> -->

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <!-- <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form> -->
            <b-nav-item href="#">
                  <button class="btn btn-primary btn-sm mr-2" type="text" placeholder="Search">Start working time</button>
            </b-nav-item>
            <b-nav-item href="#">
                  <img id="prof_img" src="../../src/assets/echo.jpg" class="rounded-circle" alt="">
            </b-nav-item>

            <!-- <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown> -->

            <!-- <b-nav-item-dropdown right> -->
              <!-- Using button-content slot -->
              <!-- <template slot="button-content">
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown> -->
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>

      <!-- navbar-1.vue -->



      <main class="py-4">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-11">
              <div class="container-fluid">
                <b-card no-body>
                  <b-tabs card>
                    <b-tab title="Top" active>
                      <topPage />
                    </b-tab>
                    <b-tab title="Time Management">
                      <!-- Tab Contents 2 -->
                      <TimeManagement></TimeManagement>
                    </b-tab>
                    <b-tab title="Project Management">
                      Tab Contents 2
                    </b-tab>
                    <b-tab title="Remuneration">
                      Tab Contents 2
                    </b-tab>
                    <b-tab title="Questionnaire">
                      Tab Contents 2
                    </b-tab>
                    <b-tab title="Chat">
                      Tab Contents 2
                    </b-tab>
                  </b-tabs>
                </b-card>
              </div>
            </div>
            <div class="col-md-1">
              <div class="float-right">
                <b-nav vertical class="w-25">
                  <b-nav-item active>Active</b-nav-item>
                  <b-nav-item>Link</b-nav-item>
                  <b-nav-item>Another Link</b-nav-item>
                  <b-nav-item disabled>Disabled</b-nav-item>
                </b-nav>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
  #wrapper {
    padding: 90px 15px;
  }

  .navbar-expand-lg .navbar-nav.side-nav {
    flex-direction: column;
  }

  .card {
    margin-bottom: 15px;
    border-radius: 0;
    box-shadow: 0 3px 5px rgba(0, 0, 0, .1);
  }

  .header-top {
    box-shadow: 0 3px 5px rgba(0, 0, 0, .1)
  }

  .leftmenutrigger {
    display: none
  }

  @media(min-width:992px) {
    .leftmenutrigger {
      display: block;
      display: block;
      margin: 7px 20px 4px 0;
      cursor: pointer;
    }

    #wrapper {
      padding: 90px 15px 15px 15px;
    }

    .navbar-nav.side-nav.open {
      left: 0;
    }

    .navbar-nav.side-nav {
      background: #585f66;
      box-shadow: 2px 1px 2px rgba(0, 0, 0, .1);
      position: fixed;
      top: 56px;
      flex-direction: column !important;
      left: -220px;
      width: 200px;
      overflow-y: auto;
      bottom: 0;
      overflow-x: hidden;
      padding-bottom: 40px
    }
  }
</style>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  import topPage from '../../src/components/Top'
  import TimeManagement from '../../src/components/TimeManagement'

  export default {
    name: 'home',
    components: {
      topPage,
      TimeManagement
    },
  }
</script>