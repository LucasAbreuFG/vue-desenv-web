<template>
  <div class="about">
    <ToolBar></ToolBar>
    
    <div>
        <About></About>
        <TextAbout></TextAbout>
    </div>
  </div>
</template>

<script>
  import ToolBar from "../components/tool-bar.vue"
  import About from "../components/about.vue"
  import TextAbout from "../components/textAbout.vue"



export default({
  components: {
      ToolBar,
      About,
      TextAbout
    },
    computed:{
      myRestaurant(){
        return this.$store.state.restaurant
      },
    },
})
</script>
