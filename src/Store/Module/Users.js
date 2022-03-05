import Vue from 'vue';
import {
  router
} from '../../main';

const state = {
  UserFullName: '',
  IsUserAuthenticated: false,
  token:''
};


const getters = {
  GetUserFullName(state) {
    return state.UserFullName;
  },
  IsUserAuthenticated(state) {
    return state.IsUserAuthenticated;
  }
};

const mutations = {
  SetCookie(token) {
    response.log('loginResult:'+token)
    //Vue.cookie.set(
    //  "Eshop_Auth_Token",
    //  loginResult.token,
    //  loginResult.expireTime
    //);
  },
  SetUserFullName(state, userFullName) {
    state.UserFullName = userFullName;
  },

  SetUserAuthenticated(state, isAuth) {
    state.IsUserAuthenticated = isAuth;
  },
  SetUserAuthenticated2( state,body) {
    state.token = body.token;
    //Vue.cookie.set(
    // "Eshop_Auth_Token2",
    // state.token,
    // body.expireTime
    //;

    console.log(state.token)
    },

  DeleteAuthCookie() {
    Vue.cookie.delete("Eshop_Auth_Token");
  }
};

const actions = {
  RegisterUser(context, registerData) {
     Vue.http.post('api/Account/RegisterForVue', registerData)
       .then(response => {
        console.log(response);
         if (response.body.Result == "true") {
          context.commit("SetAuthCookie", response.body);
          context.commit("SetUserFullName", response.body.UserName);
          context.commit("SetUserAuthenticated", true);
          alert("Register Successed");
          router.push('/');
        }
        if (response.body.Result == "false") {
          console.log(response.body.BadRequest);
        }
       }, data => {
       });
   },
  LoginUser(context, loginData) {
    Vue.http.post('api/Account/loginForVue', loginData).then(response => {
      if (response.body.Result == "false") {
        alert('Not Found');
      }

      if (response.body.Result == "true") {
    
        context.commit("SetUserFullName", response.body.UserName);
        context.commit("SetUserAuthenticated", true);
        context.commit("SetUserAuthenticated2", response.body);
        //context.commit("SetCookie", response.body.token);
        router.push('/');
      }

    });
  },

//   CheckForLogin(context) {
//     Vue.http.get('Account/CheckAuthentication').then(response => {
//       console.log(response);
//       if (response.status !== 401 && response.body.status) {
//         context.commit("SetUserFullName", response.body.user.name + " " + response.body.user.family);
//         context.commit("SetUserAuthenticated", true);
//       }
//     });
//   },

//   SignOutUser(context) {
//     Vue.http.get('Account/SignOut').then(response => {
//       console.log(response);
//       if (response.status !== 401 && response.body.status == "success") {
//         context.commit("SetUserFullName", '');
//         context.commit("SetUserAuthenticated", false);
//         context.commit("DeleteAuthCookie");
//         router.push('/Login');
//       }
//     });
//   }
};

export default {
  state,
  getters,
  mutations,
  actions
};
