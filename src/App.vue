<template>
  <v-app >
    <AppBar></AppBar>

    <!-- Sizes your content based upon application components -->
    <v-container style="margin-top: 4rem; margin-bottom: 7rem" >
      
      <router-view />
      <!-- Provides the application the proper gutter -->
      
    </v-container>

    <v-footer app>
      <v-footer app color="primary lighten-1" padless>
        <v-row justify="center" no-gutters>
          <router-link to="/home">
          <v-btn
            color="white"
            text
            rounded
            class="my-2"
          >
            Home
          </v-btn>
        </router-link>
        <router-link to="/restaurants">
          <v-btn
            color="white"
            text
            rounded
            class="my-2"
          >      
              Restaurants
          </v-btn>
        </router-link>
        <router-link to="/">
          <v-btn
            color="white"
            text
            rounded
            class="my-2"
          >
            Food
          </v-btn>
        </router-link>
        <router-link to="/contact">
          <v-btn
            color="white"
            text
            rounded
            class="my-2"
          >
            Contact
          </v-btn>
        </router-link>

        </v-row>
      </v-footer>

      <v-bottom-navigation :value="value"  app  grow>
        <v-btn>
          <span>Recents</span>

          <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn>
          <span>Favorites</span>

          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn>
          <span>Nearby</span>

          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
  </v-app>
</template>

<script>

import AppBar from "./components/app-bar.vue"

export default {
  name: "App",
  components:{
    AppBar,
  },
  data: () => ({
  }),
};
</script>
<style>
  .v-application--wrap{
    min-height: 0 !important;
  }
</style>
