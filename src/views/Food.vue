<template >
  <div >
    <ToolBar></ToolBar>
    <v-row >
      <v-col
        v-for="(data,i) in (myCard)"
        :key="i"
        cols="12"
        md="4"
        xs="2"
        sm="2"
      >
          <CardsAbout :cardid="i" :cardInfo="data.restaurantName" :localizacao="data.localization" :price="data.price" :photoNames="data.path"></CardsAbout>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import CardsAbout from '../components/my-card'
  import ToolBar from "../components/tool-bar.vue"


  export default {
    name: 'Food',
    data(){
      return{
        titleview: this.$store.state.title  
      }
    },
    computed:{
      myCard(){
        return this.$store.state.cards
      },
    },
    components: {
      CardsAbout,
      ToolBar
    },
  }
</script>
