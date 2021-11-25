<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://ik.imagekit.io/xsilqkxxvya/3_f6fYUO5ew.jpg?updatedAt=1637807643953',
          },
          {
            src: 'http://simplybuckhead.com/wp-content/uploads/2018/05/A-KD_interior.jpg',
          },
          {
            src: 'https://www.uncovercolorado.com/wp-content/uploads/2018/12/Courtyard-by-Marriott-Denver-Cherry-Creek-denver-co.jpg',
          },
          {
            src: 'https://cache.marriott.com/marriottassets/marriott/PVDLW/pvdlw-bar-0144-hor-feat.jpg',
          },
        ],
      }
    },
  }
</script>