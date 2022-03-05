import Vue from 'vue';
//yarn add @vuejs-pt/vue-alert

const state = {
  reciveInfo: [],
  reciveInfoCount:0,
  AllreciveInfoCount:0,
  CreatedNewreciveInfoResult: '',
  createdreciveInfostatus: 0
};


const getters = {

   GetreciveInfo(state) {
     return state.reciveInfo;
   },//Getgallery

   GetreciveInfoCount(state) {
     return state.reciveInfoCount;
   },//GetgalleryCount

   GetAllreciveInfoCount(state) {
     console.log('44444444' + state.AllreciveInfoCount)
     return state.AllreciveInfoCount;
   },//GetgalleryCount


   GetCreatedNewreciveInfoResult(state) {
     return state.createdreciveInfostatus;
   },//

   GetreciveInfoWithId(state) {
     return state.reciveInfo;
   },
   GetReciveInfoByPageid(state) {
    console.log('33333333333333'+state.reciveInfo)

    return state.reciveInfo;
  }

};//getters

const mutations = {
  SetReciveInfo(state, reciveInfo) {
    state.reciveInfo = reciveInfo;
  },//Setgallery

   SetCreatedNewreciveInfoResult(state, response) {
     this.state.createdreciveInfostatus = response;
   },//
   SetreciveInfoWithId(state, reciveInfo) {
     state.reciveInfo = reciveInfo;
   },
  SetreciveInfoByPageId(state, reciveInfo) {
     state.reciveInfo = reciveInfo;
   },
  
   SetreciveInfoCount(state, reciveInfo) {
     state.reciveInfoCount = reciveInfo;
   },

   SetAllreciveInfoCount(state, reciveInfo) {

     state.AllreciveInfoCount = reciveInfo;
     console.log('GetAllreciveInfoCountFromService3:  ' + state.AllreciveInfoCount)

   },
};//mutations

const actions = {
   GetreciveInfoFromService(context) {
     Vue.http.get("api/ReciveInfo/GetAllReciveInfo")
       .then(response => {
         return response.json();
       }).then(data => {
         context.commit("SetReciveInfo", data);
       });
   },//GetgalleryFromService

   GetReciveInfoByPageIdFromService(context , pageinfo ) {
    Vue.http.get("api/ReciveInfo/GetReciveInfoByPageId/"+pageinfo)//20;2
      .then(response => {
        
        return response.json();
      }).then(data => {
        context.commit("SetreciveInfoByPageId", data);
      });
  },//GetgalleryByPageIdFromService

   GetreciveInfoCountFromService(context ) {
     Vue.http.get("api/ReciveInfo/ReciveInfoCount")
       .then(response => {
         return response.body;
       }).then(data => {
         context.commit("SetreciveInfoCount", data);
       });
  },//GetgalleryCountFromService


  GetAllreciveInfoCountFromService(context ) {
    console.log('GetAllreciveInfoCountFromService')
     Vue.http.get("api/ReciveInfo/AllReciveInfoCount")
       .then(response => {
        console.log('GetAllreciveInfoCountFromService0:  ' + response.body)

         return response.body;
       }).then(data => {
         console.log('GetAllreciveInfoCountFromService2:  ' + data)
         context.commit("SetAllreciveInfoCount", data);
       });
   },//GetAllgalleryCountFromService



   GetReciveInfoWithIdFromService(context, Filter) {
    Vue.http.get("api/ReciveInfo/GetReciveInfoWithId/" + Filter.reciveInfoID)
      .then(response => {
        console.log(response);
        return response.json();
      }).then(data => {
        context.commit("SetreciveInfoWithId", data);
      });//
    },

     CreatereciveInfo(context, formData ,config ) {
      Vue.http.post('api/reciveInfo/CreateReciveInfo', formData,config )
         .then(response => {
           if (response.status == 201) {
             alert(" Save  : Successed ");
             context.commit("SetCreatedNewreciveInfoResult", response.status);
           }
         }, data => {
         });
     },//Creategallery
     EditereciveInfo(context, reciveInfoData) {
      Vue.http.put('api/reciveInfo/EditReciveInfo/'+reciveInfoData.reciveInfoID, reciveInfoData )
        .then(response => {
          if (response.status == 200) {
            console.log(response);
            alert(" EditereciveInfo  : Successed ");
          }
        }, data => {
        });
    },//EditereciveInfo


     DeletereciveInfo(context, reciveInfoData) {
       Vue.http.delete('api/reciveInfo/DeletereciveInfo/'+reciveInfoData.reciveInfoID )
         .then(response => {
           if (response.status == 200) {
             console.log(response);
             alert(" DeletereciveInfo  : Successed ");
           }
         }, data => {
         });
     }//Deletegallery



  };//actions

export default {
  state,
  getters,
  mutations,
  actions
};
