<template>
  <div>
    dashboard
    {{user}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    layout: 'default',
    middleware: 'auth',
    computed: mapGetters({
        user: 'user'
    }),
}
</script>