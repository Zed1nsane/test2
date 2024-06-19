<template>
  <div class="home">
    <button class="BGM" @click="changeStatus"><img id="BGM-icon" :src='this.$store.state.isBgmOn?BGMOn:BGMOff'></button>
    <div class="main">
      <h1>Welcome To Zuul !</h1>
      <div class="button-list">
        <button class="button" @click="goToPage">开始游戏</button>
        <button class="button">设置</button>
        <button class="button">帮助</button>
        <button class="button">退出</button>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/paper.css'
import BGMOn from '@/assets/BGM.png'
import BGMOff from '@/assets/noBGM.png'
export default {
  name: 'HomeView',
  data(){
    return{
      BGMOn:BGMOn,
      BGMOff:BGMOff
    }
  },
  methods:{
    changeStatus(){
      this.$store.state.isBgmOn = !this.$store.state.isBgmOn;
      this.$emit('changeStatus');
    },
    goToPage(){
      this.$router.push('/about');
    }
  },
}
</script>

<style scoped>

.home{
  border: black solid 2px;
  width: 1300px;
  height: 800px;
  background-image:url("@/assets/9ji9rytm.png");
  background-size: cover;
  /*background-size: 100% 100%;*/
  position: relative;
}
.BGM{
  position: absolute;
  left: 0;
}
#BGM-icon{
  width: 60px;
}
.button-list{
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
}
.button{
  width: 20%;
  font-size: 40px;
  margin-bottom: 20px;
}

h1{
  color: white;
}

</style>