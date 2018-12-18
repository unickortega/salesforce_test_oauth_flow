<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>


      <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a class="navbar-brand" href="#">Carousel</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            <form class="form-inline mt-2 mt-md-0">

              <ul class="navbar-nav ml-md-auto d-md-flex">
                <li class="nav-item">
                  <a class="nav-link" href="#">Hasome
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Top Menu Items</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
              </ul>
            </form>
          </div>
        </nav>
      </header>



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