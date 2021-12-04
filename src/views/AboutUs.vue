<template>
  <div class="about">
    
    <div>
        <About></About>
        <TextAbout></TextAbout>
    </div>
  </div>
</template>

<script>
  import About from "../components/about.vue"
  import TextAbout from "../components/textAbout.vue"

export default({
  components: {
      About,
      TextAbout
    },
    computed:{
      myRestaurant(){
        return this.$store.getters.restaurant
      },
    },
})
</script>
