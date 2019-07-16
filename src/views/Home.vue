<template>
  <div class="home">
    <nav></nav>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <router-view></router-view>
    <!-- <div class="col-12">
        <Activity></Activity>
        <About></About>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Nav from '@/components/navbar/navbar.vue';
import Activity from "./activity"
import About from "./About"

export default {
  name: 'home',
  components: {
    HelloWorld,
    Nav,
    Activity,
    About
  }
}
</script>

