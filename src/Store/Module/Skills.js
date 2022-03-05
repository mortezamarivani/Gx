import Vue from 'vue';
//yarn add @vuejs-pt/vue-alert

const state = {
  skills: [],
  skillsCount:0,
  AllskillsCount:0,
  CreatedNewSkillsResult: '',
  createdskillsstatus: 0
};


const getters = {
  Getskills(state) {
    return state.skills;
  },//Getskills

  GetskillsCount(state) {
    return state.skillsCount;
  },//GetSkillsCount

  GetAllskillsCount(state) {
    return state.AllskillsCount;
  },//GetSkillsCount


  GetCreatedNewSkillsResult(state) {
    return state.createdskillsstatus;
  },//

  GetSkillsWithId(state) {
    return state.skills;
  },
  GetSkillsByPageId(state) {
    console.log('GetSkillsByPageId');
    return state.skills;
  }

};//getters

const mutations = {
  Setskills(state, skills) {
    state.skills = skills;
  },//Setskills

  SetCreatedNewSkillsResult(state, response) {
    this.state.createdskillsstatus = response;
  },//
  SetSkillsWithId(state, Skills) {
    state.skills = Skills;
  },
  SetSkillsByPageId(state, Skills) {
    state.skills = Skills;
  },
  
  SetSkillsCount(state, Skills) {
    state.skillsCount = Skills;
  },

  SetAllSkillsCount(state, Skills) {
    state.AllskillsCount = Skills;
  },
};//mutations

const actions = {
  GetskillsFromService(context) {
    Vue.http.get("api/skills")
      .then(response => {
        return response.json();
      }).then(data => {
        context.commit("Setskills", data);
      });
  },//GetskillsFromService

  GetSkillsByPageIdFromService(context , pageinfo ) {
    Vue.http.get("api/Skills/GetSkillsByPageId/"+pageinfo)//20;2
      .then(response => {
        
        return response.json();
      }).then(data => {
        context.commit("SetSkillsByPageId", data);
      });
  },//GetSkillsByPageIdFromService

  GetSkillsCountFromService(context ) {
    Vue.http.get("api/Skills/SkillsCount")
      .then(response => {
        return response.body;
      }).then(data => {
        context.commit("SetSkillsCount", data);
      });
  },//GetSkillsCountFromService


  GetAllSkillsCountFromService(context ) {
    Vue.http.get("api/Skills/AllSkillsCount")
      .then(response => {
        return response.body;
      }).then(data => {
        context.commit("SetAllSkillsCount", data);
      });
  },//GetAllSkillsCountFromService



  GetSkillsWithIdFromService(context, Filter) {
    Vue.http.get("api/Skills/GetSkillsWithId/" + Filter.skillsId)
      .then(response => {
        console.log(response);
        return response.json();
      }).then(data => {
        context.commit("SetSkillsWithId", data);
      });//
    },

    CreateSkills(context, skillsData) {
      Vue.http.post('api/Skills/CreateSkills', skillsData)
        .then(response => {
          if (response.status == 201) {
            alert(" Save  : Successed ");
            context.commit("SetCreatedNewSkillsResult", response.status);
          }
        }, data => {
        });
    },//CreateSkills
    EditeSkills(context, skillsData) {
      Vue.http.put('api/Skills/EditSkills/'+skillsData.skillsID, skillsData )
        .then(response => {
          if (response.status == 200) {
            console.log(response);
            alert(" EditeSkills  : Successed ");
          }
        }, data => {
        });
    },//EditeSkills
    DeleteSkills(context, skillsData) {
      Vue.http.delete('api/Skills/Deleteskills/'+skillsData.skillsID, skillsData )
        .then(response => {
          if (response.status == 200) {
            console.log(response);
            alert(" DeleteSkills  : Successed ");
          }
        }, data => {
        });
    }//DeleteSkills



  };//actions

export default {
  state,
  getters,
  mutations,
  actions
};
