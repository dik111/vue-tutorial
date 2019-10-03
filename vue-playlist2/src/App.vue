<template>
  <div id="app">
<!--    <h1>{{title}}</h1>-->
    <app-header v-on:titleChange="updateTitle($event)" v-bind:title="title"></app-header>
    <users v-bind:users="users"></users>
    <users v-bind:users="users"></users>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Users from "./components/Users";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: 'App',
  data(){
      return{
          // title:"这个是我的第一个Vue脚手架项目！"
          users:[
              {name:"Henry",position:"Web开发",show:false},
              {name:"Henry",position:"Web开发",show:false},
              {name:"Henry",position:"Web开发",show:false},
              {name:"Henry",position:"Web开发",show:false},
              {name:"Henry",position:"Web开发",show:false},
              {name:"Henry",position:"Web开发",show:false},
              {name:"Henry",position:"Web开发",show:false},
              {name:"Henry",position:"Web开发",show:false},
          ],
          title:"传递的是一个值,(number string boolean)"
      }

  },
    methods:{
      updateTitle(title){
          this.title=title;
      }

    },
    components:{
      "users":Users,
        "app-header":Header,
        "app-footer":Footer
    }
}
</script>

<style scoped>
  h1{
    color: purple;
  }

</style>
