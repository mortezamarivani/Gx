<template>
  <div >
    <br />
  <md-card md-with-hover>
      <md-ripple>

    <div class="panel panel-default">
      <div class="panel-body" style="background-color:#f7f7f9">
        <div class="signup-form" style="direction:ltr">
          <!--sign up form-->

<div class="panelLogin">
<div class="panel panel-warning ">
  <!-- Default panel contents -->
  <div class="panel-heading " ><h3 >SIGN IN</h3></div>
  <div class="panel-body">
              <form action="#">
               <div class="col-md-12">
                <md-field md-clearable >
                      <label>Please Enter Email</label>
                      <md-input type="email" v-model="Email" class="inputstyle"
                          @input="$v.Email.$touch()"
                          :class="{invalid:$v.Email.$error  }"
                      ></md-input>
                     <span class="md-error" v-if="!$v.Email.required && $v.Email.$dirty">Please Enter Email</span>
                     <span class="md-error" v-if="!$v.Email.minLength">minLength charater : {{$v.Email.$params.minLength.min}}</span>
                 </md-field>
               </div>

              <div class="col-md-12">
                <md-field md-clearable >
                            <label>Please Enter Password</label>
                            <md-input type="password" v-model="Password" class="inputstyle"
                                      @input="$v.Password.$touch()"
                                      :class="{invalid:$v.Password.$error}"
                            ></md-input>
                           <span class="md-error" v-if="!$v.Password.required && $v.Password.$dirty ">Please Enter Password</span>
                           <span class="md-error" v-if="!$v.Password.maxLength">maxLength charater : {{$v.Password.$params.maxLength.max}}</span>
                 </md-field>
               </div>
               <div class="col-md-8">
                <p
                  class="text-danger"
                  v-if="!$v.Password.required && $v.Password.$dirty"
                >Please Enter </p>
                <p
                  class="text-danger"
                  v-if="!$v.Password.maxLength"
                >maxLength charater : {{$v.Password.$params.maxLength.max}}</p>
              </div>


            <div class="col-md-12">
              <a
                @click.prevent="LoginUser()"
                class="btn btn-success"
                :disabled="$v.$invalid"
              >Login</a>
               <!--<router-link to="/SkillsList" active-class="active" class="btn btn-success">List</router-link>-->
token:{{token}}

            </div>
          </form>

  </div>
</div>


</div>


        </div>
        <!--<div style="direction:ltr">{{$v}}</div>-->
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

export default {
  components: {
    //SweetalertIcon
  },

  data() {
    return {
      Email:'morteza.marivani@yahoo.com',
      Password:'Morteza@123456',
      UserName:'',
      token:""
    };
  },

  methods: {
      LoginUser(){
        const user = {
          email : this.Email,
          password : this.Password,
          UserName : this.Email
        }
        this.$store.dispatch("LoginUser",user);
        this.token= this.$store.getters.IsUserAuthenticated;
      }

  }, //methods

  validations: {
    Email: {
      required,
      maxLength: maxLength(100),
      minLength: minLength(5)
    },
    Password: {
      maxLength: maxLength(50),
      minLength: minLength(5),
      required
    }
    
  } //validations
}; //default
</script>

<style>
.invalid {
  border: 1px solid red !important;
  box-shadow: 0 0 1px red !important;
  background-color: lightpink !important;
  height: 45px;
}

.panelLogin{
      padding-left: 250px;
    padding-right: 250px;
    padding-top: 100px;
    padding-bottom: 100px;

}
</style>
