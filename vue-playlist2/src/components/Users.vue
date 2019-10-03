<template>
  <div class="Users">
    <ul>
      <li v-for="user in users">
        {{user}}
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'Users',
        data () {
            return {
                users:["Henry","Bucky","Emily"]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
