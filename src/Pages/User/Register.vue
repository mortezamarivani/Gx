<template>
  <div>
    <br />
    <md-card md-with-hover>
      <md-ripple>
        <div class="panel panel-default">
          <div class="panel-body" style="background-color:#f7f7f9">
            <div class="panel panel-warning">
              <!-- Default panel contents -->
              <div class="panel-heading">
                <h3>{{title }} {{ UserFullName}}</h3>
              </div>
              <div class="panel-body">
                <div class="signup-form" style="direction:ltr">
                  <!--sign up form-->
                  <form action="#">
                    <div class="col-md-10">
                      <md-field md-clearable class="mdfieldStyle">
                        <label>Email</label>
                        <md-input
                          type="email"
                          v-model="Email"
                          class="inputstyle"
                          @input="$v.Email.$touch()"
                          :class="{invalid:$v.Email.$error  }"
                        ></md-input>
                      </md-field>
                    </div>

                    <div class="col-md-8">
                      <p
                        class="text-danger"
                        v-if="!$v.Email.required && $v.Email.$dirty "
                        style="direction:ltr"
                      >Please Enter Email</p>
                      <p
                        class="text-danger"
                        v-if="!$v.Email.email && $v.Email.$dirty "
                        style="direction:ltr"
                      >Please Enter Correcct Email</p>

                      <p
                        class="text-danger"
                        v-if="!$v.Email.minLength"
                        style="direction:ltr"
                      >minLength charater : {{$v.Email.$params.minLength.min}}</p>
                      <p
                        class="text-danger"
                        v-if="!$v.Email.maxLength"
                        style="direction:ltr"
                      >maxLength charater : {{$v.Email.$params.maxLength.max}}</p>
                    </div>
                    <div class="col-md-2">
                      <p
                        class="text-info"
                        v-if="$v.Email.$dirty "
                        style="direction:rtl"
                      >{{Email.length}}/{{$v.Email.$params.maxLength.max}}</p>
                    </div>

                    <div class="col-md-10">
                      <md-field md-clearable class="mdfieldStyle">
                        <label>UserName</label>
                        <md-input
                          type="text"
                          v-model="UserName"
                          class="inputstyle"
                          @input="$v.UserName.$touch()"
                          :class="{invalid:$v.UserName.$error  }"
                        ></md-input>
                      </md-field>

                      <div class="col-md-8">
                        <p
                          class="text-danger"
                          v-if="!$v.UserName.required && $v.UserName.$dirty && !ClickedNew"
                        >Please Enter UserName</p>
                        <p
                          class="text-danger"
                          v-if="!$v.UserName.maxLength"
                        >maxLength charater : {{$v.UserName.$params.maxLength.max}}</p>
                        <p
                          class="text-danger"
                          v-if="!$v.UserName.minLength"
                        >minLength charater : {{$v.UserName.$params.minLength.min}}</p>
                      </div>
                      <div class="col-md-4">
                        <p
                          class="text-info"
                          v-if="$v.UserName.$dirty "
                          style="direction:rtl"
                        >{{UserName.length}}/{{$v.UserName.$params.maxLength.max}}</p>
                      </div>
                    </div>

                    <div class="col-md-10">
                      <md-field md-clearable class="mdfieldStyle">
                        <label>Password</label>
                        <md-input
                          type="password"
                          v-model="Password"
                          class="inputstyle"
                          @input="$v.Password.$touch()"
                          :class="{invalid:$v.Password.$error  }"
                        ></md-input>
                      </md-field>
                    </div>
                    <div class="col-md-8">
                      <p
                        class="text-danger"
                        v-if="!$v.Password.required && $v.Password.$dirty && !ClickedNew"
                      >Please Enter Password</p>
                      <p
                        class="text-danger"
                        v-if="!$v.Password.maxLength"
                      >maxLength charater : {{$v.Password.$params.maxLength.max}}</p>
                      <p
                        class="text-danger"
                        v-if="!$v.Password.minLength"
                      >minLength charater : {{$v.Password.$params.minLength.min}}</p>
                    </div>
                    <div class="col-md-2">
                      <p
                        class="text-info"
                        v-if="$v.Password.$dirty "
                        style="direction:rtl"
                      >{{Password.length}}/{{$v.Password.$params.maxLength.max}}</p>
                    </div>

                    <div class="col-md-10">
                      <md-field md-clearable class="mdfieldStyle">
                        <label>ConfirmPassword</label>
                        <md-input
                          type="password"
                          v-model="ConfirmPassword"
                          class="inputstyle"
                          @input="$v.ConfirmPassword.$touch()"
                          :class="{invalid:$v.ConfirmPassword.$error  }"
                        ></md-input>
                      </md-field>
                    </div>
                    <div class="col-md-8">
                      <p
                        class="text-danger"
                        v-if="!$v.ConfirmPassword.sameAs && $v.ConfirmPassword.$dirty"
                      >ConfirmPassword is not corrected</p>
                    </div>

                    <div class="col-md-10">
                      <md-field md-clearable class="mdfieldStyle">
                        <label>Phonenumber</label>
                        <md-input
                          type="text"
                          v-model="Phonenumber"
                          class="inputstyle"
                          v-mask="'+98(##) #### ####'"
                          @input="$v.Phonenumber.$touch()"
                          :class="{invalid:$v.Phonenumber.$error  }"
                        ></md-input>
                      </md-field>
                      <div class="col-md-8">
                        <p
                          class="text-danger"
                          v-if="!$v.Phonenumber.maxLength"
                        >maxLength charater : {{$v.Phonenumber.$params.maxLength.max}}</p>
                        <p
                          class="text-danger"
                          v-if="!$v.Phonenumber.minLength"
                        >minLength charater : {{$v.Phonenumber.$params.minLength.min}}</p>
                      </div>

                      <div class="col-md-4">
                        <p
                          class="text-info"
                          v-if="$v.Phonenumber.$dirty "
                          style="direction:rtl"
                        >{{Phonenumber.length}}/{{$v.Phonenumber.$params.maxLength.max}}</p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div class="panel-footer panel-warning">
                <div class="row">
                  <div class="col-md-12">
                    <a
                      @click.prevent="RegisterUser()"
                      class="btn btn-success"
                      :disabled="$v.$invalid"
                    >RegisterUser</a>

                    <a @click.prevent="NewUser()" to="/Register" class="btn btn-success">New</a>

                    <transition enter-active-class="animated fadeIn">
                      <div class="row alertSuccess" v-if="success">
                        <div class="col-md-2">
                         
                              <!--   <sweetalert-icon icon="success" /> -->
                        </div>
                        <div class="col-md-9">
                          <div>
                            <p class="alertdesc">{{alertMessage}}</p>
                          </div>
                        </div>
                        <div class="col-md-1 alertbtnmargin">
                          <div>
                            <a @click="success=!success" class="btn btn-outline-info">Close</a>
                          </div>
                        </div>
                      </div>

                      <div class="row alertWarning" v-if="warning">
                        <div class="col-md-2">
                  
                           <!--   <sweetalert-icon icon="warning" /> -->
                        </div>
                        <div class="col-md-8">
                          <div>
                            <p class="alertdesc">{{alertMessage}}</p>
                          </div>
                        </div>
                        <div class="col-md-2 alertbtnmargin">
                          <div>
                            <a @click="EditeSkills()" class="btn btn-outline-info">Ok</a>
                            <a @click="warning=!warning" class="btn btn-outline-info">Cancel</a>
                          </div>
                        </div>
                      </div>
                      <div class="row alertInfo" v-if="info" @click="info=!info">
                        <div class="col-md-2">
     
                           <!--   <sweetalert-icon icon="info" /> -->
                        </div>
                        <div class="col-md-10">
                          <div>
                            <p class="alertdesc">Info !</p>
                          </div>
                        </div>
                      </div>
                      <div class="row alertError" v-if="error">
                        <div class="col-md-2">
                         
                          <!--   <sweetalert-icon icon="error" /> -->
                        </div>
                        <div class="col-md-8">
                          <div>
                            <p class="alertdesc">{{alertMessage}}</p>
                          </div>
                        </div>
                        <div class="col-md-2 alertbtnmargin">
                          <div>
                            <a @click="DeleteSkills()" class="btn btn-outline-info">Ok</a>
                            <a @click="error=!error" class="btn btn-outline-info">Cancel</a>
                          </div>
                        </div>
                      </div>
                      <div class="row alertLoading" v-if="loading" @click="loading=!loading">
                        <div class="col-md-2">
                         <!--  <sweetalert-icon icon="loading" -->
                        </div>
                        <div class="col-md-10">
                          <div>
                            <p class="alertdesc">loading !</p>
                          </div>
                        </div>
                      </div>
                    </transition>

                    <!--</no-ssr>-->
                  </div>
                </div>
              </div>
            </div>

            <!-- <p style="display:none">: {{GetSkillsWithId.skillsID}}</p> -->
          </div>
        </div>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
