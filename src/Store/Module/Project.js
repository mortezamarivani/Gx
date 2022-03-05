import Vue from 'vue';
//yarn add @vuejs-pt/vue-alert

const state = {
  project: [],
  projectCount:0,
  AllprojectCount:0,
  CreatedNewprojectResult: '',
  createdprojectstatus: 0,
};


const getters = {
   Getproject(state) {
     return state.project;
   },//Getgallery

   GetprojectCount(state) {
     return state.projectCount;
   },//GetgalleryCount

   GetAllprojectCount(state) {
     return state.AllprojectCount;
   },//GetgalleryCount

   GetCreatedNewprojectResult(state) {
     return state.createdprojectstatus;
   },//

   GetprojectWithId(state) {
     return state.project;
   },
  GetProjectByPageid(state) {
    return state.project;
  }

};//getters

const mutations = {
  Setproject(state, project) {
    state.project = project;
  },//Setgallery

   SetCreatedNewprojectResult(state, response) {
     this.state.createdprojectstatus = response;
   },//

   SetprojectWithId(state, project) {
     state.project = project;
   },

  SetprojectByPageId(state, project) {
     state.project = project;
   },
  
   SetprojectCount(state, project) {
     state.projectCount = project;
   },

   SetAllprojectCount(state, project) {
     state.AllprojectCount = project;
   },
};//mutations

const actions = {
   GetprojectFromService(context) {
     Vue.http.get("api/project/GetAllProject")
       .then(response => {
         return response.json();
       }).then(data => {
         context.commit("Setproject", data);
       });
   },//GetgalleryFromService

   GetProjectByPageIdFromService(context , pageinfo ) {
    Vue.http.get("api/project/GetProjectByPageId/"+pageinfo)//20;2
      .then(response => {
        
        return response.json();
      }).then(data => {
        context.commit("SetprojectByPageId", data);
      });
  },//GetgalleryByPageIdFromService

   GetprojectCountFromService(context ) {
     Vue.http.get("api/project/projectCount")
       .then(response => {
         return response.body;
       }).then(data => {
         context.commit("SetprojectCount", data);
       });
  },//GetgalleryCountFromService


  GetAllProjectCountFromService(context ) {
     Vue.http.get("api/project/AllprojectCount")
       .then(response => {
         return response.body;
       }).then(data => {
         context.commit("SetAllprojectCount", data);
       });
   },//GetAllgalleryCountFromService


   GetprojectWithIdFromService(context, Filter) {
    Vue.http.get("api/project/GetprojectWithId/" + Filter.projectID)
      .then(response => {
        return response.json();
      }).then(data => {
        context.commit("SetprojectWithId", data);
      });//
    },

    EditedPicture(context, formData ,config ) {
      Vue.http.put('api/project/editeprojectwithimage', formData,config )
         .then(response => {
           if (response.status == 201) {
             alert(" Editegallery  : Successed ");
           }
         }, data => {
         });
     },//EditedPicture

   Createproject(context, formData ,config ) {
      Vue.http.post('api/project/CreateProjectWithimage', formData,config )
         .then(response => {
           if (response.status == 201) {
             alert(" Save  : Successed ");
             context.commit("SetCreatedNewprojectResult", response.status);
           }
         }, data => {
         });
     },//Creategallery

     Editeproject(context, projectData) {
      Vue.http.put('api/project/EditProject/'+ projectData.projectID , projectData )
        .then(response => {
          if (response.status == 204) {
            alert(" EditProject  : Successed ");
          }
        }, data => {
        });
    },//EditGallery


   Deleteproject(context, projectData) {
       Vue.http.delete('api/project/Deleteproject/'+projectData.projectID, projectData )
         .then(response => {
           if (response.status == 200) {
             alert(" Deleteproject  : Successed ");
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
