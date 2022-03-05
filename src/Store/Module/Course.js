import Vue from 'vue';
//yarn add @vuejs-pt/vue-alert

const state = {
  course: [],
  courseCount:0,
  AllcourseCount:0,
  CreatedNewcourseResult: '',
  createdcoursestatus: 0,
  DocAddress: "https://localhost:44325/api/Course/Doc/",
};


const getters = {
  GetDocAddress(state) {
    return state.DocAddress;
  },

   Getcourse(state) {
     return state.course;
   },//Getgallery

   GetcourseCount(state) {
     return state.courseCount;
   },//GetgalleryCount

   GetAllcourseCount(state) {
     return state.AllcourseCount;
   },//GetgalleryCount

   GetCreatedNewcourseResult(state) {
     return state.createdcoursestatus;
   },//

   GetcourseWithId(state) {
     console.log('GetcourseWithId111111111111111111111111111111');
     console.log(state.course);
     return state.course;
   },
  GetCourseByPageid(state) {
    return state.course;
  }

};//getters

const mutations = {
  Setcourse(state, course) {
    state.course = course;
  },//Setgallery

   SetCreatedNewcourseResult(state, response) {
     this.state.createdcoursestatus = response;
   },//

   SetcourseWithId(state, course) {
     state.course = course;
   },

  SetcourseByPageId(state, course) {
     state.course = course;
   },
  
   SetcourseCount(state, course) {
     state.courseCount = course;
   },

   SetAllcourseCount(state, course) {
     state.AllcourseCount = course;

   },
};//mutations

const actions = {
   GetcourseFromService(context) {
     Vue.http.get("api/course/GetAllCourse")
       .then(response => {
         return response.json();
       }).then(data => {
         context.commit("Setcourse", data);
       });
   },//GetgalleryFromService

   GetCourseByPageIdFromService(context , pageinfo ) {
     console.log("---------------GetCourseByPageIdFromService-----------------22--------");
    Vue.http.get("api/course/GetCourseByPageId/"+pageinfo)//20;2
      .then(response => {
        
        return response.json();
      }).then(data => {
        context.commit("SetcourseByPageId", data);
      });
  },//GetgalleryByPageIdFromService

   GetcourseCountFromService(context ) {
     Vue.http.get("api/course/courseCount")
       .then(response => {
         return response.body;
       }).then(data => {
         context.commit("SetcourseCount", data);
       });
  },//GetgalleryCountFromService


  GetAllCourseCountFromService(context ) {
     Vue.http.get("api/course/AllcourseCount")
       .then(response => {
         return response.body;
       }).then(data => {
         context.commit("SetAllcourseCount", data);
       });
   },//GetAllgalleryCountFromService


   GetcourseWithIdFromService(context, Filter) {
    Vue.http.get("api/course/GetcourseWithId/" + Filter.courseID)
      .then(response => {
        return response.json();
      }).then(data => {
        context.commit("SetcourseWithId", data);
      });//
    },

    EditedPicture(context, formData ,config ) {
      Vue.http.put('api/course/editecoursewithimage', formData,config )
         .then(response => {
           if (response.status == 201) {
             alert(" Editegallery  : Successed ");
           }
         }, data => {
         });
     },//EditedPicture

   Createcourse(context, formData ,config ) {
      Vue.http.post('api/course/CreateCourseWithimage', formData,config )
         .then(response => {
           if (response.status == 201) {
             alert(" Save  : Successed ");
             context.commit("SetCreatedNewcourseResult", response.status);
           }
         }, data => {
         });
     },//Creategallery

     Editecourse(context, courseData) {
      Vue.http.put('api/course/EditCourse/'+ courseData.courseID , courseData )
        .then(response => {
          console.log(response);
          if (response.status == 204) {
            alert(" EditCourse  : Successed ");
          }
        }, data => {
        });
    },//EditGallery


   Deletecourse(context, courseData) {
       console.log('courseData.courseID' + courseData);
       Vue.http.delete('api/course/Deletecourse/'+courseData.courseID, courseData )
         .then(response => {
           if (response.status == 200) {
             console.log(response);
             alert(" Deletecourse  : Successed ");
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
