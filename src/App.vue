<template>
  <div id="app">
    <main>
      <hello v-bind:title="league"></hello>
      <div class="bars">
        <div class="team" v-for="(value, index) in values" v-bind:key="">
          <h5 class="team-title">{{index + 1}}. {{data[index].team}}</h5>
          <!--<img class="team-crest" :src=data[index].crest>-->
          <vue-slider v-bind:class="['obj-' + index]" ref="slider" v-bind="sliderSettings" v-bind:processStyle="bgArray[index]" v-bind:sliderStyle="bgImage[index]" v-bind:tooltipStyle="bgArray[index]" v-model="values[index]"></vue-slider>
        </div>
      </div>
      <div class="control">
        <div class="control-play">
          <button class="control-button" @click="play(speed)">Play</button>
          <button class="control-button" @click="pause()">Pause</button>
          <button class="control-button" @click="reset()">Reset</button>
        </div>
        <div class="control-speed">
          <h5 class="control-label">Animation speed:</h5>
          <vue-slider class="control-speed-slider" ref="slider" v-bind="speedSliderSettings" v-bind:processStyle="bg" v-bind:tooltipStyle="bg" v-model="speed"></vue-slider>
        </div>
        <h5 class="control-label">Games played:</h5>
        <vue-slider class="control-slider" ref="slider" v-bind="valueSliderSettings" v-bind:processStyle="bg" v-bind:tooltipStyle="bg" v-model="value"></vue-slider>
      </div>
      <goodbye></goodbye>
    </main>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Goodbye from './components/Goodbye'
import vueSlider from 'vue-slider-component'
import epl from './data/epl'
import nba from './data/nba_part'
import nhl from './data/nhl'
var data

// Quick & Ugly-ass route by param. Redo in vue-router
function getUrlParams (league) {
  let hashes = league.slice(league.indexOf('?') + 1).split('&')
  let params = {}
  hashes.map(hash => {
    let [key, val] = hash.split('=')
    params[key] = decodeURIComponent(val)
  })

  return params
}

let param = getUrlParams(window.location.search).league
let league
if (!param) {
  data = epl
  league = 'Premier League'
} else if (param === 'nba') {
  data = nba
  league = 'NBA'
} else if (param === 'nhl') {
  data = nhl
  league = 'NHL'
}

export default {
  name: 'app',
  components: {
    Hello,
    Goodbye,
    vueSlider
  },
  data () {
    // Parse data into a more barebones format. Move tall this logic to cloud function, probably
    let onlyPoints = []
    let bgArray = []
    let bgImage = []
    for (let i = 0; i < data.length; i++) {
      onlyPoints.push(data[i].points)
      let color = {
        'backgroundColor': data[i].primary,
        'borderColor': data[i].primary,
        'padding': '2px 2px',
        'minHeight': '5px',
        'borderRadius': '50%'
      }
      let dot = {
        'backgroundImage': 'url("' + data[i].crest + '")',
        'backgroundSize': 'contain',
        'backgroundRepeat': 'no-repeat',
        'backgroundPosition': 'center',
        'backgroundColor': 'rgba(0,0,0,0)',
        'borderRadius': '0',
        'top': '-11px'
        // 'backgroundColor': data[i].primary,
        // 'borderColor': data[i].primary
      }
      bgImage.push(dot)
      bgArray.push(color)
    }

    let rounds = onlyPoints[0].length // Set amount of rounds
    let values = Array.apply(null, Array(onlyPoints.length)).map(Number.prototype.valueOf, 0) // Create array of zeroes for initial state
    let max = Math.max.apply(null, onlyPoints.map(function (row) { return Math.max.apply(Math, row) })) // Find the max-value for points
    return {
      value: 0,
      speed: 3,
      values: values,
      rounds: rounds,
      teams: onlyPoints,
      data: data,
      league: league,
      sliderSettings: {
        min: 0,
        max: max,
        'tooltip-dir': 'left',
        'dot-size': 24
      },
      valueSliderSettings: {
        min: 0,
        max: rounds,
        'tooltip-dir': 'bottom'
      },
      speedSliderSettings: {
        min: 0,
        max: 6,
        'tooltip': 'false'
      },
      bgArray: bgArray,
      bgImage: bgImage,
      bg: {
        'backgroundColor': 'black',
        'borderColor': 'black'
      }
    }
  },
  methods: {
    setValue (name, num) {
      this[name] = num
    },
    play (speed) {
      let interval = (speed - 0) * ((200 - 2000) / (6 - 0)) + 2000 // map speed to interval range
      console.log(interval)
      if (!this.playing) {
        console.log('hm')
        this.playing = setInterval(() => {
          let num = this.value + 1
          if (num <= this.rounds) {
            this.value = num
          } else {
            this.value = 0
          }
        }, interval)
      }
    },
    pause () {
      clearInterval(this.playing)
      delete this.playing
    },
    reset () {
      this.pause()
      this.value = 0
    }
  },
  watch: {
    value: function (newVal, oldVal) {
      if (newVal === 0) {
        this.values = this.teams.map(function (value, index) { return 0 })
      } else if (newVal <= this.rounds) {
        this.values = this.teams.map(function (value, index) { return value[newVal - 1] })
      }
    },
    speed: function (newVal, oldVal) {
      if (this.playing) {
        clearInterval(this.playing)
        delete this.playing
        this.play(newVal)
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700');

body {
  margin: 0;
}

#app {
  font-family: 'IBM Plex Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

.team {
  display: flex;
  align-items: center;
  height: 27px;
}

.team > div {
  pointer-events: none;
  cursor: auto;
}

.team-title {
  text-align: left;
  display: inline-block;
  left: 0;
  width: 200px;
  margin-left: 50px;
  margin-right: 10px;
}

.team-crest {
  width: 20px;
  max-height: 25px;
  margin-right: 50px;
}

.team > .vue-slider-component {
  flex: 1;
  min-width: 300px;
  margin-right: 50px;
  font-weight: bolder;
}

.vue-slider {
  height: 1px!important;
}

.team > .vue-slider-component .vue-slider-dot {
  box-shadow: 0 0 0 0;
}

.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-left .vue-slider-tooltip:before {
  right: -9px;
}

.vue-slider-process {
  top: -1px!important;
  padding: 1px!important;
  min-height: 2px!important;
  height: 2px!important;
  border-radius: 0!important;
}

.team h5 {
  font-weight: normal;
}

.control {
  width: 50%;
  margin: auto;
  margin-top: 50px;
}

.control-label {
  margin-bottom: 0;
  margin-left: 0;
  text-align: left;
}

.control-speed {
  max-width: 300px;
  margin: auto;
}

button {
    background-color: #38003c;
    border: none;
    color: white;
    padding: 1em 2em;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
}
button:hover {
    background-color: #38003ccb;
    cursor: pointer;
}

@media(max-width: 650px) {
  .team {
    flex-wrap: wrap;
    margin-top: 1em;
    height: 60px;
  }

  .team > .vue-slider-component {
    min-width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
  .team-title {
    width: auto;
    margin: 0;
    margin-left: 10%;
    margin-right: 1em;
  }
  .control {
    width: 80%;
    margin: auto;
    margin-top: 50px;
    padding-bottom: 4em;
  }
}
</style>
