<template>
  <v-app>
    <AppBar></AppBar>
    <ToolBar></ToolBar>

    <!-- Sizes your content based upon application components -->
    <v-container style="margin-top: 4rem; margin-bottom: 7rem">
      <router-view />
      <!-- Provides the application the proper gutter -->
    </v-container>
    <v-footer app>
      <v-footer app padless style="background: #ff8d7c">
        <v-row justify="center" no-gutters>
          <router-link to="/">
            <v-btn color="white" text rounded class="my-2"> Home </v-btn>
          </router-link>
          <router-link to="/restaurants">
            <v-btn color="white" text rounded class="my-2"> Restaurants </v-btn>
          </router-link>
          <router-link to="/food">
            <v-btn color="white" text rounded class="my-2"> Food </v-btn>
          </router-link>
          <router-link to="/about-us">
            <v-btn color="white" text rounded class="my-2"> About Us </v-btn>
          </router-link>
        </v-row>
      </v-footer>

      <v-bottom-navigation :value="value" app grow>
        <v-btn>
          <span>Recentes</span>

          <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn>
          <span>Favoritos</span>

          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn
          href="https://www.google.com/maps/search/restaurantes+sorocaba/@-23.4609861,-47.4791241,13.75z"
        >
          <span>Lugares</span>

          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
        <v-btn>
          <span>Adicionar</span>

          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from "./components/app-bar.vue";
import ToolBar from "./components/tool-bar.vue";
import axios from 'axios'

export default {
  name: "App",
  components: {
    AppBar,
    ToolBar,
  },
  data: () => 
    {
      return {info: null}
      
    },
  mounted() {
    axios
      .get(
        "https://foodbukka.herokuapp.com/api/v1/menu"
      )
      .then((response) => (this.info = response));
  },
};
</script>
<style>
a {
  text-decoration: none;
}
.v-application--wrap {
  min-height: 0 !important;
}
</style>
