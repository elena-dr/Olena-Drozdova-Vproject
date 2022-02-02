<script>
import axios from 'axios'
import SelectedArt from '../components/SelectedArt.vue'

export default {
  components: {
    SelectedArt
    
  },
 data() {
    return {
      artworks: [],
      loading: true,
      picked: false
      
    }
  },
  methods: {
    getArtworks() {
      
      axios.get('https://api.artic.edu/api/v1/artworks')
      .then(response => {
        console.log(typeof response.data, response.data)
        const list = response.data.data
        console.log('list', list)
        this.artworks = list.map(a => {
            a.imgLink = `https://www.artic.edu/iiif/2/${a.image_id}/full/843,/0/default.jpg`
            return a

        })
      })
      this.loading = false
    }
  }

}

</script>

<template>
  <div>
    <input @click="getArtworks" type="button" value="Show artworks" />
    <div class="container" v-for="art in artworks" :key="art.id">
      <p>{{ art.artist_title || "Unkown" }}, {{ art.title }}</p>
      <input type="radio" :id="art.id" :value="art" v-model="picked" />
      <label :for="art.id">More info</label>
      <SelectedArt v-if="picked && art.id === picked.id" :art="picked" />
      <img :src="art.imgLink" alt="" height="200" width="200" />
    </div>
    <div v-if="loading">Loading...</div>
  </div>
</template>

<style scoped lang="sass">
input 
  background-color: rgb(87, 25, 122)
  color: white

div
  text-align: center

label
  margin: 20px


</style>
