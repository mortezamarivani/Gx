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
          
             <div class="col-md-12">
              <md-field>
              <label>Please Enter Title!</label>
              <md-input v-model="fldTitle"
              @input="$v.fldTitle.$touch()"
                :class="{invalid:$v.fldTitle.$error  }"
              ></md-input>
            </md-field>
              <div class="col-md-8">
                <p
                  class="text-danger"
                  v-if="$v.fldTitle.required && $v.fldTitle.$dirty "
                >Please Enter Title</p>
              </div>
            </div>



                  
             <div class="col-md-12">
            
            
            <md-field>
              <label>Please Enter Description!</label>
              <md-input 
                v-model="fldDescription"
                @input="$v.fldDescription.$touch()"
                :class="{invalid:$v.fldDescription.$error  }"
                rows="4"
              ></md-input>
            </md-field>


<div class="col-md-8">
                <p
                  class="text-danger"
                  v-if="!$v.fldDescription.minLength"
                >minLength charater : {{$v.fldDescription.$params.minLength.min}}</p>
                <p
                  class="text-danger"
                  v-if="!$v.fldDescription.maxLength"
                >maxLength charater : {{$v.fldDescription.$params.maxLength.max}}</p>
              </div>

              <div class="col-md-4">
                <p
                  class="text-info"
                  v-if="$v.fldDescription.$dirty "
                  style="direction:rtl"
                >{{fldDescription.length}}/{{$v.fldDescription.$params.maxLength.max}}</p>
              </div>
                          </div>




            <div class="row">
              <div class="col-md-2 StatusPadding">
                <label class="CheckBoxStatusLabel">Status:</label>
              </div>

              <div class="col-md-2">
                <div style="direction:lrt" class="col-md-2">
                  <div class="toggle">
                    <input id="fldStatus" type="checkbox" v-model="fldStatus" />
                    <label for="fldStatus" class="CheckBoxStatusLabel">
                      <div class="toggle__switch"></div>
                    </label>
                  </div>
                </div>
                <div style="direction:ltr" class="col-md-2"></div>
              </div>
              <div class="col-md-2">
                <label v-if="fldStatus" :class="{CheckBoxStatusLabelColorG:fldStatus}" for="fldStatus">Enable</label>
                <label
                  v-if="!fldStatus"
                  :class="{CheckBoxStatusLabelColorR:!fldStatus}"
                  for="fldStatus"
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
              <a
                @click.prevent="CreateShopList()"
                class="btn btn-success"
                
              >Create</a>
              <!--:disabled="$v.$invalid"-->
              <router-link to="/ShopList" active-class="active" class="btn btn-success">List</router-link>

              <a @click.prevent="NewShopList()" to="/Shop" class="btn btn-success">New</a>
              <a @click="EditeShopListAlert( fldShpoListID)" class="btn btn-success">Edite</a>
              <a @click="DeleteShopListAlert(fldShpoListID)" class="btn btn-success">Delete</a>
            

              <!--<vue-alert></vue-alert>-->
              <!--<no-ssr  >-->
              <transition enter-active-class="animated fadeIn">
                <div class="row alertSuccess" v-if="success">
                  <div class="col-md-2">
                    
                    <!--<sweetalert-icon icon="success" /> -->
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
                      <a @click="EditeShopList()" class="btn btn-outline-info">Ok</a>
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
                    
                     <!--<sweetalert-icon icon="error" /> -->
                  </div>
                  <div class="col-md-8">
                    <div>
                      <p class="alertdesc">{{alertMessage}}</p>
                    </div>
                  </div>
                  <div class="col-md-2 alertbtnmargin">
                    <div>
                      <a @click="DeleteShopList()" class="btn btn-outline-info">Ok</a>
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

      <p style="display:none">: {{GetShopListWithId.fldShopListID}}</p>
        <!---->
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
    fldShpoListID: 0,
    fldTitle:"",
    fldDescription: "",
    type: "",
    fldStatus: true,

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
    ShowSlideBar(){
       this.ShowVueSlideBar = !this.ShowVueSlideBar;
    },
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
    CreateShopList() {
      let formData = new FormData();
      let config = {
          headers: {
              "x-api-key": "YOUR_API_KEY"
          }
      }
      formData.append('fldDescription', this.fldDescription);
      formData.append('fldTitle', this.fldTitle);
      formData.append('fldStatus', this.fldStatus);
      this.$store.dispatch("CreateShopList", formData,config );
      this.success = true;
      this.alertMessage="Ctreated ShopList Successed ";
    },

    EditeShopListAlert(fldShpoListID) {
       if(fldShpoListID >0){
        this.resetAlert();
        this.warning = true;
        this.alertMessage="Are you want to Edite this ShpoList?";
       }
    },
    DeleteShopListAlert(fldShpoListID) {
      if(fldShpoListID >0){
        this.resetAlert();
        this.error = true;
        this.alertMessage="Are you want to Delete this ShpoList?" ;
      }
    },

    DeleteShopList() {
      const shopList = {
        fldShpoListID: this.$route.params.id
      }; //const
      this.$store.dispatch("DeleteshopList", shopList);
      this.resetAlert();
      this.success = true;
      this.alertMessage="ShopList Success Deleted";
      this.NewShopList();
    },

    EditeShopList() {
      const shopList = {
        fldShpoListID :  this.fldShpoListID,
        fldDescription: this.fldDescription,
        fldStatus: this.fldStatus,
        fldTitle:this.fldTitle,
      }; //const
      this.$store.dispatch("EditeshopList", shopList);
      this.resetAlert();
      this.success = true;
      this.alertMessage="ShopList Success Edited";

    },

    NewShopList() {
      this.ClickedNew = true;
      this.fldShpoListID = 0;
      this.fldDescription = "";
      this.fldTitle = "";
      this.fldStatus = false;
      this.title = "Create New ShopList";
      this.$v.$reset();
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

    GetShopListWithId() {
      var retShopList = this.$store.getters.GetshopListWithId;
      if(  retShopList ==''){
         this.fldShopListID = 0;
        return this.fldShopListID
      }
      this.fldDescription = retShopList.fldDescription;
      this.fldTitle = retShopList.fldTitle;
      this.fldStatus = retShopList.fldStatus;
      this.fldShpoListID = retShopList.fldShpoListID;
      if (retShopList.fldShpoListID > 0) {
        this.title = "Detail of ShopList for Edite / Delete ";
        this.fldShpoListID = retShopList.fldShpoListID;
      } else {
        this.title = "Create New ShopList ";
      }
      return retShopList;
    } //
  },

  watch: {
   $route() {
     this.$store.dispatch("GetshopListWithIdFromService", {
       fldShpoListID: this.$route.params.id
     });
   }
  }, //

  created() {
    if(this.$route.params.id > 0 ){
    let id = this.$route.params.id;
     this.$store.dispatch("GetshopListWithIdFromService", {
      fldShpoListID: id
    });
    this.fldShpoListID = id;
    }
  }, //

validations: {
  fldTitle: {
      required,
      maxLength: maxLength(500),
      minLength: minLength(3)
  },
  fldDescription: {
     required,
      maxLength: maxLength(500),
      minLength: minLength(3)
    },

  } //validations
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
  padding-left: 35PX;
}
.vue-alert {
  margin-top: 10px;
}

</style>
