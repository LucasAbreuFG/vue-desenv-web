<template>
  <v-row>
    <v-col>
      <v-card class="mx-auto" max-width="344" style="margin-top: 5vh">
        <v-img :src="path" height="200px"></v-img>

        <v-card-title> {{ restaurantInfo }}</v-card-title>

        <v-card-subtitle> {{ distance }} </v-card-subtitle>

        <v-card-actions>
          <router-link to="/food">
            <v-btn color="orange lighten-2" text> MAIS </v-btn>
          </router-link>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              {{ about }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["restaurantInfo", "distance", "about", "path"],
  data: () => ({
    show: false,
  }),
};
</script>