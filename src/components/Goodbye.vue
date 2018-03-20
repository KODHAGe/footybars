<template>
  <div class="credits">
    <p>
      <li>Inspiration: <a href="https://www.reddit.com/r/soccer/comments/84vos6/serie_a_table_animated/">Serie A table animated by Itafan</a></li>
      <li>Data: <a href="https://football-data.org">football-data.org</a></li>
      <li>Team colors: <a href="https://teamcolorcodes.com/soccer/">teamcolorcodes.com</a></li>
      <li><a href="https://github.com/KODHAGe/footybars">Github</a></li>
    </p>
  </div>
</template>

<script>
export default {
  name: 'site-credit',
  data () {
    return {
      msg: 'Credit where credit is due:',
      content: 'football-data.org'
    }
  }
}
</script>

<style>
  .credits {
    margin-top: 3em;
  }
  li {
    list-style: none;
  }
  .credits p {
    width: 200px;
    text-align: left;
  }
</style>
