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
      <h3>{{title}} </h3>
  </div>
  <div class="panel-body">
            <div class="signup-form" style="direction:ltr">
          <!--sign up form-->
          <form action="#">


            <div class="col-md-2">
              <label class="CheckBoxStatusLabel">SenderName:</label>
            </div>
            <div class="col-md-10">
              <input
                type="text"
                :disabled="true"
                v-model="senderName"
              />
            </div>
            
            <div class="col-md-2">
              <label class="CheckBoxStatusLabel">SenderEmail:</label>
            </div>
            <div class="col-md-10">
              <input
                type="text"
                :disabled="true"
                v-model="senderEmail"
              />
            </div>

            <div class="col-md-2">
              <label class="CheckBoxStatusLabel">CreatedDate:</label>
            </div>
            <div class="col-md-10">
             <input
                type="date"
                :disabled="true"
                placeholder="Please Enter createdDate"
                v-model="createdDate"
              />

            </div>


            <div class="col-md-2">
              <label class="CheckBoxStatusLabel">ReciveMessage:</label>
            </div>
            <div class="col-md-10">
            <textarea 
            type="text"
            :disabled="true"
                v-model="reciveMessage"
                 rows="4">
            </textarea>
            </div>

            <div class="row">
              <div class="col-md-2 StatusPadding">
                <label class="CheckBoxStatusLabel">Status:</label>
              </div>

              <div class="col-md-2 StatusPadding" >
                <div style="direction:lrt" class="col-md-2">
                  <div class="toggle">
                    <input id="status" type="checkbox" v-model="status" />
                    <label for="status" class="CheckBoxStatusLabel">
                      <div class="toggle__switch"></div>
                    </label>
                  </div>
                </div>
                <div style="direction:ltr" class="col-md-2 "></div>
              </div>
              <div class="col-md-2 StatusPadding">
                <label v-if="status" :class="{CheckBoxStatusLabelColorG:status}" for="status">Enable</label>
                <label
                  v-if="!status"
                  :class="{CheckBoxStatusLabelColorR:!status}"
                  for="status"
                >Disable</label>
              </div>
            </div>
<!---->
          </form>
        </div>

  </div>

  <div class="panel-footer panel-warning" >
        <div class="row">
            <div class="col-md-12">
              <router-link to="/ReciveInfoList" active-class="active" class="btn btn-success">List</router-link>

              <a @click="EditeReciveInfoAlert(reciveInfoID)" class="btn btn-success">Edite</a>
              <a @click="DeleteReciveInfoAlert(reciveInfoID)" class="btn btn-success">Delete</a>
            

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
                    
                      <!-- <sweetalert-icon icon="warning" /> -->
                  </div>
                  <div class="col-md-8">
                    <div>
                      <p class="alertdesc">{{alertMessage}}</p>
                    </div>
                  </div>
                  <div class="col-md-2 alertbtnmargin">
                    <div>
                      <a @click="EditeReciveInfo()" class="btn btn-outline-info">Ok</a>
                      <a @click="warning=!warning" class="btn btn-outline-info">Cancel</a>
                    </div>
                  </div>
                </div>

                <div class="row alertInfo" v-if="info" @click="info=!info">
                  <div class="col-md-2">
                   
                      <!--  <sweetalert-icon icon="info" /> -->
                  </div>
                  <div class="col-md-10">
                    <div>
                      <p class="alertdesc">Info !</p>
                    </div>
                  </div>
                </div>
                <div class="row alertError" v-if="error">
                  <div class="col-md-2">
                    
                      <!--<sweetalert-icon icon="error" />  -->
                  </div>
                  <div class="col-md-8">
                    <div>
                      <p class="alertdesc">{{alertMessage}}</p>
                    </div>
                  </div>
                  <div class="col-md-2 alertbtnmargin">
                    <div>
                      <a @click="DeleteReciveInfo()" class="btn btn-outline-info">Ok</a>
                      <a @click="error=!error" class="btn btn-outline-info">Cancel</a>
                    </div>
                  </div>
                </div>
                <div class="row alertLoading" v-if="loading" @click="loading=!loading">
                  <div class="col-md-2">
                    
                      <!--<sweetalert-icon icon="loading" />  -->
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

 <p style="display:none">: {{GetReciveInfoWithId.reciveInfoID}}</p>
        
      </div>
    </div>

          </md-ripple>
    </md-card>


  </div>
</template>

