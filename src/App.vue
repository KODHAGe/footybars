<template>
  <div id="app">
    <main>
      <hello></hello>
      <div class="team" v-for="(value, index) in values" v-bind:key="">
        <h5 class="team-title">{{index + 1}}. {{epl[index].team}}</h5>
        <img class="team-crest" :src=epl[index].crest>
        <vue-slider v-bind:class="['obj-' + index]" ref="slider" v-bind="sliderSettings" v-bind:processStyle="bgArray[index]" v-bind:sliderStyle="bgArray[index]" v-bind:tooltipStyle="bgArray[index]" v-model="values[index]"></vue-slider>
      </div>
      <div class="control">
        <h5 class="control-header">Controls</h5>
        <button class="control-button" @click="play()">Play</button>
        <button class="control-button" @click="pause()">Pause</button>
        <button class="control-button" @click="reset()">Reset</button>
        <h5 class="control-label">Matchday:</h5>
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
import eplData from './data/epl'

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
    for (let i = 0; i < eplData.length; i++) {
      onlyPoints.push(eplData[i].points)
      let color = {'backgroundColor': eplData[i].primary, 'borderColor': eplData[i].primary}
      bgArray.push(color)
    }

    let rounds = onlyPoints[0].length // Set amount of rounds
    let values = Array.apply(null, Array(onlyPoints.length)).map(Number.prototype.valueOf, 0) // Create array of zeroes for initial state
    let max = Math.max.apply(null, onlyPoints.map(function (row) { return Math.max.apply(Math, row) })) // Find the max-value for points
    return {
      value: 0,
      values: values,
      rounds: rounds,
      teams: onlyPoints,
      epl: eplData,
      sliderSettings: {
        min: 0,
        max: max,
        'tooltip-dir': 'left'
      },
      valueSliderSettings: {
        min: 0,
        max: rounds,
        'tooltip-dir': 'bottom'
      },
      bgArray: bgArray,
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
    play () {
      if (!this.playing) {
        this.playing = setInterval(() => {
          let num = this.value + 1
          if (num <= this.rounds) {
            this.value = num
          } else {
            this.value = 0
          }
        }, 1000)
      }
    },
    reset () {
      clearInterval(this.playing)
      this.value = 0
    },
    pause () {
      clearInterval(this.playing)
    }
  },
  watch: {
    value: function (newVal, oldVal) {
      if (newVal === 0) {
        this.values = this.teams.map(function (value, index) { return 0 })
      } else if (newVal <= this.rounds) {
        this.values = this.teams.map(function (value, index) { return value[newVal - 1] })
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

.team > .vue-slider-component .vue-slider-dot {
  box-shadow: 0 0 0 0;
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
