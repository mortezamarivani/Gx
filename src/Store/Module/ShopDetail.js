import Vue from 'vue';
//yarn add @vuejs-pt/vue-alert

const state = {
  shopDetail: [],
  siteList: [],
  shopDetailCount:0,
  AllShopDetailCount:0,
  CreatedNewshopDetailResult: '',
  createdshopDetailstatus: 0,
};


const getters = {

  GetShopDetailByShopListId(state){
    return state.shopDetail;
  },

  GetShopDetailWithId(state) {
    return state.shopDetail;
  },
  GetAllSiteList(state) {
    return state.siteList;
  },

  //----------------------------------------------------------------
  /*
   GetshopDetail(state) {
     return state.shopDetail;
   },//Getgallery

   GetshopDetailCount(state) {
     return state.shopDetailCount;
   },//GetgalleryCount

   GetAllshopDetailCount(state) {
     return state.AllShopDetailCount;
   },//GetgalleryCount

   GetCreatedNewshopDetailResult(state) {
     return state.createdshopDetailstatus;
   },//
   
 
  GetShopDetailByPageid(state) {
    return state.shopDetail;
  }
  */

};//getters

const mutations = {
  SetShopDetailByShopListId(state,shopDetail) {
    state.shopDetail = shopDetail;
  },

  SetShopDetailWithId(state, shopDetail) {
    state.shopDetail = shopDetail;
  },
  SetAllSiteList(state, _siteList) {
    state.siteList = _siteList;
  }


  //-----------------------------------------------------------
  /*
  SetshopDetail(state, shopDetail) {
    state.shopDetail = shopDetail;
  },//Setgallery

   SetCreatedNewshopDetailResult(state, response) {
     this.state.createdshopDetailstatus = response;
   },//

  

  SetshopDetailByPageId(state, shopDetail) {
     state.shopDetail = shopDetail;
   },
  
   SetshopDetailCount(state, shopDetail) {
     state.shopDetailCount = shopDetail;
   },

   SetAllshopDetailCount(state, shopDetail) {
     state.AllShopDetailCount = shopDetail;
   },
   */
};//mutations

const actions = {
  GetShopDetailWithId(context, Filter) {
    Vue.http.get("api/ShopDetail/GetShopDetailWithId/" + Filter.fldShopDetailID)
      .then(response => {
        return response.json();
      }).then(data => {
        context.commit("SetShopDetailWithId", data);
      });//
    },


  GetShopDetailByShopListId(context, shopListId){
    Vue.http.get("api/ShopDetail/GetShopDetailByShopListId/" +shopListId )
    .then(response => {
      return response.json();
    }).then(data => {
      context.commit("SetShopDetailByShopListId" , data);
    });
  },

  GetShopDetailByPageIdFromService(context , pageinfo ) {
    Vue.http.get("api/ShopDetail/GetShopDetailByPageId/"+pageinfo)//20;2
      .then(response => {
        return response.json();
      }).then(data => {
        context.commit("SetshopDetailByPageId", data);
      });
  },//GetgalleryByPageIdFromService



  CreateShopDetail(context, formData ,config ) {
    console.log(formData)
    Vue.http.post('api/ShopDetail/CreateShpoDetail', formData,config )
       .then(response => {
         if (response.status == 201) {
           alert(" Save  : Successed ");
           //context.commit("SetCreatedNewshopDetailResult", response.status);
         }
       }, data => {
       });
   },//Creategallery

   EditShopDetail(context, Filter) {
     console.log(Filter)
    Vue.http.put('api/ShopDetail/EditShopDetail/'+ Filter.fldShopDetailID ,Filter )
      .then(response => {
        if (response.status == 204) {
          alert(" EditShopDetail : Successed ");
        }
      }, data => {
      });
  },//EditGallery


  DeleteShopDetail(context, Filter) {
     Vue.http.delete('api/ShopDetail/DeleteShopDetail/'+Filter.fldShopDetailID ,Filter )
       .then(response => {
         if (response.status == 200) {
           alert(" DeleteShopDetail  : Successed ");
         }
       }, data => {
       });
   },//Deletegallery


   EditShopDetailForGetPrice(context, Filter) {
    Vue.http.put('api/ShopDetail/EditShopDetailForGetPrice' ,Filter )
      .then(response => {
        if (response.status == 204) {
          alert(" EditShopDetailForGetPrice : Successed ");
        }
      }, data => {
      });
  },//

  GetAllSiteList(context) {
    Vue.http.get('api/SiteList/GetAllSiteList').then(response =>{
      if(response.status == 200) {
        return response.json();
      }}).then(data =>{
        context.commit("SetAllSiteList", data);
      });
  },//GetSiteList


  GetShopDetailByPageIdFromService(context , pageinfo ) {
    Vue.http.get("api/ShopDetail/GetShopDetailByPageId/"+pageinfo)//20;2
      .then(response => {
        return response.json();
      }).then(data => {
        context.commit("SetshopDetailByPageId", data);
      });
  },//GetgalleryByPageIdFromService



  //-------------------------------------------------------------------------
  /*
   GetshopDetailFromService(context) {
     Vue.http.get("api/shopDetail/GetAllShopDetail")
       .then(response => {
         return response.json();
       }).then(data => {
         context.commit("SetshopDetail", data);
       });
   },//GetgalleryFromService



   GetshopDetailCountFromService(context ) {
     Vue.http.get("api/shopDetail/shopDetailCount")
       .then(response => {
         return response.body;
       }).then(data => {
         context.commit("SetshopDetailCount", data);
       });
  },//GetgalleryCountFromService


  GetAllShopDetailCountFromService(context ) {
     Vue.http.get("api/ShopDetail/AllShopDetailCount")
       .then(response => {
         return response.body;
       }).then(data => {
         context.commit("SetAllshopDetailCount", data);
       });
   },//GetAllgalleryCountFromService


 
    */



  };//actions

export default {
  state,
  getters,
  mutations,
  actions
};
