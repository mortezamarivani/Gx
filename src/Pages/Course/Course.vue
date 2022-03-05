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
              <a @click="EditePicture(courseID)"  v-show="courseID && imagePreview"  class="btn btn-success">EditePicture</a>
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
              <label class="CheckBoxStatusLabel">CourseName:</label>
            </div>
            <div class="col-md-10">
              <input
                type="text"
                placeholder="Please select courseName"
                v-model="courseName"
                @input="$v.courseName.$touch()"
                :class="{invalid:$v.courseName.$error  }"
              />
              <div class="col-md-8">
                <p
                  class="text-danger"
                  v-if="!$v.courseName.required && $v.courseName.$dirty "
                >Please select courseName</p>
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
              <label class="CheckBoxStatusLabel">Tools:</label>
            </div>
            <div class="col-md-10">
            <textarea 
            type="text"
                placeholder="Please Enter tools"
                v-model="tools"
                @input="$v.tools.$touch()"
                :class="{invalid:$v.tools.$error  }"
                 rows="4">
            </textarea>
              <div class="col-md-8">
                <p
                  class="text-danger"
                  v-if="!$v.tools.minLength"
                >minLength charater : {{$v.tools.$params.minLength.min}}</p>
                <p
                  class="text-danger"
                  v-if="!$v.tools.maxLength"
                >maxLength charater : {{$v.tools.$params.maxLength.max}}</p>
              </div>

              <div class="col-md-4">
                <p
                  class="text-info"
                  v-if="$v.tools.$dirty "
                  style="direction:rtl"
                >{{tools.length}}/{{$v.tools.$params.maxLength.max}}</p>
              </div>
            </div>

            <div class="col-md-2">
              <label class="CheckBoxStatusLabel">CourseDesc:</label>
            </div>
            <div class="col-md-10">
            <textarea 
            type="text"
                placeholder="Please Enter courseDesc"
                v-model="courseDesc"
                @input="$v.courseDesc.$touch()"
                :class="{invalid:$v.courseDesc.$error  }"
                 rows="4">
            </textarea>
              <div class="col-md-8">
                <p
                  class="text-danger"
                  v-if="!$v.courseDesc.minLength"
                >minLength charater : {{$v.courseDesc.$params.minLength.min}}</p>
                <p
                  class="text-danger"
                  v-if="!$v.courseDesc.maxLength"
                >maxLength charater : {{$v.courseDesc.$params.maxLength.max}}</p>
              </div>

              <div class="col-md-4">
                <p
                  class="text-info"
                  v-if="$v.courseDesc.$dirty "
                  style="direction:rtl"
                >{{courseDesc.length}}/{{$v.courseDesc.$params.maxLength.max}}</p>
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
                @click.prevent="CreateCourse()"
                class="btn btn-success"
                :disabled="$v.$invalid"
              >Create</a>
              <router-link to="/CourseList" active-class="active" class="btn btn-success">List</router-link>

              <a @click.prevent="NewCourse()" to="/Course" class="btn btn-success">New</a>
              <a @click="EditeCourseAlert( courseID)" class="btn btn-success">Edite</a>
              <a @click="DeleteCourseAlert(courseID)" class="btn btn-success">Delete</a>
            

              <!--<vue-alert></vue-alert>-->
              <!--<no-ssr  >-->
              <transition enter-active-class="animated fadeIn">
                <div class="row alertSuccess" v-if="success">
                  <div class="col-md-2">
                    
                      <!--<sweetalert-icon icon="success" />  -->
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
                   
                      <!--  <sweetalert-icon icon="warning" /> -->
                  </div>
                  <div class="col-md-8">
                    <div>
                      <p class="alertdesc">{{alertMessage}}</p>
                    </div>
                  </div>
                  <div class="col-md-2 alertbtnmargin">
                    <div>
                      <a @click="EditeCourse()" class="btn btn-outline-info">Ok</a>
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
                      <a @click="DeleteCourse()" class="btn btn-outline-info">Ok</a>
                      <a @click="error=!error" class="btn btn-outline-info">Cancel</a>
                    </div>
                  </div>
                </div>
                <div class="row alertLoading" v-if="loading" @click="loading=!loading">
                  <div class="col-md-2">
                    
                      <!-- <sweetalert-icon icon="loading" /> -->
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

 <p style="display:none">: {{GetCourseWithId.courseID}}</p>
        
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
    courseID: 0,
    courseName: "",
    docName:"",
    courseDesc: "",
    tools: "",
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
    CreateCourse() {
      let formData = new FormData();
      let config = {
          headers: {
              "x-api-key": "YOUR_API_KEY"
          }
      }

     const course = {
       courseName: this.courseName,
       courseDesc: this.courseDesc,
       tools: this.tools,
       institute:this.institute,
       suffixFile: this.suffixFile,
       period: this.period,
       status: this.status,
       docName:this.docName,
       file : formData,
       createdDate : this.GetValidDate(this.createdDate,'number'),
       startDate : this.GetValidDate(this.startDate,'number'),
       endDate : this.GetValidDate(this.endDate,'number'),
     }; 
      
      formData.append('file', this.file);
      formData.append('courseName', this.courseName);
      formData.append('courseDesc', this.courseDesc);
      formData.append('tools', this.tools);
      formData.append('institute' , this.institute);
      formData.append('suffixFile', this.suffixFile);
      formData.append('docName', this.docName);
      formData.append('period', this.period);
      formData.append('status', this.status);
      formData.append('languge', this.languge);
      formData.append('createdDate', this.GetValidDate(this.createdDate,'number'));
      formData.append('startDate', this.GetValidDate(this.startDate,'number'));
      formData.append('endDate', this.GetValidDate(this.endDate,'number'));
      this.$store.dispatch("Createcourse", formData,config );
      this.success = true;
      this.alertMessage="ctreated course successed ";
    },

    EditeCourseAlert(courseID) {
       if(courseID >0){
        this.resetAlert();
        this.warning = true;
        this.alertMessage="Are you want to Edite this course?";
       }
    },
    DeleteCourseAlert(courseID) {
      if(courseID >0){
        console.log('courseID : ' + courseID)
        this.resetAlert();
        this.error = true;
        this.alertMessage="Are you want to Delete this course?" ;
      }
    },

    DeleteCourse() {
      const course = {
        courseID: this.$route.params.id
      }; //const
      this.$store.dispatch("Deletecourse", course);
      this.resetAlert();
      this.success = true;
      this.alertMessage="Course success deleted";
      this.NewCourse();
    },
    
    EditePicture(){
      let formData = new FormData();
      let config = {
          headers: {
              "x-api-key": "YOUR_API_KEY"
          }
      }
      formData.append('file', this.file);
      formData.append('courseName', this.courseName);
      formData.append('courseDesc', this.courseDesc);
      formData.append('suffixFile', this.suffixFile);
      //formData.append('docName', this.docName);
      formData.append('institute', this.institute);
      formData.append('period', this.period);
      formData.append('status', this.status);
      formData.append('courseID', this.courseID);
      formData.append('languge', this.languge);
      formData.append('createdDate', this.GetValidDate(this.createdDate,'number'));
      formData.append('startDate', this.GetValidDate(this.startDate,'number'));
      formData.append('endDate', this.GetValidDate(this.endDate,'number'));
      this.$store.dispatch("EditedPicture", formData,config );
     this.success = true;
     this.alertMessage="edited picture successed ";
    },


    EditeCourse() {
      
      const course = {
        courseID : this.courseID,
        courseName: this.courseName,
        courseDesc: this.courseDesc,
        suffixFile: this.suffixFile,
        period: this.period,
        status: this.status,
        institute : this.institute,
        languge : this.languge,
        docName:this.docName,
        tools : this.tools,
        createdDate : this.GetValidDate(this.createdDate,'number'),
        startDate : this.GetValidDate(this.startDate,'number'),
        endDate : this.GetValidDate(this.endDate,'number')
      }; //const
      this.$store.dispatch("Editecourse", course);
      this.resetAlert();
      this.success = true;
      this.alertMessage="Course success edited";

    },

    NewCourse() {
      this.ClickedNew = true;
      this.courseID = 0;
      this.courseName = "";
      this.courseDesc = "";
      this.institute = "";
      this.suffixFile = "";
      this.docName = "";
      this.period = 0;
      this.status = false;
      this.createdDate = 0;
      this.languge =0;
      this.startDate = 0;
      this.endDate = 0;
      this.title = "Create New Course";
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
    GetCourseWithId() {
      var retCourse = this.$store.getters.GetcourseWithId;
      if( retCourse ==''){
         this.courseID = 0;
        return this.courseID
      }
      console.log(retCourse);
      console.log(retCourse.courseName);
      if(retCourse.createdDate !=undefined){
      this.createdDate =  this.GetValidDate(retCourse.createdDate , 'string') ;
      this.startDate =  this.GetValidDate(retCourse.startDate , 'string') ;
      this.endDate =  this.GetValidDate(retCourse.endDate , 'string') ;
      }

      this.courseName = retCourse.courseName;
      this.courseDesc = retCourse.courseDesc;
      this.tools = retCourse.tools;
      this.institute = retCourse.institute;
      this.docName = retCourse.docName;
      this.suffixFile = retCourse.suffixFile;
      this.status = retCourse.status;
      this.period = retCourse.period;
      this.languge = retCourse.languge;
      this.courseID = retCourse.courseID;
      if (retCourse.courseID > 0) {
        this.title = "Detail of course for Edite / Delete ";
        this.courseID = retCourse.courseID;
      } else {
        this.title = "Create New Course ";
      }

      return retCourse;
    } //
  },

  watch: {
   $route() {
     this.$store.dispatch("GetcourseWithIdFromService", {
       courseID: this.$route.params.id
     });
   }
  }, //

  created() {
    // this.Authenticated = this.$store.getters.IsUserAuthenticated;
    // this.UserFullName =  this.$store.getters.GetUserFullName;
    if(this.$route.params.id >0){
     this.$store.dispatch("GetcourseWithIdFromService", {
      courseID: this.$route.params.id
    });

    }
  }, //

  validations: {
   languge:{
     required
   },
    courseName: {
      required
    },    
    docName: {
      maxLength: maxLength(200),
    },

    courseDesc: {
      maxLength: maxLength(200),
      minLength: minLength(3)
      },
     tools: {
        required,
      maxLength: maxLength(500),
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
