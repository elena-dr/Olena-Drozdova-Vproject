<script>

  
  import ArtworksButton from './components/ArtworksButton.vue'
  

export default {
    components: {
    ArtworksButton,
    

}
  
}


</script>
<template>
  <div>
    <nav>
      <ul>
        <li>
          <RouterLink style="text-decoration: none; color: white; font-size: 20px" to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink style="text-decoration: none; color: white; font-size: 20px" to="/about">About us</RouterLink>
        </li>
        <li>
          <RouterLink style="text-decoration: none; color: white; font-size: 20px" to="/contact">Contact</RouterLink>
        </li>
      </ul>
    </nav>
    <h1>ArtChicago</h1>
    <RouterView />
    <ArtworksButton />
  </div>
</template>

<style>

body {
 background: rgb(33, 1, 51);
  /* background: linear-gradient(
    55deg,
    rgba(2, 0, 36, 1) 15%,
    rgba(15, 11, 54, 1) 35%,
    rgb(53, 11, 77) 80%); */
 color: white;
}

h1 {
  text-align: center;
  font-size: 50px;
}

li {
  list-style-type: none;
}
ul {
  display: flex;
  justify-content:space-around;
  font-size: 35px;

}






</style>