<script>
//import SweetalertIcon from "vue-sweetalert-icons";
import { TheMask } from "vue-the-mask";

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
    //SweetalertIcon,
    TheMask
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

      reciveInfoID: 0,
      senderName: "",
      reciveMessage: "",
      senderEmail: "",
      status: true,
      createdDate:0,

      dirty: false,
      ClickedNew: false,
      value2: 8,
      slider: {
        lineHeight: 20,
        processStyle: {
          backgroundColor:"#fb8ea6" //"#f50286"
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

    EditeReciveInfoAlert(reciveInfoID) {
       if(reciveInfoID >0){
        this.resetAlert();
        this.warning = true;
        this.alertMessage="Are you want to Edite this reciveInfo?";
       }
    },
    DeleteReciveInfoAlert(reciveInfoID) {
      if(reciveInfoID >0){
        console.log('reciveInfoID : ' + reciveInfoID)
        this.resetAlert();
        this.error = true;
        this.alertMessage="Are you want to Delete this reciveInfo?" ;
      }
    },

    DeleteReciveInfo() {
      const reciveInfo = {
        reciveInfoID: this.$route.params.id
      }; //const
      this.$store.dispatch("DeletereciveInfo", reciveInfo);
      this.resetAlert();
      this.success = true;
      this.alertMessage="ReciveInfo success deleted";
      this.NewReciveInfo();
    },

    EditeReciveInfo() {
      const reciveInfo = {
           senderName: this.senderName,
           reciveMessage:this.reciveMessage,
           senderEmail: this.senderEmail,
          createdDate:this.GetValidDate(this.createdDate,'number'),
          status: this.status,
          reciveInfoID: this.$route.params.id
      }; //const
      this.$store.dispatch("EditereciveInfo", reciveInfo);
      this.resetAlert();
      this.success = true;
      this.alertMessage="ReciveInfo success edited";
    },

    GetValidDate(in_date , out_type){
      const strdate = in_date.toString(); 
      if(out_type == 'string'){
        return strdate.substr(0,4) + '-'+strdate.substr(4,2)+'-'+strdate.substr(6,2);
      }
      else if(out_type == 'number'){
        return strdate.split('-')[0] + strdate.split('-')[1]+strdate.split('-')[2];
    }
    }
  }, //methods
  computed: {
    GetReciveInfoWithId() {
      //this.currentYear = (new Date()).getFullYear();
      var retreciveInfo = this.$store.getters.GetreciveInfoWithId;
      console.log('retreciveInfo0' + retreciveInfo)

      if(retreciveInfo ==''){
         this.reciveInfoID = 0;
        return this.reciveInfoID
      }
      console.log('retreciveInfo2' + retreciveInfo)
      
      if(retreciveInfo.createdDate !=undefined){
      this.createdDate =  this.GetValidDate(retreciveInfo.createdDate , 'string') ;
      }
      console.log('retreciveInfo3' + retreciveInfo)

      this.senderName = retreciveInfo.senderName;
      this.reciveMessage = retreciveInfo.reciveMessage;
      this.senderEmail = retreciveInfo.senderEmail;
      this.status = retreciveInfo.status;
      this.galleryID = retreciveInfo.galleryID;
      if (retreciveInfo.reciveInfoID > 0) {
        this.title = "Detail of reciveInfo for Edite / Delete ";
        this.reciveInfoID = retreciveInfo.reciveInfoID;
      } else {
        this.title = "ReciveInfo ";
      }

      return retreciveInfo;
    } //
  },

  watch: {
   $route() {
     this.$store.dispatch("GetReciveInfoWithIdFromService", {
       reciveInfoID: this.$route.params.id
     });
   }
  }, //

  created() {
    // this.Authenticated = this.$store.getters.IsUserAuthenticated;
    // this.UserFullName =  this.$store.getters.GetUserFullName;
    if(this.$route.params.id >0){
     this.$store.dispatch("GetReciveInfoWithIdFromService", {
      reciveInfoID: this.$route.params.id
    });

    }
  }, //

}; //default
</script>

<style>
  input[type="file"]{
    position: absolute;
    top: -500px;
  }
  div.file-listing img{
    max-width: 50%;
    height: 100px !important;
    width: 90px !important;
  }


.invalid {
  border: 1px solid red !important;
  box-shadow: 0 0 5px red !important;
  background-color: lightpink !important;
}

.progressMargin {
  margin-top: 40px;
  padding-left: 35PX;
}
.StatusPadding{
  padding-top: 35PX;
  padding-left: 35PX;
}
.vue-alert {
  margin-top: 10px;
}

</style>
