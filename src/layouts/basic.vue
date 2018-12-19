<template>
  <div>
    <child/>
  </div>
</template>

<script>
import Child from '@/components/Child'

export default {
  name: 'basic',
  components: {
    Child
  }
}
</script>
