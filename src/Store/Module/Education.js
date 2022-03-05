import Vue from 'vue';
//yarn add @vuejs-pt/vue-alert

const state = {
  education: [],
  educationCount:0,
  AlleducationCount:0,
  CreatedNeweducationResult: '',
  creatededucationstatus: 0,
};


const getters = {
   Geteducation(state) {
     return state.education;
   },//Getgallery

   GeteducationCount(state) {
     return state.educationCount;
   },//GetgalleryCount

   GetAlleducationCount(state) {
     return state.AlleducationCount;
   },//GetgalleryCount

   GetCreatedNeweducationResult(state) {
     return state.creatededucationstatus;
   },//

   GeteducationWithId(state) {
     return state.education;
   },
  GetEducationByPageid(state) {
    return state.education;
  }

};//getters

const mutations = {
  Seteducation(state, education) {
    state.education = education;
  },//Setgallery

   SetCreatedNeweducationResult(state, response) {
     this.state.creatededucationstatus = response;
   },//

   SeteducationWithId(state, education) {
     state.education = education;
   },

  SeteducationByPageId(state, education) {
     state.education = education;
   },
  
   SeteducationCount(state, education) {
     state.educationCount = education;
   },

   SetAlleducationCount(state, education) {
     state.AlleducationCount = education;
   },
};//mutations

const actions = {
   GeteducationFromService(context) {
     Vue.http.get("api/education/GetAllEducation")
       .then(response => {
         return response.json();
       }).then(data => {
         context.commit("Seteducation", data);
       });
   },//GetgalleryFromService

   GetEducationByPageIdFromService(context , pageinfo ) {
    Vue.http.get("api/education/GetEducationByPageId/"+pageinfo)//20;2
      .then(response => {
        
        return response.json();
      }).then(data => {
        context.commit("SeteducationByPageId", data);
      });
  },//GetgalleryByPageIdFromService

   GeteducationCountFromService(context ) {
     Vue.http.get("api/education/educationCount")
       .then(response => {
         return response.body;
       }).then(data => {
         context.commit("SeteducationCount", data);
       });
  },//GetgalleryCountFromService


  GetAllEducationCountFromService(context ) {
     Vue.http.get("api/education/AlleducationCount")
       .then(response => {
         return response.body;
       }).then(data => {
         context.commit("SetAlleducationCount", data);
       });
   },//GetAllgalleryCountFromService


   GeteducationWithIdFromService(context, Filter) {
    Vue.http.get("api/education/GeteducationWithId/" + Filter.rankID)
      .then(response => {
        return response.json();
      }).then(data => {
        context.commit("SeteducationWithId", data);
      });//
    },

    EditedPicture(context, formData ,config ) {
      Vue.http.put('api/education/editeeducationwithimage', formData,config )
         .then(response => {
           if (response.status == 201) {
             alert(" Editegallery  : Successed ");
           }
         }, data => {
         });
     },//EditedPicture

   Createeducation(context, formData ,config ) {
      Vue.http.post('api/education/CreateEducationWithimage', formData,config )
         .then(response => {
           if (response.status == 201) {
             alert(" Save  : Successed ");
             context.commit("SetCreatedNeweducationResult", response.status);
           }
         }, data => {
         });
     },//Creategallery

     Editeeducation(context, educationData) {
      Vue.http.put('api/education/Editeducation/'+ educationData.rankID , educationData )
        .then(response => {
          if (response.status == 204) {
            alert(" EditEducation  : Successed ");
          }
        }, data => {
        });
    },//EditGallery


   Deleteeducation(context, educationData) {
       Vue.http.delete('api/education/Deleteeducation/'+educationData.rankID, educationData )
         .then(response => {
           if (response.status == 200) {
             alert(" Deleteeducation  : Successed ");
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
