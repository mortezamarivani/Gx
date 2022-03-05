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
              <label class="CheckBoxStatusLabel">fileName:</label>
            </div>
            <div class="col-md-3">
              <label> <p style="color:#ff3144">Click her for select file</p> 
                <input type="file" id="file" ref="file" accept="image/*" v-on:change="handleFileUpload()"/>
              </label>
            </div>
            <div class="col-md-2">
              <a @click="EditePicture(RankID)"  v-show="rankID && imagePreview"  class="btn btn-success">EditePicture</a>
            </div>
            <div class="col-md-5">
              <p v-if="fileSize>0">{ {{fileType}} - {{fileSize}}kb } / { {{filename}}  }</p>
            </div>

           <div class="row">
               <div class="col-md-4"> </div>
               <div class="col-md-8">
                 <div v-if="ShowVueSlideBar">
                  <VueSlideBar 
                       style="margin-left:0px"
                       v-model="height"
                       :min="10"
                       :max="750"
                       :processStyle="slider.processStyle"
                       :lineHeight="slider.lineHeight"
                       :tooltipStyles="{ backgroundColor: 'red', borderColor: 'red' }"
                     ></VueSlideBar>
                  </div>
               </div>
            </div>

            <div class="col-md-2">
               <label class="CheckBoxStatusLabel">Picture:</label>
            </div>
            <div class="col-md-10">
                <div class="view-product" v-on:click="ShowSlideBar()">
                  <img class="imgstyle"   v-bind:style="{ height: height+ 'px', width: height + 'px' }"  v-bind:src="GetDocAddress + docName" v-show="!showPreview && docName" />
                  <img class="imgstyle"   v-bind:style="{ height: height+ 'px', width: height + 'px' }"  v-bind:src="imagePreview" v-show="showPreview" />
                  </div>
                  <br>
            </div>
            <hr>



            <div class="col-md-2">
              <label class="CheckBoxStatusLabel">DocName:</label>
            </div>
            <div class="col-md-10">
              <input
                type="text"
                placeholder="Please select docName"
                v-model="docName"
                @input="$v.docName.$touch()"
                :class="{invalid:$v.docName.$error  }"
              />
              <div class="col-md-8">
                <p
                  class="text-danger"
                  v-if="!$v.docName.required && $v.docName.$dirty "
                >Please select docName</p>
              </div>
            </div>


            <div class="col-md-2">
              <label class="CheckBoxStatusLabel">SuffixFile:</label>
            </div>
            <div class="col-md-10">
              <input
                type="text"
                placeholder="Please Enter suffixFile"
                v-model="suffixFile"
                @input="$v.suffixFile.$touch()"
                :class="{invalid:$v.suffixFile.$error  }"
              />
              <div class="col-md-8">
                <p
                  class="text-danger"
                  v-if="!$v.suffixFile.required && $v.suffixFile.$dirty  && !ClickedNew"
                >Please Enter suffixFile</p>
              </div>

              <div class="col-md-4">
                <p
                  class="text-info"
                  v-if="$v.suffixFile.$dirty "
                  style="direction:rtl"
                >{{suffixFile.length}}/{{$v.suffixFile.$params.maxLength.max}}</p>
              </div>
            </div>


            <div class="col-md-2">
              <label class="CheckBoxStatusLabel">EducationName:</label>
            </div>
            <div class="col-md-10">
              <input
                type="text"
                placeholder="Please select educationName"
                v-model="educationName"
                @input="$v.educationName.$touch()"
                :class="{invalid:$v.educationName.$error  }"
              />
              <div class="col-md-8">
                <p
                  class="text-danger"
                  v-if="!$v.educationName.required && $v.educationName.$dirty "
                >Please select educationName</p>
              </div>
            </div>
            



            <div class="col-md-2">
              <label class="CheckBoxStatusLabel">CreatedDate:</label>
            </div>
            <div class="col-md-10">
             <input
                type="date"
                placeholder="Please Enter createdDate"
                v-model="createdDate"
                @input="$v.createdDate.$touch()"
                :class="{invalid:$v.createdDate.$error  }"
              />
              <div class="col-md-8">
                <p
                  class="text-danger"
                  v-if="!$v.createdDate.required && $v.createdDate.$dirty  && !ClickedNew"
                >Please Enter createdDate</p>
              </div>
            </div>


            <div class="col-md-2">
              <label class="CheckBoxStatusLabel">StartDate:</label>
            </div>
            <div class="col-md-10">
             <input
                type="date"
                placeholder="Please Enter StartDate"
                v-model="startDate"
                @input="$v.startDate.$touch()"
                :class="{invalid:$v.startDate.$error  }"
              />
              <div class="col-md-8">
                <p
                  class="text-danger"
                  v-if="!$v.startDate.required && $v.startDate.$dirty  && !ClickedNew"
                >Please Enter startDate</p>
              </div>
            </div>


            <div class="col-md-2">
              <label class="CheckBoxStatusLabel">EndDate:</label>
            </div>
            <div class="col-md-10">
             <input
                type="date"
                placeholder="Please Enter endDate"
                v-model="endDate"
                @input="$v.endDate.$touch()"
                :class="{invalid:$v.endDate.$error  }"
              />
              <div class="col-md-8">
                <p
                  class="text-danger"
                  v-if="!$v.endDate.required && $v.endDate.$dirty  && !ClickedNew"
                >Please Enter endDate</p>
              </div>
            </div>


            <div class="col-md-2">
              <label class="CheckBoxStatusLabel">Institute:</label>
            </div>
            <div class="col-md-10">
              <input
                type="text"
                placeholder="Please Enter institute"
                v-model="institute"
                @input="$v.institute.$touch()"
                :class="{invalid:$v.institute.$error  }"
              />
              <div class="col-md-8">
                <p
                  class="text-danger"
                  v-if="!$v.institute.required && $v.institute.$dirty  && !ClickedNew"
                >Please Enter institute</p>
              </div>

              <div class="col-md-4">
                <p
                  class="text-info"
                  v-if="$v.institute.$dirty "
                  style="direction:rtl"
                >{{institute.length}}/{{$v.institute.$params.maxLength.max}}</p>
              </div>
            </div>




 

            <div class="col-md-2">
              <label class="CheckBoxStatusLabel">EducationDesc:</label>
            </div>
            <div class="col-md-10">
            <textarea 
            type="text"
                placeholder="Please Enter educationDesc"
                v-model="educationDesc"
                @input="$v.educationDesc.$touch()"
                :class="{invalid:$v.educationDesc.$error  }"
                 rows="4">
            </textarea>
              <div class="col-md-8">
                <p
                  class="text-danger"
                  v-if="!$v.educationDesc.minLength"
                >minLength charater : {{$v.educationDesc.$params.minLength.min}}</p>
                <p
                  class="text-danger"
                  v-if="!$v.educationDesc.maxLength"
                >maxLength charater : {{$v.educationDesc.$params.maxLength.max}}</p>
              </div>

              <div class="col-md-4">
                <p
                  class="text-info"
                  v-if="$v.educationDesc.$dirty "
                  style="direction:rtl"
                >{{educationDesc.length}}/{{$v.educationDesc.$params.maxLength.max}}</p>
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
              <div class="col-md-2 progressMargin">
                <label for="period" class="CheckBoxStatusLabel">Period:</label>
              </div>

              <div class="col-md-10">
                <VueSlideBar
                  style="margin-left:13px"
                  v-model="period"
                  :min="0"
                  :max="1000"
                  :processStyle="slider.processStyle"
                  :lineHeight="slider.lineHeight"
                  :tooltipStyles="{ backgroundColor: 'red', borderColor: 'red' }"
                ></VueSlideBar>
              </div>
            </div>

            <div class="row">
              <div class="col-md-2 StatusPadding">
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
<!---->
          </form>
        </div>

  </div>

  <div class="panel-footer panel-warning" >
        <div class="row">
            <div class="col-md-12">
              <a
                @click.prevent="CreateEducation()"
                class="btn btn-success"
                :disabled="$v.$invalid"
              >Create</a>
              <router-link to="/EducationList" active-class="active" class="btn btn-success">List</router-link>

              <a @click.prevent="NewEducation()" to="/Education" class="btn btn-success">New</a>
              <a @click="EditeEducationAlert( rankID)" class="btn btn-success">Edite</a>
              <a @click="DeleteEducationAlert(rankID)" class="btn btn-success">Delete</a>
            

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
                      <a @click="EditeEducation()" class="btn btn-outline-info">Ok</a>
                      <a @click="warning=!warning" class="btn btn-outline-info">Cancel</a>
                    </div>
                  </div>
                </div>

                <div class="row alertInfo" v-if="info" @click="info=!info">
                  <div class="col-md-2">
                    
                      <!-- <sweetalert-icon icon="info" /> -->
                  </div>
                  <div class="col-md-10">
                    <div>
                      <p class="alertdesc">Info !</p>
                    </div>
                  </div>
                </div>
                <div class="row alertError" v-if="error">
                  <div class="col-md-2">
                    
                      <!-- <sweetalert-icon icon="error" /> -->
                  </div>
                  <div class="col-md-8">
                    <div>
                      <p class="alertdesc">{{alertMessage}}</p>
                    </div>
                  </div>
                  <div class="col-md-2 alertbtnmargin">
                    <div>
                      <a @click="DeleteEducation()" class="btn btn-outline-info">Ok</a>
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

 <p style="display:none">: {{GetEducationWithId.rankID}}</p>
        
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
    height: 100 ,
    width:  100 ,
    ShowVueSlideBar:false,

          file: '',
    showPreview: false,
    imagePreview: '',
    fileType :'',
    fileSize:0,
    filename:'',
    file:null,
    selectedFile: null,
    Authenticated:false,
    UserFullName :'' ,
    alertMessage:'',
    success:false,
    warning:false,
    info:false,
    error:false,
    loading:false,
    title: "",
    rankID: 0,
    educationName: "",
    docName:"",
    educationDesc: "",
    type: "",
    institute:"",
    suffixFile: "",
    period: 0,
    status: true,
    createdDate:0,
    languge:0,
    startDate:0,
    endDate:0,
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

   handleFileUpload(){
    this.file = this.$refs.file.files[0];
    let reader  = new FileReader();

    reader.addEventListener("load", function () {
      this.showPreview = true;
      this.imagePreview = reader.result;
    }.bind(this), false);

    //this.docName = this.file.name;
    this.filename = this.file.name;
    this.suffixFile = '.'+this.file.type.split('/')[1];
    this.fileType = this.file.type;
    this.fileSize = this.file.size;
    if( this.file ){
      if ( /\.(jpe?g|png|gif|pdf)$/i.test( this.file.name ) ) {
        reader.readAsDataURL( this.file );
      }
    }
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
    CreateEducation() {
      let formData = new FormData();
      let config = {
          headers: {
              "x-api-key": "YOUR_API_KEY"
          }
      }

      
      formData.append('file', this.file);
      formData.append('educationName', this.educationName);
      formData.append('educationDesc', this.educationDesc);
      formData.append('type', '2');
      formData.append('institute' , this.institute);
      formData.append('suffixFile', this.suffixFile);
      formData.append('docName', this.docName);
      formData.append('period', this.period);
      formData.append('status', this.status);
      formData.append('languge', this.languge);
      formData.append('createdDate', this.GetValidDate(this.createdDate,'number'));
      formData.append('startDate', this.GetValidDate(this.startDate,'number'));
      formData.append('endDate', this.GetValidDate(this.endDate,'number'));
      this.$store.dispatch("Createeducation", formData,config );
      this.success = true;
      this.alertMessage="ctreated education successed ";
    },

    EditeEducationAlert(rankID) {
       if(rankID >0){
        this.resetAlert();
        this.warning = true;
        this.alertMessage="Are you want to Edite this education?";
       }
    },
    DeleteEducationAlert(rankID) {
      if(rankID >0){
        console.log('educationID : ' + rankID)
        this.resetAlert();
        this.error = true;
        this.alertMessage="Are you want to Delete this education?" ;
      }
    },

    DeleteEducation() {
      const education = {
        rankID: this.$route.params.id
      }; //const
      this.$store.dispatch("Deleteeducation", education);
      this.resetAlert();
      this.success = true;
      this.alertMessage="education success deleted";
      this.NewEducation();
    },
    
    EditePicture(){
      let formData = new FormData();
      let config = {
          headers: {
              "x-api-key": "YOUR_API_KEY"
          }
      }
      formData.append('file', this.file);
      formData.append('educationName', this.educationName);
      formData.append('educationDesc', this.educationDesc);
      formData.append('suffixFile', this.suffixFile);
      formData.append('institute', this.institute);
      formData.append('period', this.period);
      formData.append('status', this.status);
      formData.append('type', "2");
      formData.append('rankID', this.rankID);
      formData.append('languge', this.languge);
      formData.append('createdDate', this.GetValidDate(this.createdDate,'number'));
      formData.append('startDate', this.GetValidDate(this.startDate,'number'));
      formData.append('endDate', this.GetValidDate(this.endDate,'number'));
      this.$store.dispatch("EditedPicture", formData,config );
     this.success = true;
     this.alertMessage="edited picture successed ";
    },


    EditeEducation() {
      
      const education = {
        rankID :  this.rankID,
        educationName: this.educationName,
        educationDesc: this.educationDesc,
        suffixFile: this.suffixFile,
        period: this.period,
        status: this.status,
        institute : this.institute,
        languge : this.languge,
        docName:this.docName,
        type : '2',
        createdDate : this.GetValidDate(this.createdDate,'number'),
        startDate : this.GetValidDate(this.startDate,'number'),
        endDate : this.GetValidDate(this.endDate,'number')
      }; //const
      this.$store.dispatch("Editeeducation", education);
      this.resetAlert();
      this.success = true;
      this.alertMessage="Education success edited";

    },

    NewEducation() {
      this.ClickedNew = true;
      this.rankID = 0;
      this.educationName = "";
      this.educationDesc = "";
      this.institute = "";
      this.suffixFile = "";
      this.docName = "";
      this.period = 0;
      this.status = false;
      this.createdDate = 0;
      this.languge =0;
      this.startDate = 0;
      this.endDate = 0;
      this.title = "Create New Education";
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
    GetDocAddress(){
          this.showPreview = false;
          return this.$store.getters.GetDocAddress
    },
    GetEducationWithId() {
      var retEducation = this.$store.getters.GeteducationWithId;
      if(  retEducation ==''){
         this.rankID = 0;
        return this.rankID
      }
      if(retEducation.createdDate !=undefined){
      this.createdDate =  this.GetValidDate(retEducation.createdDate , 'string') ;
      this.startDate =  this.GetValidDate(retEducation.startDate , 'string') ;
      this.endDate =  this.GetValidDate(retEducation.endDate , 'string') ;
      }

      this.educationName = retEducation.rankName;
      this.educationDesc = retEducation.rankDesc;
      this.type = retEducation.type;
      this.institute = retEducation.institute;
      this.docName = retEducation.docName;
      this.suffixFile = retEducation.suffixFile;
      this.status = retEducation.status;
      this.period = retEducation.period;
      this.languge = retEducation.languge;
      this.rankID = retEducation.rankID;
      if (retEducation.rankID > 0) {
        this.title = "Detail of education for Edite / Delete ";
        this.rankID = retEducation.rankID;
      } else {
        this.title = "Create New Education ";
      }

      return retEducation;
    } //
  },

  watch: {
   $route() {
     this.$store.dispatch("GeteducationWithIdFromService", {
       rankID: this.$route.params.id
     });
   }
  }, //

  created() {
    if(this.$route.params.id >0){
     this.$store.dispatch("GeteducationWithIdFromService", {
      rankID: this.$route.params.id
    });

    }
  }, //

validations: {
  languge:{
     required
   },
  educationName: {
      required
    },    
  docName: {
      maxLength: maxLength(200),
    },
  educationDesc: {
      maxLength: maxLength(200),
      minLength: minLength(3)
    },
  institute:{   
      required,
      maxLength: maxLength(200),
      minLength: minLength(3)
     },
  suffixFile: {
      required,
      maxLength: maxLength(10),
      minLength: minLength(2)
      },
  createdDate:{
      required
    }    ,
  startDate:{
      required
    },
  endDate:{
      required
    }
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