//import SweetalertIcon from "vue-sweetalert-icons";

import {
  required,
  maxLength,
  email,
  minLength,
  sameAs
} from "vuelidate/lib/validators";
//import VueSlideBar from "vue-slide-bar";
import { TheMask } from "vue-the-mask";
import { mask } from "vue-the-mask";

export default {
  components: {
    //VueSlideBar,
    //SweetalertIcon,
    TheMask
  },
  directives: { mask },

  data() {
    return {
      Authenticated: false,
      UserFullName: "",
      alertMessage: "",
      success: false,
      warning: false,
      info: false,
      error: false,
      loading: false,
      title: "Create New User",
      userID: 0,
      Email: "",
      Password: "",
      ConfirmPassword: "",
      UserName: "",
      Phonenumber: "",
      dirty: false,
      ClickedNew: false
    };
  },

  methods: {
    resetAlert() {
      (this.alertMessage = ""),
        (this.success = false),
        (this.warning = false),
        (this.info = false),
        (this.error = false),
        (this.loading = false);
    },
    ChangeClickedNew(event) {
      this.ClickedNew = false;
    },
    RegisterUser() {
      const user = {
        userName: this.UserName,
        password: this.Password,
        email: this.Email,
        phonenumber: this.Phonenumber
      }; //const
      console.log(user);
      this.$store.dispatch("RegisterUser", user);
      console.log(
        "IsUserAuthenticated : " + this.$store.getters.IsUserAuthenticated
      );
      this.Authenticated = this.$store.getters.IsUserAuthenticated;
      this.UserFullName = this.$store.getters.GetUserFullName;
      if (this.UserFullName == "")
        this.UserFullName = "Welcome " + this.UserFullName;
      this.success = true;
      this.alertMessage = "ctreated user successed ";
    },

    NewUser() {
      this.ClickedNew = true;
      this.$v.$reset();
       this.Email = "";
       this.UserName = "";
       this.Password = "";
       this.ConfirmPassword = "";
       this.Phonenumber = "";
       this.title = "Create New User";
    
    }
  }, //methods

  validations: {
    Email: {
      email,
      required,
      maxLength: maxLength(50),
      minLength: minLength(5)
    },
    UserName: {
      maxLength: maxLength(50),
      minLength: minLength(5),
      required
    },
    Password: {
      required,
      maxLength: maxLength(50),
      minLength: minLength(5)
    },
    ConfirmPassword: {
      sameAs: sameAs("Password")
    },

    Phonenumber: {
      maxLength: maxLength(17),
      minLength: minLength(17)
    }
  } //validations
}; //default
</script>

<style>
.invalid {
  border: 1px solid red !important;
}

.vue-alert {
  margin-top: 10px;
}
</style>
