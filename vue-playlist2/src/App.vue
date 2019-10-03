<template>
  <div id="app">
    <h1>{{title}}</h1>
    <users></users>

  </div>
</template>

<script>
import Users from "./components/Users";

export default {
  name: 'App',
  data(){
      return{
          title:"这个是我的第一个Vue脚手架项目！"
      }
  },
    components:{
      Users
    }
}
</script>

<style scoped>
  h1{
    color: purple;
  }

</style>
