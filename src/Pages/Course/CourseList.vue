<template>
  <div>
    <!-- -->
    <md-card md-with-hover>
      <md-ripple>
        <div class="panel panel-default">
          <div class="panel-body" style="background-color:#f7f7f9">
            <div class="panel panel-warning" v-if="!ShowPanel">

              <div class="panel-heading">
                <div class="row">
                  <div class="col-md-6">
                    <h2 style="direction:ltr">Show all Course list</h2>
                  </div>
                  <div class="col-md-3">
                    <md-switch v-model="filterPanel">
                      <span class="md-caption">FilterPanel</span>
                    </md-switch>
                  </div>
                  <!-- <div class="col-md-3">
                     <md-switch v-model="ShowPanel" v-on:click="ShowPanel = !ShowPanel">
                       <span class="md-caption">RemovePanel</span>
                     </md-switch>
                   </div>--> 
                </div>
              </div>

              <div class="panel-body">
                <div class="signup-form" style="direction:ltr">
                  <form action="#">
                    <transition enter-active-class="animated fadeIn">
                      <div class="row FilterPanel" v-if="filterPanel">
                        <div class="col-md-12">
                          <table class="table table-hover">
                            <thead class="thead-dark">
                              <tr>
                                <th>
                                  <md-switch 
                                    v-model="CourseNameSwitch"
                                    @change="AllfieldValueSwitch=false"
                                  >CourseName</md-switch>
                                </th>
                                <th>
                                  <md-switch
                                    v-model="CourseDescSwitch"
                                    @change="AllfieldValueSwitch=false"
                                  >CourseDesc</md-switch>
                                </th>
                                <th>
                                  <md-switch
                                    v-model="StatusSwitch"
                                    @change="AllfieldValueSwitch=false"
                                  >Status</md-switch>
                                </th>
                                <th>
                                  <md-switch
                                    v-model="ToolsFileSwitch"
                                    @change="AllfieldValueSwitch=false"
                                  >Tools</md-switch>
                                </th>
                                <th>
                                  <md-switch
                                    v-model="InstituteFileSwitch"
                                    @change="AllfieldValueSwitch=false"
                                  >Institute</md-switch>
                                </th>                                
                                <th>
                                  <md-switch
                                    v-model="LangugeSwitch"
                                    @change="AllfieldValueSwitch=false"
                                  >Languge</md-switch>
                                </th>
                                <th>
                                  <md-switch
                                    v-model="AllfieldValueSwitch"
                                    @change="DisableFiltersObjects($event)"
                                  >Allfield</md-switch>
                                </th>


                              </tr>
                            </thead>
                          </table>
                        </div>
                        
                        <div class="col-md-11">
                          <md-field md-clearable v-if="AllfieldValueSwitch">
                            <label>Please enter value for search in alle field</label>
                            <md-input v-model="AllfieldValue" class="inputstyle"></md-input>
                          </md-field>
                        </div>
                        <div class="col-md-10">
                          <md-field md-clearable v-if="CourseNameSwitch && !AllfieldValueSwitch">
                            <label>CourseName</label>
                            <md-input v-model="CourseName" class="inputstyle"></md-input>
                          </md-field>
                          <md-field md-clearable v-if="CourseDescSwitch && !AllfieldValueSwitch">
                            <label>CourseDesc</label>
                            <md-input v-model="CourseDesc" class="inputstyle"></md-input>
                          </md-field>
                          <md-field md-clearable v-if="StatusSwitch && !AllfieldValueSwitch">
                           <div class="col-md-2"><label>Status:</label></div>
                            <div class="col-md-1"><md-radio v-model="Status" :value="20" ></md-radio>  </div><div class="col-md-1"><label>True</label></div>
                            <div class="col-md-1"><md-radio v-model="Status" :value="10" ></md-radio>  </div><div class="col-md-1"><label>False</label></div>
                            <div class="col-md-1"><md-radio v-model="Status"  @change="Status=''" ></md-radio>  </div><div class="col-md-2"><label>Alle value</label></div>
                          </md-field>
                          <md-field md-clearable v-if="LangugeSwitch && !AllfieldValueSwitch">
                          <div class="col-md-2"><label>Languge:</label></div>
                            <div class="col-md-1"><md-radio v-model="Languge" :value="3" ></md-radio>  </div><div class="col-md-1"><label>Fa</label></div>
                            <div class="col-md-1"><md-radio v-model="Languge" :value="1" ></md-radio>  </div><div class="col-md-1"><label>En</label></div>
                            <div class="col-md-1"><md-radio v-model="Languge" :value="2" ></md-radio>  </div><div class="col-md-1"><label>Deu</label></div>
                            <div class="col-md-1"><md-radio v-model="Languge"  @change="Languge=''" ></md-radio>  </div><div class="col-md-2"><label>Alle value</label></div>
                          </md-field>
                          <md-field md-clearable v-if="ToolsFileSwitch && !AllfieldValueSwitch">
                            <label>Tools</label>
                            <md-input v-model="Tools" class="inputstyle"></md-input>
                          </md-field>
                          <md-field md-clearable v-if="InstituteFileSwitch && !AllfieldValueSwitch">
                            <label>Institute</label>
                            <md-input v-model="Institute" class="inputstyle"></md-input>
                          </md-field>

                        </div>
                      </div>
                    </transition>
                  </form>

                  <table class="table table-hover">
                    <thead class="thead-dark">
                      <tr class="row-fluid">
                        <th scope="col" class="HeaderTableStyle">Row</th>
                        <th scope="col" class="HeaderTableStyle">ID</th>
                       <th scope="col" class="HeaderTableStyle">CourseName</th>
                       <th scope="col" class="HeaderTableStyle">CourseDesc</th>
                       <th scope="col" class="HeaderTableStyle">CreatedDate</th>
                       <th scope="col" class="HeaderTableStyle">Languge</th>
                       <th scope="col" class="HeaderTableStyle">Status</th>
                       <th scope="col" class="HeaderTableStyle">Tools</th>
                       <th scope="col" class="HeaderTableStyle">Institute</th>
                       <th scope="col" class="HeaderTableStyle">#</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(Course, index) in FilterdCourseList" :key="index">
                        <th scope="row">{{index + 1}}</th>
                        <th>{{ Course.courseID}}</th>
                        <td>{{ Course.courseName}}</td>
                        <td>{{ Course.courseDesc}}</td>
                        <td>{{ Course.createdDate}}</td>
                        <td>{{ GetLanguge(Course.languge)}}</td>
                        <td>{{ Course.status}}</td>
                        <td>{{ Course.tools}}</td>
                        <td>{{ Course.institute}}</td>
                        <td>
                          <md-button
                            :to="{ name: 'Course', params: { id: Course.courseID } }"
                            class="md-fab md-mini md-plain"
                          >
                            <md-icon>edit</md-icon>
                          </md-button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="panel-footer panel-warning">
                <nav aria-label="Page navigation">
                  <ul class="pagination">
                    <li>
                      <a @click="ChangePageID(0, 'first')" aria-label="Previous">
                        <span aria-hidden="true">« «</span>
                      </a>
                    </li>

                    <li>
                      <a @click="ChangePageID(0, 'previous')" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                      </a>
                    </li>
                    <li v-for="(item , index) in GetTotalPage  " :key="index">
                      <a @click="ChangePageID(index ,'' )" v-if="index > 0">{{index }}</a>
                    </li>
                    <li>
                      <a @click="ChangePageID(0, 'next')" aria-label="next">
                        <span aria-hidden="true">»</span>
                      </a>
                    </li>
                    <li>
                      <a @click="ChangePageID(0, 'last')" aria-label="last">
                        <span aria-hidden="true">» »</span>
                      </a>
                    </li>
                    <li class="pagecountCountRecordStyle"></li>
                    <li></li>
                    <span class="md-caption pagecountCountRecordStyle">
                      Items per page:
                      <input
                        class="pagecountStyle"
                        type="number"
                        v-model="countPage"
                      />
                    </span>
                    <span class="md-caption">
                      Page:( {{ currentPage }} of {{ GetTotalPage -1 }} )
                      Record:( {{currentPage * countPage - (countPage-1)}} - {{currentPage * countPage}} :{{GetAllCourseCount}} )
                    </span>
                  </ul>
                </nav>
              </div>
            </div>

