<template>
  <div class="site-title">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'site-title',
  data () {
    return {
      msg: 'League table animated'
    }
  }
}
</script>

<style>
h1, h2 {
  font-weight: bold;
  margin-bottom: 1.2em;
}
</style>
