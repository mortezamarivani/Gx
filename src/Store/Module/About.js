import Vue from 'vue';
//yarn add @vuejs-pt/vue-alert

const state = {
  about: [],
  aboutCount:0,
  AllaboutCount:0,
  CreatedNewaboutResult: '',
  createdaboutstatus: 0
};


const getters = {

   Getabout(state) {
     return state.about;
   },//Getabout

   GetaboutCount(state) {
     return state.aboutCount;
   },//GetaboutCount

   GetAllaboutCount(state) {
     return state.AllaboutCount;
   },//GetaboutCount


   GetCreatedNewaboutResult(state) {
     return state.createdaboutstatus;
   },//

   GetaboutWithId(state) {
     return state.about;
   },
  GetAboutByPageid(state) {
    return state.about;
  }

};//getters

const mutations = {
  Setabout(state, about) {
    state.about = about;
  },//Setabout

   SetCreatedNewaboutResult(state, response) {
     this.state.createdaboutstatus = response;
   },//
   SetaboutWithId(state, about) {
     state.about = about;
   },
  SetAboutByPageId(state, about) {
     state.about = about;
   },
  
   SetaboutCount(state, about) {
     state.aboutCount = about;
   },

   SetAllaboutCount(state, about) {
     state.AllaboutCount = about;

   },
};//mutations

const actions = {
   GetaboutFromService(context) {
     Vue.http.get("api/about/GetAllAbout")
       .then(response => {
         return response.json();
       }).then(data => {
         context.commit("Setabout", data);
       });
   },//GetaboutFromService

  GetAboutByPageIdFromService(context , pageinfo ) {
    Vue.http.get("api/about/GetAboutByPageId/"+pageinfo)//20;2
      .then(response => {
        
        return response.json();
      }).then(data => {
        context.commit("SetAboutByPageId", data);
      });
  },//GetaboutByPageIdFromService

   GetaboutCountFromService(context ) {
     Vue.http.get("api/about/aboutCount")
       .then(response => {
         return response.body;
       }).then(data => {
         context.commit("SetaboutCount", data);
       });
  },//GetaboutCountFromService


  GetAllAboutCountFromService(context ) {
     Vue.http.get("api/about/AllaboutCount")
       .then(response => {
         return response.body;
       }).then(data => {
         context.commit("SetAllaboutCount", data);
       });
   },//GetAllaboutCountFromService



   GetaboutWithIdFromService(context, Filter) {
     
    Vue.http.get("api/about/GetaboutWithId/" + Filter.aboutID)
      .then(response => {
        console.log('--------------------------------0-'+response);
        return response.json();
      }).then(data => {
        context.commit("SetaboutWithId", data);
      });//
    },

     Createabout(context, formData ,config ) {
      Vue.http.post('api/about/CreateAbout', formData,config )
         .then(response => {
           if (response.status == 201) {
             alert(" Save  : Successed ");
             context.commit("SetCreatedNewaboutResult", response.status);
           }
         }, data => {
         });
     },//Createabout
     Editeabout(formData ,about ) {
       Vue.http.put('api/about/EditAbout/'+about.aboutID ,about  )
         .then(response => {
           if (response.status == 200) {
             console.log(response);
             alert(" Editeabout  : Successed ");
           }
         }, data => {
         });
     },//Editeabout
     Deleteabout(context, aboutData) {
       console.log('aboutData.aboutID' + aboutData);
       Vue.http.delete('api/about/Deleteabout/'+aboutData.aboutID, aboutData )
         .then(response => {
           if (response.status == 200) {
             console.log(response);
             alert(" Deleteabout  : Successed ");
           }
         }, data => {
         });
     }//Deleteabout



  };//actions

export default {
  state,
  getters,
  mutations,
  actions
};
