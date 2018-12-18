<template>
  <div>
    <div>
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
