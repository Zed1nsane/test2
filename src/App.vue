<template>
  <div id="app">
    <audio :src=this.bgm loop autoplay></audio>
    <router-view @changeStatus="changeBgmStatus"></router-view>
  </div>
</template>

<script>
import bgm from './assets/bgm.mp3'
export default {
  data(){
    return{
      bgm:bgm
    }
  },
  methods:{
    changeBgmStatus(){
      let audio = document.querySelector('audio');
      audio.paused?audio.play():audio.pause();
    }
  },
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 70px;
}

</style>
