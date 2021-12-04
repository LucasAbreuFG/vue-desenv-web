import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards:[
      {
        restaurantName: "Pizza de bode Amarelo",
        localization:"São Paulo, Muretinha",
        price:546,
        aboutCard:"Uma pizza grande de 9 pedaços composta do bode amarelo localizado no sul da Espanha, tem um gosto apimentado e doce.",
        path: "1-re.jpg",
        pathFood:"https://www.google.com/search?q=pizzas&oq=pizzas&aqs=chrome..69i57j46i433i512j46i131i199i291i433i512j0i131i433i512j0i433i512j69i61j69i60j69i61.798j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:9&tbm=lcl&sxsrf=AOaemvI2R7CbXsAdKjbjEOHQsPboenIC1A:1638130629734&rflfq=1&num=10&rldimm=16286118143340632024&lqi=CgZwaXp6YXNIv__e1-WAgIAIWgwQABgAIgZwaXp6YXOSARBwaXp6YV9yZXN0YXVyYW50qgEYCggvbS8wNjYzdhABKgoiBnBpenphcygM&phdesc=V__9siNBPwQ&ved=2ahUKEwjSg5-S8Lv0AhUIpZUCHcaKDjQQvS56BAgMEDE&rlst=f#rlfi=hd:;si:16286118143340632024,l,CgZwaXp6YXNIv__e1-WAgIAIWgwQABgAIgZwaXp6YXOSARBwaXp6YV9yZXN0YXVyYW50qgEYCggvbS8wNjYzdhABKgoiBnBpenphcygM,y,V__9siNBPwQ;mv:[[-23.4823043,-47.4594567],[-23.5224643,-47.498412699999996]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:9"
      },
      {
        restaurantName: "Pizza de bode com queijo",
        localization:"São Paulo, Vila Nascimento",
        price:412,
        aboutCard:"Uma pizza grande de 9 pedaços composta do bode de queijo localizado no sul do Japão causando um gosto doce.",
        path: "2-re.jpg",
        pathFood:"https://www.google.com/search?q=pizzas&oq=pizzas&aqs=chrome..69i57j46i433i512j46i131i199i291i433i512j0i131i433i512j0i433i512j69i61j69i60j69i61.798j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:9&tbm=lcl&sxsrf=AOaemvI2R7CbXsAdKjbjEOHQsPboenIC1A:1638130629734&rflfq=1&num=10&rldimm=16286118143340632024&lqi=CgZwaXp6YXNIv__e1-WAgIAIWgwQABgAIgZwaXp6YXOSARBwaXp6YV9yZXN0YXVyYW50qgEYCggvbS8wNjYzdhABKgoiBnBpenphcygM&phdesc=V__9siNBPwQ&ved=2ahUKEwjSg5-S8Lv0AhUIpZUCHcaKDjQQvS56BAgMEDE&rlst=f#rlfi=hd:;si:3334975639388922859,l,CgZwaXp6YXNIjv2T-uyzgIAIWgwQABgAIgZwaXp6YXOSARBwaXp6YV9yZXN0YXVyYW50qgEYCggvbS8wNjYzdhABKgoiBnBpenphcygM,y,1EWAqKFIifs;mv:[[-23.4823043,-47.4594567],[-23.5224643,-47.498412699999996]]"
      },
      {
        restaurantName: "Pão de queijo dourado",
        localization:"Curitiba, Ponte da vida",
        price:421,
        aboutCard:"Pacote de pão de queijo dourado, feito a risca com massa dourada produzida para ser salgada ao extremo.",
        path: "3-re.jpg",
        pathFood:"https://www.google.com/search?q=p%C3%A3o+de+queijo&tbm=lcl&sxsrf=AOaemvLlsrhdpDBMD15Y5U-bnPNkGCSWoA%3A1638130637147&ei=zeOjYba0CKXR1sQPgceTiAc&oq=p%C3%A3o+de+queijo&gs_l=psy-ab.3..0i512i433k1j0i512k1l9.74191.75578.0.75689.13.8.0.3.3.0.208.797.0j4j1.5.0....0...1c.1.64.psy-ab..6.7.596...35i39k1j0i67k1j0i512i433i131k1.0.TDuUMHJvXa4#rlfi=hd:;si:10361855132675298415,l,Cg5ww6NvIGRlIHF1ZWlqb1oQIg5ww6NvIGRlIHF1ZWlqb5IBDW1lYWxfZGVsaXZlcnmaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUjVkMHh4V2xkbkVBRaoBIQoJL20vMDk1dDdjEAEqEiIOcMOjbyBkZSBxdWVpam8oDA,y,A23vJ26tHYA;mv:[[-23.485974799999997,-47.436707899999995],[-23.547235399999998,-47.5009093]]"
      },
      {
        restaurantName: "File de peixe acima do ponto",
        localization:"São Paulo, Muretinha",
        price:325,
        aboutCard:"Prato de File de peixe acima do ponto, produzido especialmente para transmitir um gosto doce e apimentado, localizado ao sul do méxico.",
        path: "4-re.jpg",
        pathFood:"https://www.google.com/search?q=sushi&tbm=lcl&sxsrf=AOaemvKDcaMkl8b31UNPJ_-ksj7v7N8Xzg%3A1638130739799&ei=M-SjYfOMMMPJ1sQPytmO8AQ&oq=sushi&gs_l=psy-ab.3..35i39k1l3j0i512i433i131k1l2j0i512i433k1j0i512i433i131k1j0i433i131k1j0i512i433i131k1j0i512i433k1.11970.12413.0.12545.5.5.0.0.0.0.118.118.0j1.1.0....0...1c.1.64.psy-ab..4.1.118....0.ErrnK0V4otM#rlfi=hd:;si:13020338235149565435,l,CgVzdXNoaVoHIgVzdXNoaZIBDW1lYWxfZGVsaXZlcnmaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTk5hV0pNTFhkM1JSQUKqARcKCC9tLzA3MDMwEAEqCSIFc3VzaGkoDA,y,y-Xoz_H97TM;mv:[[-23.4779056,-47.4521144],[-23.5204523,-47.495480199999996]]"
      },
      {
        restaurantName: "Burrito mal passado",
        localization:"Parana, Eulandia",
        price:112,
        aboutCard:"Prato de Burrito mal passado, feito para transmitir ao usuário um gosto leve e apimentado, utilizando ingredientes de natureza italiana",
        path: "5-re.jpg",
        pathFood:"https://www.google.com/search?q=burrito&tbm=lcl&sxsrf=AOaemvLlFUWePDjSXALMqf1keNJzV_BVPg%3A1638130753745&ei=QeSjYYXpLJDW1sQP0Zq5uA4&oq=burrito&gs_l=psy-ab.3..0i433i67k1l2j0i67k1j0i512i433k1l3j0i512k1l4.14566.15274.0.15364.7.6.0.0.0.0.234.359.0j1j1.2.0....0...1c.1.64.psy-ab..5.2.359....0.OtyT6rK1-JY#rlfi=hd:;si:5879210715847204744,l,CgdidXJyaXRvWgkiB2J1cnJpdG-SARJtZXhpY2FuX3Jlc3RhdXJhbnSqARoKCS9tLzAxajN6chABKgsiB2J1cnJpdG8oDA,y,DPXItrK6occ;mv:[[-22.723015999999998,-46.2424232],[-23.656483200000004,-47.5844708]]"
      },
      {
        restaurantName: "Triplo hamburger de bacon",
        localization:"São Paulo, Muretinha",
        price:874,
        aboutCard:"Grande lanche produzido com um hamburger especial produzido inteiramente de bacon, prato de natureza Americana",
        path: "6-re.jpg",
        pathFood:"https://www.google.com/search?q=hamburger+bacon&tbm=lcl&sxsrf=AOaemvL115QxHacOWRPC1RXkLKVfr1WpTw%3A1638130770460&ei=UuSjYYXAG9bc1sQP0rac6Ak&oq=hamburger+bacon&gs_l=psy-ab.3..0i512k1j0i10k1l7j0i203k1l2.16146.18023.0.18144.15.10.0.1.1.0.184.891.0j6.6.0....0...1c.1.64.psy-ab..8.7.891...0i433i67k1j0i512i433k1j0i67k1j0i10i67k1j0i433i10k1j0i512i10k1.0.XlQyLk7680w#rlfi=hd:;si:5935162033605824550,l,Cg9oYW1idXJnZXIgYmFjb25IpKT44buugIAIWhUQABABIg9oYW1idXJnZXIgYmFjb26SAQpyZXN0YXVyYW50mgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU5ITFU5TVpHVm5FQUWqASUKCC9tLzBoMHhtCggvbS8wY2RuMRABKg0iCWhhbWJ1cmdlcigM,y,_gTcUqNgTqg;mv:[[-23.4171785,-47.430077],[-23.5497738,-47.5104036]]"
      },
      {
        restaurantName: "Triplo hamburger artesanal",
        localization:"São Paulo, Sorocaba",
        price:123,
        aboutCard:"Grande lanche produzido por um hamburger genérico Americano, utilizando carnes artesanais.",
        path: "7-re.jpg",
        pathFood:"https://www.google.com/search?q=hamburger+artesanal&tbm=lcl&sxsrf=AOaemvL8z3vXhOJMhI4dkSZfkHqNCp-0TA%3A1638130790111&ei=ZuSjYaKfBsvf1sQPyKugwAg&oq=hamburger+artesanal&gs_l=psy-ab.3..0i433i10k1j0i10k1l2j0i457i10k1j0i10k1l6.13412.15008.0.15110.9.8.0.0.0.0.179.737.0j5.5.0....0...1c.1.64.psy-ab..4.5.736...0i512i10k1j0i512k1j0i203k1.0.zn94Z2H4tx0#rlfi=hd:;si:2149821980138523392,l,ChRoYW1idXJndWVyIGFydGVzYW5hbFoWIhRoYW1idXJndWVyIGFydGVzYW5hbJIBFGhhbWJ1cmdlcl9yZXN0YXVyYW50mgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU5oT1ZsWVEwWm5FQUWqARwKCC9tLzBjZG4xEAEqDiIKaGFtYnVyZ3VlcigM,y,EODOTy4VpHs;mv:[[-23.4335064,-47.433160099999995],[-23.524149500000004,-47.5043133]]"
      },
      {
        restaurantName: "Pedaço de Bolo queimado",
        localization:"Amazonas, zé do panguão",
        price:12,
        aboutCard:"Pedaço de bolo queimado oferecido pelo seu gosto delicioso misturando a doçura do chocolate com o gosto de queimado da massa.",
        path: "8-re.jpg",
        pathFood:"https://www.google.com/search?q=bolo+chocolate&tbm=lcl&sxsrf=AOaemvIoXbfmp2PwJDGyErs-Ss09CM349Q%3A1638130806580&ei=duSjYfPeIrLV1sQP54uE0Aw&oq=bolo+chocolate&gs_l=psy-ab.3..0i512i433k1l3j0i512k1l2j0i512i433k1j0i512k1l4.11742.14906.0.14967.18.13.1.3.3.0.238.1267.0j7j1.8.0....0...1c.1.64.psy-ab..7.11.1156...0i67k1j0i433i67k1.0.1ZNLhbAgPjI#rlfi=hd:;si:6665509709877838411,l,Cg5ib2xvIGNob2NvbGF0ZVoQIg5ib2xvIGNob2NvbGF0ZZIBC2NhbmR5X3N0b3JlqgE1CgkvbS8wNzlkbDcKCC9tLzAyMHZsCggvbS8wZnN6dBABKhIiDmJvbG8gY2hvY29sYXRlKAw,y,TYW1v8MYHww;mv:[[-23.471476199999998,-47.4413428],[-23.5258985,-47.510674699999996]]"
      },
      {
        restaurantName: "Fritas de hamburger",
        localization:"Rio de Janeiro, Vila Bala",
        price:364,
        aboutCard:"Fritas produzidas junto do hamburger do lanche, deixando-as com gosto de carne, receita vinda diretamente da Coreia do sul.",
        path: "9-re.jpg",
        pathFood:"https://www.google.com/search?q=fritas&tbm=lcl&sxsrf=AOaemvJiaFwr1aWf_Lz4hC_7wNT1EpjgNQ%3A1638130822932&ei=huSjYYGZOI_T1sQP1LG_4AQ&oq=fritas&gs_l=psy-ab.3..0i433i131i67k1l2j0i512k1j0i433k1j0i512i433i131k1j0i512k1j0i433i131i67k1j0i67k1j0i512i433i131k1l2.15588.16592.0.16800.8.7.1.0.0.0.204.462.0j2j1.3.0....0...1c.1.64.psy-ab..4.4.464...35i39k1j0i433i131k1j0i433i67k1.0.Wow2UjcjBtY#rlfi=hd:;si:15032214912052600794,l,CgZmcml0YXNaCCIGZnJpdGFzkgEJc25hY2tfYmFyqgEYCggvbS8wMnk2bhABKgoiBmZyaXRhcygM,y,a-9CvdbdJ9s;mv:[[-23.3804239,-47.322821499999996],[-23.549909,-47.5122382]]"
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
    homeCards:[
      {
        nameCard: "Restaurantes",
        aboutCard:"Encontre os melhores restaurantes!",
        image: "https://i.pinimg.com/564x/12/ec/ba/12ecba06bd861a65ec22b195b7dacf1d.jpg",
        path:"/restaurants",
        imageColor: "background: #ed9e73"
      },
      {
        nameCard: "Comidas",
        aboutCard:"Encontre as melhores refeições!",
        image: "https://i.pinimg.com/736x/25/07/86/2507868480d45f8bfd756833cb264670.jpg",
        path:"/food",
        imageColor: "background: #ea1d2c"
      },
    ],
    homeCarousel:[],
    title:"Hello"

  },
  mutations: {
    SET_CAROUSEL(state, payload){
      state.homeCarousel = payload
    }
  },
  actions: {
    fetchCarousel({commit}){
      axios.get("https://foodbukka.herokuapp.com/api/v1/menu")
      .then(res=>{
        const payload = res.data
        console.log(payload + "aaaa")
        commit("SET_CAROUSEL", payload)
      })
      .catch(err=>{console.log(err)})
    }
  },
  getters: {
      searchCards: (state) => state.cards,
      searchRestaurant: (state) => state.restaurant,
      searchHomeCards: (state) => state.homeCards,
      searchCarousel: (state) => state.homeCarousel,
    }
})
