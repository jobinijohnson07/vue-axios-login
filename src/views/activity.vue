<template>
  <div class="about">
    <Nav></Nav>
    <h1>Activity</h1>
    <u>{{ username }}</u>
  </div>
</template>

<script>
import Nav from "../components/navbar/navbar.vue";
import axios from "axios";
import URL from "../api/user"

export default {
   components: {
    Nav
  },
     data: function() {
    return {
      username: localStorage.getItem("username"),
      
    };
  },
  mounted(){
    axios
      .get('http://localhost:5000/data')
      .then(response => {this.info= response.data})
  }
};
</script>


