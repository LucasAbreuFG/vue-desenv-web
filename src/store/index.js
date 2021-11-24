import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards:["Restaurante de Shita", "Pão de ovo abençoado", "Caldeirão ardente", "Arroz queimado no ponto", "Bona parte Com parte","Ponto do frango", "Rapidão Delivery" , "Divino Pão", "Recanto do Grill"],
    localizacao: ["São Paulo, Muretinha", "São Paulo, Vila Nascimento", "São Paulo, Sorocaba", "Rio de Janeiro, Vila Bala", "Amazonas, zé do panguão", "Parana, Vila do Jão", "Curitiba, Ponte da vida", "Santos, Vila caida", "Parana, Eulandia"],
    price: [562, 421, 325, 112, 874, 123, 485, 12, 364],
    photoNames: ["1-re.jpg","2-re.jpg","3-re.jpg","4-re.jpg","5-re.jpg","6-re.jpg","7-re.jpg","8-re.jpg","9-re.jpg"],
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
