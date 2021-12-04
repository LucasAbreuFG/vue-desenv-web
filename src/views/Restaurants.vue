<template>
  <div class="about">
    <h1>Restaurantes afiliados</h1>
    <Carousel :content="this.$store.state.homeCarousel"></Carousel>

    <v-row>
      <v-col
        v-for="(data, i) in myRestaurant"
        :key="i"
        cols="12"
        md="3"
        xs="2"
        sm="2"
      >
        <CardsRestaurant
          :cardid="i"
          :restaurantInfo="data.restaurantName"
          :distance="data.distance"
          :about="data.about"
          :path="data.path"
        ></CardsRestaurant>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Carousel from "../components/home-carousel.vue";
import CardsRestaurant from "../components/cards-restaurants.vue";

export default {

  async created(){
    await this.$store.dispatch("fetchCarousel")
    console.log(this.$store.state.homeCarousel)
  },

  components: {
    Carousel,
    CardsRestaurant,
  },
  computed: {
    myRestaurant() {
      return this.$store.getters.searchRestaurant;
    },
  },
};
</script>
