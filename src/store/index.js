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
    restaurant:[
      {
        restaurantName: "Restaurante de Shita",
        distance:"1,000 metros quadrados",
        about: "Um restaurante bastante acolhedor, com um ambiente envolvente e um atendimento fantástico. No entanto, a comida foi o que deixou fascinada. Um sítio a voltar certamente. Os meus parabéns.P.S.- Como petisco o bacalhau negro e sobremesa o cheesecake de manteiga de amendoim.",
        path: "//cdn.archilovers.com/projects/b_730_607fe600-1ec3-4055-b64b-0996c408b488.jpg"
      },
      {
        restaurantName: "Lugar bom de fritar",
        distance:"356 metros quadrados",
        about: "Pediu-se tártaro de atum, pica pau do mar, magret de pato e rabo de boi. E gente..... Tudo o que foi pedido estava maravilhoso, não consigo salientar um porque eram todos fantásticos, é giro pedir e partilhar cada um, as doses são pequenas, dá para partilhar cada uma por dois, para provar!",
        path: "//cdn.archilovers.com/projects/b_730_493da6ba-99aa-4a7f-bc4d-d562fb12bc21.jpg"
      },
      {
        restaurantName: "Fritas frescas",
        distance:"2,632 metros quadrados",
        about: "Muito bom! Todos os pratos que provamos foram óptimos, equilibrados e saborosos. O atendimento foi excelente, muito atenciosos e com boas sugestões.O espaço é lindíssimo, algo a que o Grupo do Avesso já nos habituou.A repetir de certeza.",
        path: "//cdn.archilovers.com/projects/b_730_2d255ca6-f775-436e-a230-0f146a674ab7.jpg"
      },
      {
        restaurantName: "Assados e fritados",
        distance:"634 metros quadrados",
        about: "Espaço moderno, simples e de qualidade garantida do atendimento à cozinha. A comida é muito saborosa, desde do pão com manteiga à sobremesa de assinatura. Vale a pena, mas importa lembrar que qualidade paga-se.",
        path: "//cdn.archilovers.com/projects/b_730_03b6aa0a-7bd5-414a-aea8-61d850ec4673.jpg"
      },
      {
        restaurantName: "Doce bem visto",
        distance:"248 metros quadrados",
        about: "O espaço é muito bonito, ambiente organizado. Atendimento é excelente desde a recepção na porta aos garçons todos muito educados e solicitos. O mignon no presunto cru e risoto estava super saborosos assim como a entrada. Não é barato, mas com certeza vale a pena.",
        path: "//www.cementtileshop.com/blog/wp-content/uploads/2014/12/Brennans-1.jpg"
      },
      {
        restaurantName: "Lendarios Havaianos",
        distance:"6,485 metros quadrados",
        about: "Não é para qualquer um ser o melhor restaurante da cidade.  Pois é merecido. Tudo contribui. O ambiente refinado , o serviço atencioso, a amabilidade e competencia da equipe, e claro, a comida diferenciada. Os  pratos da culinária italiana sao esmerados e o chef tem o bom sendo de nao salgar ou apimentar demais para  preservar o sabor. Uma experiência  que pretendemos repetir em breve.",
        path: "//cdn.archilovers.com/projects/b_730_99278a08-6837-4db7-88ab-2b26ebc43aa1.jpg"
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
