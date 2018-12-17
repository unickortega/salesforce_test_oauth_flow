<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>
      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <a class="navbar-brand" href="#"><b>geechs</b> job</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04"
          aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample04">
          <ul class="navbar-nav mr-auto">
          </ul>
          <div class="form-inline my-2 my-md-0">
            <button class="btn btn-primary btn-sm mr-2" type="text" placeholder="Search">Start working time</button>
            <img id="prof_img" src="../../src/assets/echo.jpg" class="rounded-circle" alt="">
          </div>
        </div>
      </nav>
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