import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards:[
      {
        restaurantName: "Restaurante de Shita",
        localization:"São Paulo, Muretinha",
        price:546,
        path: "1-re.jpg"
      },
      {
        restaurantName: "Recanto do Grill",
        localization:"São Paulo, Vila Nascimento",
        price:412,
        path: "2-re.jpg"
      },
      {
        restaurantName: "Divino Pão",
        localization:"Curitiba, Ponte da vida",
        price:421,
        path: "3-re.jpg"
      },
      {
        restaurantName: "Rapidão Delivery",
        localization:"São Paulo, Muretinha",
        price:325,
        path: "4-re.jpg"
      },
      {
        restaurantName: "Ponto do frango",
        localization:"Parana, Eulandia",
        price:112,
        path: "5-re.jpg"
      },
      {
        restaurantName: "Bona parte Com parte",
        localization:"São Paulo, Muretinha",
        price:874,
        path: "6-re.jpg"
      },
      {
        restaurantName: "Arroz queimado no ponto",
        localization:"São Paulo, Sorocaba",
        price:123,
        path: "7-re.jpg"
      },
      {
        restaurantName: "Caldeirão ardente",
        localization:"Amazonas, zé do panguão",
        price:12,
        path: "8-re.jpg"
      },
      {
        restaurantName: "Pão de ovo abençoado",
        localization:"Rio de Janeiro, Vila Bala",
        price:364,
        path: "9-re.jpg"
      },
      
    ],
  
    title:"Hello"

  },
  mutations: {
  },
  actions: {
  },
  getters: {
    bigTitle(state){
      return state.title.toUpperCase()
    }
  }
})
