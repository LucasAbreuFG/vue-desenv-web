<template>
  <div class="about">
    <ToolBar></ToolBar>
    <h1>Restaurantes afiliados</h1>
      <Carousel></Carousel>

      <v-row >
        <v-col
          v-for="(data,i) in (myRestaurant)"
          :key="i"
          cols="12"
          md="3"
          xs="2"
          sm="2"
        >
            <CardsRestaurant :cardid="i" :restaurantInfo="data.restaurantName" :distance="data.distance" :about="data.about" :path="data.path"></CardsRestaurant>
        </v-col>
    </v-row>
  </div>
</template>

<script>
  import Carousel from "../components/home-carousel.vue"
  import CardsRestaurant from "../components/cards-restaurants.vue"
  import ToolBar from "../components/tool-bar.vue"

export default({
  components: {
      Carousel,
      CardsRestaurant,
      ToolBar
    },
    computed:{
      myRestaurant(){
        return this.$store.state.restaurant
      },
    },
})
</script>
