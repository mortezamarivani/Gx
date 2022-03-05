<template>
  <div >
    <br />
  <md-card >


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
              <input
                type="text"
                placeholder="Please Enter Url"
                v-model="fldUrl"
                @input="$v.fldUrl.$touch()"
                :class="{invalid:$v.fldUrl.$error  }"
              />
              <div class="col-md-8">
                <p
                  class="text-danger"
                  v-if="!$v.fldUrl.required && $v.fldUrl.$dirty "
                >Please Enter Title</p>
              </div>
            </div>


             <div class="col-md-12">
              <input
                type="text"
                placeholder="Please Enter MinPrice"
                v-model="fldMinPrice"
                @input="$v.fldMinPrice.$touch()"
                :class="{invalid:$v.fldMinPrice.$error  }"
              />
              <div class="col-md-8">
                <p
                  class="text-danger"
                  v-if="!$v.fldMinPrice.required && $v.fldMinPrice.$dirty "
                >Please Enter MinPrice</p>
              </div>
            </div>

             <div class="col-md-12">
              <input
                type="text"
                placeholder="Please Enter MaxPrice"
                v-model="fldMaxPrice"
                @input="$v.fldMaxPrice.$touch()"
                :class="{invalid:$v.fldMaxPrice.$error  }"
              />
              <div class="col-md-8">
                <p
                  class="text-danger"
                  v-if="!$v.fldMaxPrice.required && $v.fldMaxPrice.$dirty "
                >Please Enter fldMaxPrice</p>
              </div>
            </div>


             <div class="col-md-12">
              <input
                type="text"
                placeholder="Please Enter RealPrice"
                v-model="fldRealPrice"
                @input="$v.fldRealPrice.$touch()"
                :class="{invalid:$v.fldRealPrice.$error  }"
              />
              <div class="col-md-8">
                <p
                  class="text-danger"
                  v-if="!$v.fldRealPrice.required && $v.fldRealPrice.$dirty "
                >Please Enter RealPrice</p>
              </div>
            </div>

            <div class="col-md-12">
            <textarea 
                type="text"
                placeholder="Please Enter Description"
                v-model="fldDescription"
                @input="$v.fldDescription.$touch()"
                :class="{invalid:$v.fldDescription.$error  }"
                 rows="4">
              </textarea>
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
          
          <p>{{this.fldShopListID}}</p>

          </form>
        </div>

  </div>






  <div class="panel-footer panel-warning" >
        <div class="row">
            <div class="col-md-12">
              <a
                @click.prevent="CreateShopDetail()"
                class="btn btn-success"
                
              >Create</a>
              <!--:disabled="$v.$invalid"-->
              <router-link 
              :to="{ name: 'ShopDetailList', params: { id: this.fldShopListID } }"
              active-class="active" class="btn btn-success">List</router-link>

              <a @click.prevent="NewShopDetail()" to="/Shop" class="btn btn-success">New</a>
           

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

              </transition>

              <!--</no-ssr>-->
            </div>

        </div>
  </div>
</div>
      </div>
    </div>

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
//import VueSlideBar from "vue-slide-bar";

export default {
  components: {
    //VueSlideBar,
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
    fldShopDetailID: 0,
    fldUrl:"",
    fldMinPrice:0,
    fldMaxPrice:0,
    fldRealPrice:0,
    fldCurrenySymbol:"",
    fldCurrency:"",
    fldDescription: "",
    fldStatus: true,
    fldShopListID:0,
    dirty: false,
    ClickedNew: false,
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

    CreateShopDetail() {
      let formData = new FormData();
      let config = {
          headers: {
              "x-api-key": "YOUR_API_KEY"
          }
      }

      formData.append('fldDescription', this.fldDescription);
      formData.append('fldUrl', this.fldUrl);
      formData.append('fldStatus', this.fldStatus);
      formData.append('fldShopListID', this.fldShopListID);
      formData.append('fldMinPrice', this.fldMinPrice);
      formData.append('fldMaxPrice', this.fldMaxPrice);
      formData.append('fldRealPrice', this.fldRealPrice);
      formData.append('fldCurrency', 'USD');
      formData.append('fldCurrenySymbol', '$');
      console.log(formData)
      this.$store.dispatch("CreateShopDetail", formData,config );
      this.success = true;
      this.alertMessage="Ctreated ShopDetail Successed ";
    },
    
    NewShopDetail() {
      this.ClickedNew = true;
      this.fldShopDetailID = 0;
      this.fldShopListID = 0;
      this.fldDescription = "";
      this.fldUrl = "";
      this.fldMaxPrice = "";
      this.fldMinPrice = "";
      this.fldRealPrice = "";
      this.fldStatus = false;
      this.title = "Create New ShopDetail";
      this.$v.$reset();
    }
  }, //methods


  
  computed: {

  },
//GetShopDetailWithId
//fldShopDetailID

  watch: {
   $route() {
    fldShopListID: this.$route.params.id
   }
  }, //

  created() {
    this.NewShopDetail();
    if(this.$route.params.id > 0 ){
    this.fldShopListID = this.$route.params.id;
    
    }

  }, //

validations: {
  fldUrl: {
     required
    },
     fldMinPrice: {
     required
    },     
    fldMaxPrice: {
     required
    },
    fldRealPrice: {
     required
    },
    fldCurrenySymbol:{
      required
    },
    fldCurreny:{ 
      required
    },
    fldDescription: {
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
