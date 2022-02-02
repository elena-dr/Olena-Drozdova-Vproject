<script>


  export default {
    props: {
      // eslint-disable-next-line vue/require-default-prop
      art: String
    }
  }
</script>



<template>
  <div>
    <p>Picked</p>
    {{ art.place_of_origin }}, {{ art.credit_line }}
  </div>
</template>

<style scoped lang="sass">
div
  text-align: center

</style>