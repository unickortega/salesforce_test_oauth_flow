<template>
  <div>
    <div class="container mt-4" style="min-height: 100vh;">
      <child/>
    </div>
  </div>
</template>

<script>

import Child from '@/components/Child'

export default {
  name: 'MainLayout',

  components: {
    Child
  }
}
</script>
