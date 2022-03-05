import Vue from 'vue';
//yarn add @vuejs-pt/vue-alert

const state = {
  shopList:[],
  galleryCount:0,
  AllgalleryCount:0,
  CreatedNewgalleryResult: '',
  createdgallerystatus: 0,
};


const getters = {

  GetgalleryWithId(state) {
    return state.shopList;
  },
 GetAllShop(state) {
   return state.shopList;
 },
 GetshopListWithId(state) {
   return state.shopList;
 },

/*
 GetGalleryByPageid(state) {
  return state.gallery;
  
},
  GetImageAddress(state) {
    return state.ImageAddress;
  },

   Getgallery(state) {
     return state.gallery;
   },//Getgallery

   GetgalleryCount(state) {
     return state.galleryCount;
   },//GetgalleryCount

   GetAllgalleryCount(state) {
     return state.AllgalleryCount;
   },//GetgalleryCount


   GetCreatedNewgalleryResult(state) {
     return state.createdgallerystatus;
   },//

 
*/
};//getters

const mutations = {
  SetshopListWithId(state, shopList) {
    state.shopList = shopList;
  },
  SetAllShop(state, gallery) {
    state.shopList = gallery;
  },


/*
  Setgallery(state, gallery) {
    state.gallery = gallery;
  },//Setgallery

   SetCreatedNewgalleryResult(state, response) {
     this.state.createdgallerystatus = response;
   },//
   SetgalleryWithId(state, gallery) {
     state.gallery = gallery;
   },
  SetGalleryByPageId(state, gallery) {
     state.gallery = gallery;
   },
  
   SetgalleryCount(state, gallery) {
     state.galleryCount = gallery;
   },

   SetAllgalleryCount(state, gallery) {
     state.AllgalleryCount = gallery;
   },

*/
};//mutations

const actions = {

  GetshopListWithId(context, Filter) {
    console.log("GetshopListWithId ---" + Filter.fldShpoListID)
    Vue.http.get("api/ShopList/GetShopListWithId/" + Filter.fldShpoListID)
      .then(response => {
        return response.json();
      }).then(data => {
        context.commit("SetshopListWithId", data);
        console.log('------------------);' );
        console.log( data);
      });//
    },

    
    GetAllShop(context ) {
      Vue.http.get("api/ShopList/GetAllShop")
        .then(response => {
          return response.body;
        }).then(data => {
          context.commit("SetAllShop", data);
        });
    },//GetAllGallery

    CreateShopList(context, formData ,config ) {
      Vue.http.post('api/ShopList/CreateShpoList', formData,config )
         .then(response => {
           if (response.status == 201) {
             alert(" Save  : Successed ");
             context.commit("SetCreatedNewgalleryResult", response.status);
           }
         }, data => {
         });
     },//Creategallery
     DeleteshopList(context, galleryData) {
      Vue.http.delete('api/ShopList/DeleteShopList/'+galleryData.fldShpoListID, galleryData )
        .then(response => {
          if (response.status == 200) {
            console.log(response);
            alert(" Deletegallery  : Successed ");
          }
        }, data => {
        });
    },//Deletegallery

    EditeshopList(context, galleryData) {
      Vue.http.put('api/ShopList/EditShopList/'+ galleryData.fldShpoListID , galleryData )
        .then(response => {
          console.log(response);
          if (response.status == 204) {
            alert(" EditGallery  : Successed ");
          }
        }, data => {
        });
    },//EditGallery


//----------------------------------------------------------------------------
/*



   GetgalleryFromService(context) {
     Vue.http.get("api/gallery/GetAllGallery")
       .then(response => {
         return response.json();
       }).then(data => {
         context.commit("Setgallery", data);
       });
   },//GetgalleryFromService

  GetGalleryByPageIdFromService(context , pageinfo ) {
    Vue.http.get("api/gallery/GetGaleryByPageId/"+pageinfo)//20;2
      .then(response => {
        
        return response.json();
      }).then(data => {
        context.commit("SetGalleryByPageId", data);
      });
  },//GetgalleryByPageIdFromService

   GetgalleryCountFromService(context ) {
     Vue.http.get("api/gallery/galleryCount")
       .then(response => {
         return response.body;
       }).then(data => {
         context.commit("SetgalleryCount", data);
       });
  },//GetgalleryCountFromService


  GetAllGalleryCountFromService(context ) {
     Vue.http.get("api/gallery/AllgalleryCount")
       .then(response => {
         return response.body;
       }).then(data => {
         context.commit("SetAllgalleryCount", data);
       });
   },//GetAllgalleryCountFromService

   GetgalleryWithIdFromService(context, Filter) {
    Vue.http.get("api/gallery/GetgalleryWithId/" + Filter.galleryID)
      .then(response => {
        console.log(response);
        return response.json();
      }).then(data => {
        context.commit("SetgalleryWithId", data);
      });//
    },

 

     EditedPicture(context, formData ,config ) {
      Vue.http.put('api/gallery/editegallerywithimage', formData,config )
         .then(response => {
           if (response.status == 201) {
             alert(" Editegallery  : Successed ");
           }
         }, data => {
         });
     },//EditedPicture



    EditegalleryWithImage(formData ,config ) {
      console.log('formData' , formData);
      console.log('config' , config);

       Vue.http.put('api/gallery/EditGallery' , formData,config  )
         .then(response => {
           if (response.status == 200) {
             console.log(response);
             alert(" Editegallery  : Successed ");
           }
         }, data => {
         });
     },//Editegallery


*/

  };//actions

export default {
  state,
  getters,
  mutations,
  actions
};
