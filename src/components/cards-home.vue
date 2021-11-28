<template>
  <v-card class="mx-auto" max-width="400" style="padding-top: 10vh">
    <v-img class="white--text align-end" height="200px" :src="image">
      <v-card-title
        style="
          font-family: 'SulSans', Helvetica, sans-serif;
          font-weight: 700;
          font-size: 2rem;
          width: 60%;
          border-radius: 100px;
        "
        :style="imageColor"
        >{{ cardInfo }}</v-card-title
      >
    </v-img>

    <v-card-text class="text--primary">
      <div
        style="
          font-family: 'SulSans', Helvetica, sans-serif;
          font-weight: 700;
          font-size: 1rem;
        "
      >
        {{ about }}
      </div>
    </v-card-text>

    <v-card-actions>
      <router-link :to="path">
        <v-btn color="orange" text> Ver Mais </v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["cardInfo", "about", "image", "path", "imageColor"],
};
</script>