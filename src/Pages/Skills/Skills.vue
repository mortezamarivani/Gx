<template>
  <div >
    <br />
  <md-card md-with-hover>
      <md-ripple>

    <div class="panel panel-default">
      <div class="panel-body" style="background-color:#f7f7f9">
      <div class="panel panel-warning ">
  <!-- Default panel contents -->
  <div class="panel-heading " >
      <h3>{{title}} / {{Authenticated }} / {{UserFullName}}</h3>
  </div>
  <div class="panel-body">
            <div class="signup-form" style="direction:ltr">
          <!--sign up form-->
          <form action="#">
            <div class="col-md-2">
              <label class="CheckBoxStatusLabel">SkillsTitle:</label>
            </div>
            <div class="col-md-10">
              <input
                type="text"
                ref="skillsTitle"
                placeholder="Please Enter SkillsTitle"
                v-model="skillsTitle"
                @input="$v.skillsTitle.$touch()"
                :class="{invalid:$v.skillsTitle.$error  }"
              />
              <div class="col-md-8">
                <p
                  class="text-danger"
                  v-if="!$v.skillsTitle.required && $v.skillsTitle.$dirty "
                >Please Enter SkillsTitle</p>
                <p
                  class="text-danger"
                  v-if="!$v.skillsTitle.minLength"
                >minLength charater : {{$v.skillsTitle.$params.minLength.min}}</p>
                <p
                  class="text-danger"
                  v-if="!$v.skillsTitle.maxLength"
                >maxLength charater : {{$v.skillsTitle.$params.maxLength.max}}</p>
              </div>
              <div class="col-md-4">
                <p
                  class="text-info"
                  v-if="$v.skillsTitle.$dirty "
                  style="direction:rtl"
                >{{skillsTitle.length}}/{{$v.skillsTitle.$params.maxLength.max}}</p>
              </div>
            </div>

            <div class="col-md-2">
              <label class="CheckBoxStatusLabel">BootstarpC.Name:</label>
            </div>
            <div class="col-md-10">
              <input
                type="text"
                ref="bootstarpClassName"
                placeholder="Please Enter bootstarpClassName"
                v-model="bootstarpClassName"
                @input="$v.bootstarpClassName.$touch()"
                :class="{invalid:$v.bootstarpClassName.$error}"
              />
              <div class="col-md-8">
                <p
                  class="text-danger"
                  v-if="!$v.bootstarpClassName.required && $v.bootstarpClassName.$dirty && !ClickedNew"
                >Please Enter bootstarpClassName</p>
                <p
                  class="text-danger"
                  v-if="!$v.bootstarpClassName.maxLength"
                >maxLength charater : {{$v.bootstarpClassName.$params.maxLength.max}}</p>
              </div>
              <div class="col-md-4">
                <p
                  class="text-info"
                  v-if="$v.bootstarpClassName.$dirty "
                  style="direction:rtl"
                >{{bootstarpClassName.length}}/{{$v.bootstarpClassName.$params.maxLength.max}}</p>
              </div>
            </div>

            <div class="col-md-2">
              <label class="CheckBoxStatusLabel">SkillsDescription:</label>
            </div>
            <div class="col-md-10">
              <textarea
                cols="30"
                rows="10"
                type="text"
                ref="skillsDescription"
                placeholder="Please Enter SkillsDescription"
                v-model="skillsDescription"
                @input="$v.skillsDescription.$touch()"
                :class="{invalid:$v.skillsDescription.$error}"
              ></textarea>
              <div class="col-md-8">
                <p
                  class="text-danger"
                  v-if="!$v.skillsDescription.required && $v.skillsDescription.$dirty  && !ClickedNew"
                >Please Enter skillsDescription</p>
                <p
                  class="text-danger"
                  v-if="!$v.skillsDescription.minLength"
                >minLength charater : {{$v.skillsDescription.$params.minLength.min}}</p>
                <p
                  class="text-danger"
                  v-if="!$v.skillsDescription.maxLength"
                >maxLength charater : {{$v.skillsDescription.$params.maxLength.max}}</p>
              </div>

              <div class="col-md-4">
                <p
                  class="text-info"
                  v-if="$v.skillsDescription.$dirty "
                  style="direction:rtl"
                >{{skillsDescription.length}}/{{$v.skillsDescription.$params.maxLength.max}}</p>
              </div>
            </div>

            <div class="row">
              <div class="col-md-2 progressMargin">
                <label for="progress" class="CheckBoxStatusLabel">Progress:</label>
              </div>

              <div class="col-md-10">
                <VueSlideBar
                  style="margin-left:13px"
                  v-model="progress"
                  :min="0"
                  :max="100"
                  :processStyle="slider.processStyle"
                  :lineHeight="slider.lineHeight"
                  :tooltipStyles="{ backgroundColor: 'red', borderColor: 'red' }"
                ></VueSlideBar>
              </div>
            </div>

                <div class="col-md-2">
                  <label class="CheckBoxStatusLabel">Languge:</label>
                </div>
                 <div class="col-md-10">
                    <md-radio v-model="languge" :value="3" >Fa </md-radio>  
                    <md-radio v-model="languge" :value="1" >En </md-radio>  
                    <md-radio v-model="languge" :value="2" >Deu</md-radio> 
                 </div>

            <div class="row">
              <div class="col-md-2">
                <label class="CheckBoxStatusLabel">Status:</label>
              </div>


              <div class="col-md-2">
                <div style="direction:lrt" class="col-md-2">
                  <div class="toggle">
                    <input id="status" type="checkbox" v-model="status" />
                    <label for="status" class="CheckBoxStatusLabel">
                      <div class="toggle__switch"></div>
                    </label>
                  </div>
                </div>
                <div style="direction:ltr" class="col-md-2"></div>
              </div>
              <div class="col-md-2">
                <label v-if="status" :class="{CheckBoxStatusLabelColorG:status}" for="status">Enable</label>
                <label
                  v-if="!status"
                  :class="{CheckBoxStatusLabelColorR:!status}"
                  for="status"
                >Disable</label>
              </div>
            </div>

          </form>
        </div>

  </div>

  <div class="panel-footer panel-warning" >
        <div class="row">
            <div class="col-md-12">
              <a
                @click.prevent="CreateSkills()"
                class="btn btn-success"
                :disabled="$v.$invalid"
              >Create</a>
              <router-link to="/SkillsList" active-class="active" class="btn btn-success">List</router-link>

              <a @click.prevent="NewSkills()" to="/Skills" class="btn btn-success">New</a>
              <a @click="EditeSkillsAlert(skillsID)" class="btn btn-success">Edite</a>
              <a @click="DeleteSkillsAlert(skillsID)" class="btn btn-success">Delete</a>

              <!--<vue-alert></vue-alert>-->
              <!--<no-ssr  >-->
              <transition enter-active-class="animated fadeIn">
                <div class="row alertSuccess" v-if="success">
                  <div class="col-md-2">
                   
                    <!-- <sweetalert-icon icon="success" /> -->
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
                    
                    <!--<sweetalert-icon icon="warning" /> -->
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
                    
                    <!-- <sweetalert-icon icon="info" />-->
                  </div>
                  <div class="col-md-10">
                    <div>
                      <p class="alertdesc">Info !</p>
                    </div>
                  </div>
                </div>
                <div class="row alertError" v-if="error">
                  <div class="col-md-2">
                   
                    <!--  <sweetalert-icon icon="error" />-->
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
                    
                    <!--<sweetalert-icon icon="loading" /> -->
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






        <p style="display:none">: {{GetSkillsWithId.skillsID}}</p>
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
import VueSlideBar from "vue-slide-bar";

