<template>
  <div class="about">
    <ToolBar></ToolBar>

    <div style="text-align: center; padding-top: 2vh">
      <h1
        style="
          font-family: 'SulSans', Helvetica, sans-serif;
          font-weight: 700;
          font-size: 2.25rem;
        "
      >
        Tudo para facilitar o seu dia
      </h1>
      <p style="padding-top: 1vh">
        O que você precisa está aqui. Peça e receba onde estiver.
      </p>
    </div>
        
    <v-row style="justify-content: center;">
      <v-col
        v-for="(data, i) in myHomeCards"
        :key="i"
        cols="9"
        md="3"
        xs="2"
        sm="2"

      >
        <CardHome
          :cardid="i"
          :cardInfo="data.nameCard"
          :about="data.aboutCard"
          :image="data.image"
          :path="data.path"
          :imageColor="data.imageColor"
        ></CardHome>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ToolBar from "../components/tool-bar.vue";
import CardHome from "../components/cards-home.vue";

export default {
  components: {
    ToolBar,
    CardHome,
  },
  computed: {
    myHomeCards() {
      return this.$store.state.homeCards;
    },
  },
};
</script>
