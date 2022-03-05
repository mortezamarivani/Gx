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
                  <label class="CheckBoxStatusLabel">Name:</label>
                </div>
                <div class="col-md-10">
                  <input
                    type="text"
                    placeholder="Please Enter Name"
                    v-model="name"
                    @input="$v.name.$touch()"
                    :class="{invalid:$v.name.$error  }"
                  />
                  <div class="col-md-8">
                    <p
                      class="text-danger"
                      v-if="!$v.name.required && $v.name.$dirty "
                    >Please Enter Name</p>
                    <p
                      class="text-danger"
                      v-if="!$v.name.minLength"
                    >minLength charater : {{$v.name.$params.minLength.min}}</p>
                    <p
                      class="text-danger"
                      v-if="!$v.name.maxLength"
                    >maxLength charater : {{$v.name.$params.maxLength.max}}</p>
                  </div>
                  <div class="col-md-4">
                    <p
                      class="text-info"
                      v-if="$v.name.$dirty "
                      style="direction:rtl"
                    >{{name.length}}/{{$v.name.$params.maxLength.max}}</p>
                  </div>
                </div>


                <div class="col-md-2">
                  <label class="CheckBoxStatusLabel">HomeDesc:</label>
                </div>
                <div class="col-md-10">
                  <textarea
                    cols="30"
                    rows="5"
                    type="text"
                    placeholder="Please Enter HomeDesc"
                    v-model="homeDesc"
                    @input="$v.homeDesc.$touch()"
                    :class="{invalid:$v.homeDesc.$error}"
                  ></textarea>
                  <div class="col-md-8">
                    <p
                      class="text-danger"
                      v-if="!$v.homeDesc.required && $v.homeDesc.$dirty  && !ClickedNew"
                    >Please Enter homeDesc</p>
                    <p
                      class="text-danger"
                      v-if="!$v.homeDesc.minLength"
                    >minLength charater : {{$v.HomeDesc.$params.minLength.min}}</p>
                    <p
                      class="text-danger"
                      v-if="!$v.homeDesc.maxLength"
                    >maxLength charater : {{$v.homeDesc.$params.maxLength.max}}</p>
                  </div>

                  <div class="col-md-4">
                    <p
                      class="text-info"
                      v-if="$v.homeDesc.$dirty "
                      style="direction:rtl"
                    >{{homeDesc.length}}/{{$v.homeDesc.$params.maxLength.max}}</p>
                  </div>

                </div>


                <div class="col-md-2">
                  <label class="CheckBoxStatusLabel">AboutHeader:</label>
                </div>
                <div class="col-md-10">
                  <textarea
                    cols="30"
                    rows="5"
                    type="text"
                    placeholder="Please Enter AboutHeader"
                    v-model="aboutHeader"
                    @input="$v.aboutHeader.$touch()"
                    :class="{invalid:$v.aboutHeader.$error}"
                  ></textarea>
                  <div class="col-md-8">
                    <p
                      class="text-danger"
                      v-if="!$v.aboutHeader.required && $v.aboutHeader.$dirty  && !ClickedNew"
                    >Please Enter aboutHeader</p>
                    <p
                      class="text-danger"
                      v-if="!$v.aboutHeader.minLength"
                    >minLength charater : {{$v.aboutHeader.$params.minLength.min}}</p>
                    <p
                      class="text-danger"
                      v-if="!$v.aboutHeader.maxLength"
                    >maxLength charater : {{$v.aboutHeader.$params.maxLength.max}}</p>
                  </div>

                  <div class="col-md-4">
                    <p
                      class="text-info"
                      v-if="$v.aboutHeader.$dirty "
                      style="direction:rtl"
                    >{{aboutHeader.length}}/{{$v.aboutHeader.$params.maxLength.max}}</p>
                  </div>

                </div>

                <div class="col-md-2">
                  <label class="CheckBoxStatusLabel">AboutTitle:</label>
                </div>
                <div class="col-md-10">
                  <textarea
                    cols="30"
                    rows="5"
                    type="text"
                    placeholder="Please Enter AboutTitle"
                    v-model="aboutTitle"
                    @input="$v.aboutTitle.$touch()"
                    :class="{invalid:$v.aboutTitle.$error}"
                  ></textarea>
                  <div class="col-md-8">
                    <p
                      class="text-danger"
                      v-if="!$v.aboutTitle.required && $v.aboutTitle.$dirty  && !ClickedNew"
                    >Please Enter aboutTitle</p>
                    <p
                      class="text-danger"
                      v-if="!$v.aboutTitle.minLength"
                    >minLength charater : {{$v.aboutTitle.$params.minLength.min}}</p>
                    <p
                      class="text-danger"
                      v-if="!$v.aboutTitle.maxLength"
                    >maxLength charater : {{$v.aboutTitle.$params.maxLength.max}}</p>
                  </div>

                  <div class="col-md-4">
                    <p
                      class="text-info"
                      v-if="$v.aboutTitle.$dirty "
                      style="direction:rtl"
                    >{{aboutTitle.length}}/{{$v.aboutTitle.$params.maxLength.max}}</p>
                  </div>

                </div>


                <div class="col-md-2">
                  <label class="CheckBoxStatusLabel">AboutDescription:</label>
                </div>
                <div class="col-md-10">
                  <textarea
                    cols="30"
                    rows="8"
                    type="text"
                    placeholder="Please Enter AboutDescription"
                    v-model="aboutDescription"
                    @input="$v.aboutDescription.$touch()"
                    :class="{invalid:$v.aboutDescription.$error}"
                  ></textarea>
                  <div class="col-md-8">
                    <p
                      class="text-danger"
                      v-if="!$v.aboutDescription.required && $v.aboutDescription.$dirty  && !ClickedNew"
                    >Please Enter aboutDescription</p>
                    <p
                      class="text-danger"
                      v-if="!$v.aboutDescription.minLength"
                    >minLength charater : {{$v.aboutDescription.$params.minLength.min}}</p>
                    <p
                      class="text-danger"
                      v-if="!$v.aboutDescription.maxLength"
                    >maxLength charater : {{$v.aboutDescription.$params.maxLength.max}}</p>
                  </div>

                  <div class="col-md-4">
                    <p
                      class="text-info"
                      v-if="$v.aboutDescription.$dirty "
                      style="direction:rtl"
                    >{{aboutDescription.length}}/{{$v.aboutDescription.$params.maxLength.max}}</p>
                  </div>

                </div>


                <div class="col-md-2">
                  <label class="CheckBoxStatusLabel">InstagramID:</label>
                </div>
                <div class="col-md-10">
                  <input
                    type="text"
                    placeholder="Please Enter InstagramID"
                    v-model="instagramID"
                    @input="$v.instagramID.$touch()"
                    :class="{invalid:$v.instagramID.$error  }"
                  />
                  <div class="col-md-8">
                    <p
                      class="text-danger"
                      v-if="!$v.instagramID.minLength"
                    >minLength charater : {{$v.instagramID.$params.minLength.min}}</p>
                    <p
                      class="text-danger"
                      v-if="!$v.instagramID.maxLength"
                    >maxLength charater : {{$v.instagramID.$params.maxLength.max}}</p>
                  </div>
                  <div class="col-md-4">
                    <p
                      class="text-info"
                      v-if="$v.instagramID.$dirty "
                      style="direction:rtl"
                    >{{instagramID.length}}/{{$v.instagramID.$params.maxLength.max}}</p>
                  </div>
                </div>

                <div class="col-md-2">
                  <label class="CheckBoxStatusLabel">LinkdinAddress:</label>
                </div>
                <div class="col-md-10">
                  <input
                    type="text"
                    placeholder="Please Enter LinkdinAddress"
                    v-model="linkdinAddress"
                    @input="$v.linkdinAddress.$touch()"
                    :class="{invalid:$v.linkdinAddress.$error  }"
                  />
                  <div class="col-md-8">
                    <p
                      class="text-danger"
                      v-if="!$v.linkdinAddress.minLength"
                    >minLength charater : {{$v.linkdinAddress.$params.minLength.min}}</p>
                    <p
                      class="text-danger"
                      v-if="!$v.linkdinAddress.maxLength"
                    >maxLength charater : {{$v.linkdinAddress.$params.maxLength.max}}</p>
                  </div>
                  <div class="col-md-4">
                    <p
                      class="text-info"
                      v-if="$v.instagramID.$dirty "
                      style="direction:rtl"
                    >{{linkdinAddress.length}}/{{$v.linkdinAddress.$params.maxLength.max}}</p>
                  </div>
                </div>

                <div class="col-md-2">
                  <label class="CheckBoxStatusLabel">TwitterAddress:</label>
                </div>
                <div class="col-md-10">
                  <input
                    type="text"
                    placeholder="Please Enter TwitterAddress"
                    v-model="twitterAddress"
                    @input="$v.twitterAddress.$touch()"
                    :class="{invalid:$v.twitterAddress.$error  }"
                  />
                  <div class="col-md-8">
                    <p
                      class="text-danger"
                      v-if="!$v.twitterAddress.minLength"
                    >minLength charater : {{$v.twitterAddress.$params.minLength.min}}</p>
                    <p
                      class="text-danger"
                      v-if="!$v.twitterAddress.maxLength"
                    >maxLength charater : {{$v.twitterAddress.$params.maxLength.max}}</p>
                  </div>
                  <div class="col-md-4">
                    <p
                      class="text-info"
                      v-if="$v.twitterAddress.$dirty "
                      style="direction:rtl"
                    >{{twitterAddress.length}}/{{$v.twitterAddress.$params.maxLength.max}}</p>
                  </div>
                </div>

                <div class="col-md-2">
                  <label class="CheckBoxStatusLabel">FacebookAddress:</label>
                </div>
                <div class="col-md-10">
                  <input
                    type="text"
                    placeholder="Please Enter FacebookAddress"
                    v-model="facebookAddress"
                    @input="$v.facebookAddress.$touch()"
                    :class="{invalid:$v.facebookAddress.$error  }"
                  />
                  <div class="col-md-8">
                    <p
                      class="text-danger"
                      v-if="!$v.facebookAddress.minLength"
                    >minLength charater : {{$v.facebookAddress.$params.minLength.min}}</p>
                    <p
                      class="text-danger"
                      v-if="!$v.facebookAddress.maxLength"
                    >maxLength charater : {{$v.facebookAddress.$params.maxLength.max}}</p>
                  </div>
                  <div class="col-md-4">
                    <p
                      class="text-info"
                      v-if="$v.facebookAddress.$dirty "
                      style="direction:rtl"
                    >{{facebookAddress.length}}/{{$v.facebookAddress.$params.maxLength.max}}</p>
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
                  <label class="CheckBoxStatusLabel">Mobile:</label>
                </div>
                <div class="col-md-10">
                  <input
                    type="text"
                    placeholder="Please Enter Mobile"
                    v-model="mobile"
                    v-mask="'+98(####) ### ####'"
                    @input="$v.mobile.$touch()"
                    :class="{invalid:$v.mobile.$error  }"
                  />
                  <div class="col-md-8">
                    <p
                      class="text-danger"
                      v-if="!$v.mobile.minLength"
                    >minLength charater : {{$v.mobile.$params.minLength.min}}</p>
                    <p
                      class="text-danger"
                      v-if="!$v.mobile.maxLength"
                    >maxLength charater : {{$v.mobile.$params.maxLength.max}}</p>
                  </div>
                  <div class="col-md-4">
                    <p
                      class="text-info"
                      v-if="$v.mobile.$dirty "
                      style="direction:rtl"
                    >{{mobile.length}}/{{$v.mobile.$params.maxLength.max}}</p>
                  </div>
                </div>

                <div class="col-md-2">
                  <label class="CheckBoxStatusLabel">TelPhon:</label>
                </div>
                <div class="col-md-10">
                  <input
                    type="text"
                    placeholder="Please Enter TelPhon"
                    v-model="telPhon"
                    @input="$v.telPhon.$touch()"
                    v-mask="'+98(###) #### ####'"
                    :class="{invalid:$v.telPhon.$error  }"
                  />
                  <div class="col-md-8">
                    <p
                      class="text-danger"
                      v-if="!$v.telPhon.minLength"
                    >minLength charater : {{$v.telPhon.$params.minLength.min}}</p>
                    <p
                      class="text-danger"
                      v-if="!$v.telPhon.maxLength"
                    >maxLength charater : {{$v.telPhon.$params.maxLength.max}}</p>
                  </div>
                  <div class="col-md-4">
                    <p
                      class="text-info"
                      v-if="$v.telPhon.$dirty "
                      style="direction:rtl"
                    >{{telPhon.length}}/{{$v.telPhon.$params.maxLength.max}}</p>
                  </div>
                </div>

                <div class="col-md-2">
                  <label class="CheckBoxStatusLabel">Email:</label>
                </div>
                <div class="col-md-10">
                  <input
                    type="email"
                    placeholder="Please Enter Email"
                    v-model="email"
                    @input="$v.email.$touch()"
                    :class="{invalid:$v.email.$error  }"
                  />
                  <div class="col-md-8">
                    <p
                      class="text-danger"
                      v-if="!$v.email.required && $v.email.$dirty "
                    >Please Enter Email</p>
                    <p
                      class="text-danger"
                      v-if="!$v.email.minLength"
                    >minLength charater : {{$v.email.$params.minLength.min}}</p>
                    <p
                      class="text-danger"
                      v-if="!$v.email.maxLength"
                    >maxLength charater : {{$v.email.$params.maxLength.max}}</p>
                  </div>
                  <div class="col-md-4">
                    <p
                      class="text-info"
                      v-if="$v.email.$dirty "
                      style="direction:rtl"
                    >{{email.length}}/{{$v.email.$params.maxLength.max}}</p>
                  </div>
                </div>


                <div class="col-md-2">
                  <label class="CheckBoxStatusLabel">Address:</label>
                </div>
                <div class="col-md-10">
                  <input
                    type="text"
                    placeholder="Please Enter Address"
                    v-model="address"
                    @input="$v.address.$touch()"
                    :class="{invalid:$v.address.$error  }"
                  />
                  <div class="col-md-8">
                    <p
                      class="text-danger"
                      v-if="!$v.address.required && $v.address.$dirty "
                    >Please Enter Address</p>
                    <p
                      class="text-danger"
                      v-if="!$v.address.minLength"
                    >minLength charater : {{$v.address.$params.minLength.min}}</p>
                    <p
                      class="text-danger"
                      v-if="!$v.address.maxLength"
                    >maxLength charater : {{$v.address.$params.maxLength.max}}</p>
                  </div>
                  <div class="col-md-4">
                    <p
                      class="text-info"
                      v-if="$v.address.$dirty "
                      style="direction:rtl"
                    >{{address.length}}/{{$v.address.$params.maxLength.max}}</p>
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
                    @click.prevent="CreateAbout()"
                    class="btn btn-success"
                    :disabled="$v.$invalid"
                  >Create</a>
                  <router-link to="/AboutList" active-class="active" class="btn btn-success">List</router-link>

                  <a @click.prevent="NewAbout()" to="/About" class="btn btn-success">New</a>
                  <a @click="EditeAboutAlert(aboutID)" class="btn btn-success">Edite</a>
                  <a @click="DeleteAboutAlert(aboutID)" class="btn btn-success">Delete</a>

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
                          <a @click="EditeAbout()" class="btn btn-outline-info">Ok</a>
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
                          <a @click="DeleteAbout()" class="btn btn-outline-info">Ok</a>
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

        <p style="display:none">: {{GetAboutWithId.aboutID}}</p>
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
      languge:0,
      aboutID: 0,
      name: '',
      homeDesc :'',
      mobile:'',
      telPhon:'',
      email:'',
      address:'',
      aboutHeader:'',
      aboutTitle:'',
      aboutDescription:'',
      instagramID:'',
      linkdinAddress:'',
      twitterAddress:'',
      facebookAddress:'',
      status: false,
      createdDate:0,

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
    
    GetValidDate(in_date , out_type){
      const strdate = in_date.toString(); 
      if(out_type == 'string'){
        return strdate.substr(0,4) + '-'+strdate.substr(4,2)+'-'+strdate.substr(6,2);
      }
      else if(out_type == 'number'){
        return strdate.split('-')[0] + strdate.split('-')[1]+strdate.split('-')[2];
      }
    },

    CreateAbout() {
      const about = {
        name : this.name,
        homeDesc : this.homeDesc,
       mobile : this.mobile,
       telPhon : this.telPhon,
       email : this.email,
       address : this.address,
       aboutHeader : this.aboutHeader,
       aboutTitle : this.aboutTitle,
       languge : this.languge,
       aboutDescription : this.aboutDescription,
       instagramID : this.instagramID,
       linkdinAddress : this.linkdinAddress,
       twitterAddress : this.twitterAddress,
       facebookAddress : this.facebookAddress,
       status : this.status,
       createdDate :  this.GetValidDate(this.createdDate,'number')
      }; //const
      this.$store.dispatch("Createabout", about);
      this.success = true;
      this.alertMessage="ctreated about successed ";

    },

    EditeAboutAlert(aboutID) {
       if(aboutID >0){
        this.resetAlert();
        this.warning = true;
        this.alertMessage="Are you want to Edite this about?";
       }
    },
    DeleteAboutAlert(aboutID) {
      if(aboutID >0){
        console.log('aboutID : ' + aboutID)
        this.resetAlert();
        this.error = true;
        this.alertMessage="Are you want to Delete this about?" ;
      }
    },

    DeleteAbout() {
      const about = {
        aboutID: this.$route.params.id
      }; //const
      this.$store.dispatch("Deleteabout", about);
      
      this.resetAlert();
      this.success = true;
      this.alertMessage="about success deleted";
      this.NewAbout();
    },

    EditeAbout() {
      const about = {
        name : this.name,
        homeDesc : this.homeDesc,
        mobile : this.mobile,
        telPhon : this.telPhon,
        email : this.email,
        address : this.address,
        aboutHeader : this.aboutHeader,
        aboutTitle : this.aboutTitle,
        languge : this.languge,
        aboutDescription : this.aboutDescription,
        instagramID : this.instagramID,
        linkdinAddress : this.linkdinAddress,
        twitterAddress : this.twitterAddress,
        facebookAddres :  this.facebookAddress,
        status:  this.status,
        CreatedDate : this.GetValidDate(this.createdDate,'number') ,
        aboutID: this.$route.params.id
      }; //const
      this.$store.dispatch("Editeabout", about);
      this.resetAlert();
      this.success = true;
      this.alertMessage="About success edited";
    },

    NewAbout() {
      this.ClickedNew = true;
      this.aboutID = 0;
      this.name = "",
      this.homeDesc = "",
      this.mobile = "",
      this.telPhon = "",
      this.email = "",
      this.address = "",
      this.aboutHeader = "",
      this.aboutTitle = "",
      this.aboutDescription = "",
      this.instagramID = "",
      this.linkdinAddress = "",
      this.twitterAddress = "",
      this.facebookAddress = "",
      this.status= false,
      this.createdDate = 0,
      this.status=false,
      this.title = "Create New About";
      this.$v.$reset();
    }
  }, //methods
  computed: {
    GetAboutWithId() {
      console.log('------------------------------------------------------')
      var retAbout = this.$store.getters.GetaboutWithId;
      console.log(retAbout);
      if(retAbout.createdDate !=undefined){
      this.createdDate =  this.GetValidDate(retAbout.createdDate , 'string') ;
      }

      this.name = retAbout.name,
      this.homeDesc = retAbout.homeDesc,
      this.mobile = retAbout.mobile,
      this.telPhon = retAbout.telPhon,
      this.email = retAbout.email,
      this.languge= retAbout.languge,
      this.address = retAbout.address,
      this.aboutHeader = retAbout.aboutHeader,
      this.aboutTitle = retAbout.aboutTitle,
      this.aboutDescription = retAbout.aboutDescription,
      this.instagramID = retAbout.instagramID,
      this.linkdinAddress = retAbout.linkdinAddress,
      this.twitterAddress = retAbout.twitterAddress,
      this.facebookAddress = retAbout.facebookAddress,
      this.status= retAbout.status,
      this.status = retAbout.status,
      this.aboutID = retAbout.aboutID;
      if (retAbout.aboutID > 0) {
        this.title = "Detail of about for Edite / Delete ";
        this.aboutID = retAbout.aboutID;
      } else {
        this.title = "Create New About ";
      }

      return retAbout;
    } //
  },

  watch: {
    $route() {
      this.$store.dispatch("GetaboutWithIdFromService", {
        aboutID: this.$route.params.id
      });
    }
  }, //

  created() {
     //this.Authenticated = this.$store.getters.IsUserAuthenticated;
     //this.UserFullName =  this.$store.getters.GetUserFullName;
         if(this.$route.params.id >0){
                this.$store.dispatch("GetaboutWithIdFromService", {
      aboutID: this.$route.params.id
    });

         }
  }, //

  validations: {
      name:{
      required,
      maxLength: maxLength(100),
      minLength: minLength(5)
      },
       homeDesc:{
               required,
       maxLength: maxLength(500),
       minLength: minLength(5)

       },
        mobile:{
        maxLength: maxLength(18),
        minLength: minLength(18) 
        },
        telPhon:{
        maxLength: maxLength(18),
        minLength: minLength(18)
        },
        email:{
        email,
        required,
        maxLength: maxLength(50),
        minLength: minLength(5) 
        },
        address:{
        maxLength: maxLength(150),
        minLength: minLength(5) 
        },
        aboutHeader:{
              required,
          maxLength: maxLength(100),
          minLength: minLength(10)
  },
        aboutTitle:{
                required,
        maxLength: maxLength(100),
        minLength: minLength(10)

       },
       aboutDescription:{
               required,
       maxLength: maxLength(500),
       minLength: minLength(10)
       },
       instagramID:{
       maxLength: maxLength(50),
       minLength: minLength(5)
       },
       linkdinAddress:{
       maxLength: maxLength(100),
       minLength: minLength(5)
       },
       twitterAddress:{      
       maxLength: maxLength(100),
       minLength: minLength(5)
       },
       facebookAddress:{
       maxLength: maxLength(100),
       minLength: minLength(5)

       },
       createdDate:{
         required
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
