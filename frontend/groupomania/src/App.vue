<template>
  <div id="app">
    <div class="img-header"> <img src="../src/assets/icon.svg" ></div>
    <div id="nav">
      <router-link to="/signup">S'inscrire</router-link>
      <router-link to="/login">Se connecter</router-link>
    </div>
      <router-view/>
  </div>  
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .img-header{
    margin: 0 auto;
    width: 200px;
    height: 200px;
    
  }
}

#nav {
  padding: 30px;
  display: flex;
  background-color: #ffd7d7;
  justify-content: space-between;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
