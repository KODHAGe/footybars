<template>
  <div class="title">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'title',
  data () {
    return {
      msg: 'Premier League animated'
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
