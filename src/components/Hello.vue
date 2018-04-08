<template>
  <div class="site-title">
    <h1>{{ title }} animated</h1>
  </div>
</template>

<script>
export default {
  name: 'site-title',
  props: ['title'],
  data () {
    return {
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
