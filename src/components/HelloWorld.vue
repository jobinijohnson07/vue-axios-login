<template>
  <div>
    <div class="align-items-center mt-5" id="box">
      <div class="card m-auto p-3" style="width: 18rem;">
        <h1 class="card-title">Login</h1>
        <p>
          username
          <input type="text" v-model="username" class="rounded border border-primary">
        </p>
        <p>
          password
          <input type="password" v-model="password" class="rounded border border-primary">
        </p>
        <label>
          <button type="submit" size="sm" color="primary" @click="checkUser">Login</button>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router.js";
import axios from "axios";


export default {
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    checkUser() {
      console.log("data");
      if (this.username === "jobiny" && this.password === "jobiny") {
        localStorage.setItem("username", this.username);
        this.$router.push({ name: "activity" });
         } else {
             alert("username or password incorrect")
       }
    },
     
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>