export default {
  components: {
    VueSlideBar,
    //SweetalertIcon
  },

  data() {
    return {
      Authenticated:false,
      UserFullName :'' ,
      alertMessage:'',
      success:false,
      warning:false,
      info:false,
      error:false,
      loading:false,
      title: "",
      skillsID: 0,
      skillsTitle: "",
      skillsDescription: "",
      bootstarpClassName: "",
      progress: 0,
      languge:1,
      status: true,
      dirty: false,
      ClickedNew: false,
      value2: 8,
      slider: {
        lineHeight: 20,
        processStyle: {
          backgroundColor: "#fb8ea6"
        }
      }
    };
  },

  methods: {
    resetAlert(){
      this.alertMessage='',
      this.success=false,
      this.warning=false,
      this.info=false,
      this.error=false,
      this.loading=false
    },
    ChangeClickedNew(event) {
      this.ClickedNew = false;
    },
    CreateSkills() {
      const skills = {
        skillsTitle: this.skillsTitle,
        skillsDescription: this.skillsDescription,
        bootstarpClassName: this.bootstarpClassName,
        languge : this.languge,
        progress: this.progress,
        status: this.status
      }; //const
      this.$store.dispatch("CreateSkills", skills);
     this.success = true;
     this.alertMessage="ctreated skills successed ";

    },

    EditeSkillsAlert(skillsID) {
       if(skillsID >0){
        this.resetAlert();
        this.warning = true;
        this.alertMessage="Are you want to Edite this skills?";
       }
    },
    DeleteSkillsAlert(skillsID) {
      if(skillsID >0){
        console.log('skillsID : ' + skillsID)
        this.resetAlert();
        this.error = true;
        this.alertMessage="Are you want to Delete this skills?" ;
      }
    },

    DeleteSkills() {
      const skills = {
        skillsID: this.$route.params.id
      }; //const
      this.$store.dispatch("DeleteSkills", skills);
    //   this.$store.dispatch("GetSkillsWithIdFromService", {
    //   skillsId: skills.skillsID
    // });
      
      this.resetAlert();
      this.success = true;
      this.alertMessage="Skill success deleted";
      this.NewSkills();
    },

    EditeSkills() {
      const skills = {
        skillsTitle: this.skillsTitle,
        skillsDescription: this.skillsDescription,
        bootstarpClassName: this.bootstarpClassName,
        languge : this.languge,
        progress: this.progress,
        status: this.status,
        skillsID: this.$route.params.id
      }; //const
      this.$store.dispatch("EditeSkills", skills);
      this.resetAlert();
      this.success = true;
      this.alertMessage="Skill success edited";
    },

    NewSkills() {
      this.ClickedNew = true;
      this.skillsID = 0;
      this.skillsTitle = "";
      this.skillsDescription = "";
      this.bootstarpClassName = "";
      this.languge="";
      this.progress = 0;
      this.status = false;
      this.title = "Create New Skills";
      this.$v.$reset();
    }
  }, //methods
  computed: {
    GetSkillsWithId() {
      if(this.$store.getters.IsUserAuthenticated == ""){
        alert("token is false")
      }
      var retSkills = this.$store.getters.GetSkillsWithId;
      this.skillsTitle = retSkills.skillsTitle;
      this.skillsDescription = retSkills.skillsDescription;
      this.bootstarpClassName = retSkills.bootstarpClassName;
      this.status = retSkills.status;
      this.languge = retSkills.languge;
      this.progress = retSkills.progress;
      this.skillsID = retSkills.skillsID;
      if (retSkills.skillsID > 0) {
        this.title = "Detail of skills for Edite / Delete ";
        this.skillsID = retSkills.skillsID;
      } else {
        this.title = "Create New Skills ";
      }

      return retSkills;
    } //
  },

  watch: {
    $route() {
      this.$store.dispatch("GetSkillsWithIdFromService", {
        skillsId: this.$route.params.id
      });
    }
  }, //

  created() {
     this.Authenticated = this.$store.getters.IsUserAuthenticated;
     this.UserFullName =  this.$store.getters.GetUserFullName;
         if(this.$route.params.id >0){
                this.$store.dispatch("GetSkillsWithIdFromService", {
      skillsId: this.$route.params.id
    });

         }
  }, //

  validations: {
    skillsTitle: {
      required,
      maxLength: maxLength(150),
      minLength: minLength(5)
    },
    skillsDescription: {
      maxLength: maxLength(500),
      minLength: minLength(10),
      required
    },
    bootstarpClassName: {
      required,
      maxLength: maxLength(100)
    },
    progress: {
      required,
      max: 100
    }
  } //validations
}; //default
</script>

<style>
.invalid {
  border: 1px solid red !important;
  box-shadow: 0 0 5px red !important;
  background-color: lightpink !important;
}

.progressMargin {
  margin-top: 40px;
}

.vue-alert {
  margin-top: 10px;
}
</style>
