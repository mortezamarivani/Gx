import Vue from 'vue';
//yarn add @vuejs-pt/vue-alert

const state = {
  shopList: [],
  shopListCount:0,
  AllShopListCount:0,
  CreatedNewshopListResult: '',
  createdshopListstatus: 0,
};


const getters = {
   GetshopList(state) {
     return state.shopList;
   },//Getgallery

   GetAllShop(state) {
    return state.shopList;
  },//Getgallery


   GetshopListCount(state) {
     return state.shopListCount;
   },//GetgalleryCount

   GetAllshopListCount(state) {
     return state.AllShopListCount;
   },//GetgalleryCount

   GetCreatedNewshopListResult(state) {
     return state.createdshopListstatus;
   },//
   
  GetshopListWithId(state) {
    return state.shopList;
   },
  GetShopListByPageid(state) {
    return state.shopList;
  }

};//getters

const mutations = {
  SetshopList(state, shopList) {
    state.shopList = shopList;
  },//Setgallery

   SetCreatedNewshopListResult(state, response) {
     this.state.createdshopListstatus = response;
   },//

   SetshopListWithId(state, shopList) {
     state.shopList = shopList;
   },

  SetshopListByPageId(state, shopList) {
     state.shopList = shopList;
   },
  
   SetshopListCount(state, shopList) {
     state.shopListCount = shopList;
   },

   SetAllshopListCount(state, shopList) {
     state.AllShopListCount = shopList;
   },
};//mutations

const actions = {
   GetshopListFromService(context) {
     Vue.http.get("api/shopList/GetAllShopList")
       .then(response => {
         return response.json();
       }).then(data => {
         context.commit("SetshopList", data);
       });
   },//GetgalleryFromService

   GetAllShop(context) {
    Vue.http.get("api/shopList/GetAllShop")
      .then(response => {
        return response.json();
      }).then(data => {
        context.commit("SetshopList", data);
      });
  },//GetgalleryFromService


   GetShopListByPageIdFromService(context , pageinfo ) {
    Vue.http.get("api/ShopList/GetShopListByPageId/"+pageinfo)//20;2
      .then(response => {
        
        return response.json();
      }).then(data => {
        context.commit("SetshopListByPageId", data);
      });
  },//GetgalleryByPageIdFromService

   GetshopListCountFromService(context ) {
     Vue.http.get("api/shopList/shopListCount")
       .then(response => {
         return response.body;
       }).then(data => {
         context.commit("SetshopListCount", data);
       });
  },//GetgalleryCountFromService


  GetAllShopListCountFromService(context ) {
     Vue.http.get("api/ShopList/AllShopListCount")
       .then(response => {
         return response.body;
       }).then(data => {
         context.commit("SetAllshopListCount", data);
       });
   },//GetAllgalleryCountFromService


   GetshopListWithId(context, Filter) {
    Vue.http.get("api/ShopList/GetShopListWithId/" + Filter.fldShopListID)
      .then(response => {
        return response.json();
      }).then(data => {
        context.commit("SetshopListWithId", data);
      });//
    },

    EditeshopList(context, Filter) {
      Vue.http.put('api/ShopList/EditShopList/'+ Filter.fldShopListID ,Filter )
        .then(response => {
          if (response.status == 204) {
            alert(" EditShopList  : Successed ");
          }
        }, data => {
        });
    },//EditGallery

    DeleteshopList(context, Filter) {
      Vue.http.delete('api/ShopList/DeleteShopList/'+Filter.fldShopListID ,Filter )
        .then(response => {
          if (response.status == 200) {
            alert(" DeleteshopList  : Successed ");
          }
        }, data => {
        });
    }//Deletegallery


  /*   CreateShopList(context, formData ,config ) {
      Vue.http.post('api/ShopList/CreateShpoList', formData,config )
         .then(response => {
           if (response.status == 201) {
             alert(" Save  : Successed ");
             context.commit("SetCreatedNewshopListResult", response.status);
           }
         }, data => {
         });
     },//Creategallery

  


   
*/

  };//actions

export default {
  state,
  getters,
  mutations,
  actions
};
