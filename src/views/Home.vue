<template>
  <div class="home">
    <b-card no-body>
        <b-tab title="Top" active>
          <topPage />
        </b-tab>
        <b-tab title="Time Management">
          <!-- Tab Contents 2 -->
          <TimeManagement></TimeManagement>
        </b-tab>
        <b-tab title="Project Management">
          <ProjectManagement></ProjectManagement>
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
    </b-card>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    border: none;
  }
</style>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  import topPage from '../../src/components/Top'
  import TimeManagement from '../../src/components/TimeManagement'
  import ProjectManagement from '../../src/components/ProjectManagement'

  export default {
    name: 'home',
    components: {
      topPage,
      TimeManagement,
      ProjectManagement,
    },
  }
</script>