<br>



          </div>
        </div>
      </md-ripple>
    </md-card>
  </div>
</template>


<script>
import Paginatron from "vue-paginatron";
import vPagination from "vue-plain-pagination";
import VueSlideBar from "vue-slide-bar";

export default {
  data() {
    return {
      name: "RegularCards",
      ShowPanel: false,
      filterPanel: false,
      AllfieldValueSwitch: false,
      CourseNameSwitch: false,
      CourseDescSwitch: false,
      StatusSwitch: false,
      CreatedDateSwitch: false,
      LangugeSwitch: false,
      ToolsFileSwitch: false,
      InstituteFileSwitch: false,
      CourseName: "",
      CourseDesc: "",
      Status: "",
      CreatedDate: "",
      Languge: "",
      Institute: "",
      Tools: "",
      contcactFiltersValue: "",
      AllfieldValue: "",
      currentPage: 1,
      countPage: 6,
      totalPages: 10
    };
  },
  methods: {
    GetFilterValue(pi_value ,pi_type ){
      if(pi_type == "num"){
         if (pi_value == "") {
           return  "000";
         } else if(pi_value != "") {
           return  pi_value
             .toString()
             .toUpperCase();
          }
       }
       else if (pi_type == "str"){
          if (pi_value == "") {
            return  "000";
          } else if(pi_value != "") {
            return  pi_value             
             .toUpperCase();
          }
       }
       else if (pi_type == "lng"){
          if (pi_value == "") {
            return  "000";
          } else if(pi_value != "") {
            return  pi_value
             .toString()            
             .toUpperCase();
          }
       }
       else if (pi_type == "sts"){
          if (pi_value == "10") {
            return "FALSE";
          } else if(pi_value == "20") {
            return "TRUE";
          }else if (pi_value == "") {
            return "000";
          }
       }

    },

    GetLanguge(lng){
     if(lng == 2 )
     return "Deu";
     
     if(lng == 3 )
     return "Fa";
     
     if(lng == 1 )
     return "En";
    },    
    GetLangugeCode(lng){
     if(lng == "DEU" )
     return "2";
     
     if(lng == "FA" )
     return "3";
     
     if(lng == "EN" )
     return "1";

     return "000";
    },


    DisableFiltersObjects() {
      this.CourseNameSwitch = false;
      this.CourseDescSwitch = false;
      this.StatusSwitch = false;
      this.SuffixFileSwitch = false;
      this.LangugeSwitch = false;
      this.ToolsFileSwitch = false;
      this.InstituteFileSwitch = false;
    },
    ChangePageID(pageid, btnClicked) {
      if (btnClicked == "previous") {
        if (this.currentPage == 1) this.currentPage = 1;
        else if (this.currentPage > 1) this.currentPage = this.currentPage - 1;
        this.$store.dispatch(
          "GetCourseByPageIdFromService",
          this.countPage + ";" + this.currentPage
        );
      } else if (btnClicked == "next") {
        if (this.currentPage == this.totalPages - 1)
          this.currentPage = this.totalPages - 1;
        else if (this.currentPage < this.totalPages - 1)
          this.currentPage = this.currentPage + 1;
        this.$store.dispatch(
          "GetCourseByPageIdFromService",
          this.countPage + ";" + this.currentPage
        );
      } else if (btnClicked == "first") {
        this.currentPage = 1;
        this.$store.dispatch(
          "GetCourseByPageIdFromService",
          this.countPage + ";" + 1
        );
      } else if (btnClicked == "last") {
        const curentpage = Number(this.totalPages) - 1;
        this.currentPage = curentpage;
        this.$store.dispatch(
          "GetCourseByPageIdFromService",
          this.countPage + ";" + curentpage
        );
      } else {
        this.currentPage = pageid;
        this.$store.dispatch(
          "GetCourseByPageIdFromService",
          this.countPage + ";" + pageid
        );
      }
    }
  },
  components: {
    vPagination,
    VueSlideBar
  },

  computed: {
    GetCourseByPageId() {
      return this.$store.getters.GetCourseByPageid;
    }, //

    GetAllCourse() {
      return this.$store.getters.GetCourse;
    }, //

    GetTotalPage() {
      const Coursecount = Number(this.GetAllCourseCount);
      const pagecount = Number(this.countPage);
      const paging = Coursecount / pagecount;
      const decimal = Number(
        paging
          .toFixed(2)
          .toString()
          .split(".")[1]
      );
      if (decimal >= 50) {
        this.paging = Number(paging.toFixed()) + 1;
      } else {
        this.paging = Number(paging.toFixed()) + 2;
      }

      this.totalPages = this.paging;
      return this.totalPages;
    }, //

    GetAllCourseCount() {
      return this.$store.getters.GetAllcourseCount;
    }, //

    FilterdCourseList() {
      this.contcactFiltersValue =
        this.CourseName +
        this.Status +
        this.CourseDesc +
        this.Tools +
        this.Languge +
        this.Institute;

      this.allFilterValue = this.AllfieldValue.toUpperCase().toString();

      if(this.GetCourseByPageId.courseID != undefined){
        return null;
      }

      console.log('this.allFilterValue:'+ this.allFilterValue)
      return this.GetCourseByPageId.filter(Element => {
        if (
          this.CourseNameSwitch == false &&
          this.CourseDescSwitch == false &&
          this.StatusSwitch == false &&
          this.LangugeSwitch == false &&
          this.ToolsFileSwitch == false &&
          this.InstituteFileSwitch == false &&
          this.AllfieldValueSwitch == false
        ) {
          return Element;
        } else if (this.AllfieldValueSwitch == true) {
          return (
            Element.courseName.toUpperCase().match(this.allFilterValue) ||
            Element.status
              .toString()
              .toUpperCase()
              .match(this.allFilterValue) ||
            Element.courseDesc.toUpperCase().match(this.allFilterValue) ||
            Element.tools.toUpperCase().match(this.allFilterValue) ||
            Element.institute.toUpperCase().match(this.allFilterValue) ||
            Element.languge.toString()
              .toUpperCase()
              .match(this.GetLangugeCode(this.allFilterValue))
          );
        } else if (this.contcactFiltersValue == "") {
          return Element;
        }else if (this.CourseName =="" && this.Tools == "" && this.Institute==""
         && this.CourseDesc==""  && this.Status=="" && this.Languge==""){
           return Element;
        }


        return (
          Element.courseName.toUpperCase().match(this.GetFilterValue(this.CourseName,'str')) ||
          Element.status.toString()
              .toUpperCase()
              .match(this.GetFilterValue(this.Status,'sts')) ||
          Element.courseDesc.toUpperCase().match(this.GetFilterValue(this.CourseDesc,'str'))||
          Element.tools.toUpperCase().match(this.GetFilterValue(this.Tools,'str'))||
          Element.institute.toUpperCase().match(this.GetFilterValue(this.Institute,'str'))||
          Element.languge.toString()
              .toUpperCase()
              .match(this.GetFilterValue(this.Languge,'lng'))
        );
      });
    } //
  }, //computed
  created() {
    this.$store.dispatch(
      "GetCourseByPageIdFromService",
       this.countPage + ";" + this.currentPage
    );
    this.$store.dispatch("GetAllCourseCountFromService");
  } //created
}; //default
</script>
/*lang="scss"*/
<style  scoped>
.pagecountStyle {
  margin-top: 0px;
  width: 50px;
}
.md-card {
  width: 100%;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

.pagecountCountRecordStyle {
  margin-left: 10px;
}
.RowIdPAding {
  padding-bottom: 20px;
}

.Pading {
  padding-bottom: 5px;
}
  .md-radio {
    display:-ms-flexbox;
  }

</style>



