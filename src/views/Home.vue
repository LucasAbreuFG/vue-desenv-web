<template>
  <div class="about">
    <h1>Great places to please your taste buds</h1>
      <Carousel></Carousel>

      <CardsRestaurant></CardsRestaurant>
  </div>
</template>

<script>
  import Carousel from "../components/home-carousel.vue"
  import CardsRestaurant from "../components/cards-restaurants.vue"


export default({
  components: {
      Carousel,
      CardsRestaurant
    },
})
</script>
