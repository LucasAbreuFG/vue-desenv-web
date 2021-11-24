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
          <v-btn
            v-for="link in links"
            :key="link"
            color="white"
            text
            rounded
            class="my-2"
          >
            {{ link }}
          </v-btn>
          <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-col>
        </v-row>
      </v-footer>

      <v-bottom-navigation :value="value"  app color="teal" grow>
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
    AppBar
  },
  data: () => ({
    //
  }),
};
</script>
