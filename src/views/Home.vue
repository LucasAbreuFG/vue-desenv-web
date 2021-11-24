<template >
  <div >
    <v-row >
      <v-col
        v-for="(data,i) in (myCard)"
        :key="i"
        cols="12"
        md="4"
        xs="2"
        sm="2"
      >
          <CardsAbout :cardid="i" :cardInfo="data" :localizacao="myLocalizacao[i]" :price="myprice[i]" :photoNames="photoNames[i]"></CardsAbout>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import CardsAbout from '../components/my-card'

  export default {
    name: 'Home',
    data(){
      return{
        titleview: this.$store.state.title  
      }
    },
    computed:{
      myCard(){
        return this.$store.state.cards
      },
      title(){
        return this.$store.getters.bigTitle
      },
      myLocalizacao(){
        return this.$store.state.localizacao
      },
      myprice(){
        return this.$store.state.price
      },
      photoNames(){
        return this.$store.state.photoNames
      }
    },
    components: {
      CardsAbout,
    },
  }
</script>
