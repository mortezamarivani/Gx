<template>
  <div>
    <!-- -->
    <md-card md-with-hover>
      <md-ripple>
        <div class="panel panel-default">
          <div class="panel-body" style="background-color:#f7f7f9">


          <div class="panel panel-warning " v-if="!ShowPanel">
              <div class="panel-heading " >
                  <div class="row">

                  <div class="col-md-6">
                    <h2 style="direction:ltr">Show all skills list</h2>
                  </div>
                  <div class="col-md-3">
                    <md-switch v-model="filterPanel"><span class="md-caption">FilterPanel</span> </md-switch>
                  </div>
                  <div class="col-md-3">
                    <md-switch v-model="ShowPanel" v-on:click="ShowPanel = !ShowPanel"><span class="md-caption">RemovePanel</span> </md-switch>
                  </div>

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
                                  <md-switch v-model="SkillsTitleSwitch" @change="AllfieldValueSwitch=false">SkillsTitle</md-switch>
                                </th>
                                <th>
                                  <md-switch v-model="SkillsDescriptionSwitch" @change="AllfieldValueSwitch=false">SkillsDescription</md-switch>
                                </th>
                                <th>
                                  <md-switch v-model="ProgressSwitch" @change="AllfieldValueSwitch=false">Progress</md-switch>
                                </th>
                                <th>
                                  <md-switch v-model="StatusSwitch" @change="AllfieldValueSwitch=false">Status</md-switch>
                                </th>
                                <th>
                                  <md-switch
                                    v-model="LangugeSwitch"
                                    @change="AllfieldValueSwitch=false"
                                  >Languge</md-switch>
                                </th>
                                <th>
                                  <md-switch v-model="AllfieldValueSwitch" @change="DisableFiltersObjects($event)">Allfield</md-switch>
                                </th>
                              </tr>
                            </thead>
                          </table>
                        </div>

                        <div class="col-md-11">
                          <md-field md-clearable v-if="AllfieldValueSwitch">
                            <label>Please enter value for search in alle field</label>
                            <md-input v-model="AllfieldValue" class="inputstyle"></md-input>
                            <!-- <md-textarea  v-model="AllfieldValue" class="inputstyle" md-counter="500"></md-textarea> -->
                          </md-field>
                        </div>
                        <div class="col-md-10">
                          <md-field md-clearable v-if="SkillsTitleSwitch && !AllfieldValueSwitch">
                            <label>skillsTitle</label>
                            <md-input v-model="skillsTitle" class="inputstyle"></md-input>
                          </md-field>
                          <md-field md-clearable v-if="SkillsDescriptionSwitch && !AllfieldValueSwitch">
                            <label>SkillsDescription</label>
                            <md-input v-model="skillsDescription" class="inputstyle"></md-input>
                          </md-field>
                          <md-field md-clearable v-if="ProgressSwitch && !AllfieldValueSwitch">
                            <label>Progress</label>
                            <md-input v-model="progress" class="inputstyle"></md-input>
                          </md-field>
                          <md-field md-clearable v-if="StatusSwitch && !AllfieldValueSwitch">
                           <div class="col-md-2"><label>Status:</label></div>
                            <div class="col-md-1"><md-radio v-model="status" :value="20" ></md-radio>  </div><div class="col-md-1"><label>True</label></div>
                            <div class="col-md-1"><md-radio v-model="status" :value="10" ></md-radio>  </div><div class="col-md-1"><label>False</label></div>
                            <div class="col-md-1"><md-radio v-model="status"  @change="status=''" ></md-radio>  </div><div class="col-md-2"><label>Alle value</label></div>
                          </md-field>
                          <md-field md-clearable v-if="LangugeSwitch && !AllfieldValueSwitch">
                          <div class="col-md-2"><label>Languge:</label></div>
                            <div class="col-md-1"><md-radio v-model="languge" :value="3" ></md-radio>  </div><div class="col-md-1"><label>Fa</label></div>
                            <div class="col-md-1"><md-radio v-model="languge" :value="1" ></md-radio>  </div><div class="col-md-1"><label>En</label></div>
                            <div class="col-md-1"><md-radio v-model="languge" :value="2" ></md-radio>  </div><div class="col-md-1"><label>Deu</label></div>
                            <div class="col-md-1"><md-radio v-model="languge"  @change="languge=''" ></md-radio>  </div><div class="col-md-2"><label>Alle value</label></div>
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
                        <th class="HeaderTableStyle">SkillsTitle</th>
                        <th scope="col" class="HeaderTableStyle">SkillsDescription</th>
                        <th scope="col" class="HeaderTableStyle">BootstarpClassName</th>
                        <th scope="col" class="HeaderTableStyle">Progress</th>
                        <th scope="col" class="HeaderTableStyle">Languge</th>
                        <th scope="col" class="HeaderTableStyle">Status</th>
                        <th scope="col" class="HeaderTableStyle">#</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(skills, index) in FilterdSkillsList" :key="index">
                        <th scope="row">{{index + 1}}</th>
                        <th>{{skills.skillsID}}</th>
                        <td>{{ skills.skillsTitle}}</td>
                        <td>{{ skills.skillsDescription}}</td>
                        <td>{{ skills.bootstarpClassName}}</td>
                        <td>{{ skills.progress}}</td>
                        <td>{{ GetLanguge(skills.languge)}}</td>
                        <td>{{ skills.status}}</td>
                        <td>
                          <md-button
                            :to="{ name: 'Skills', params: { id: skills.skillsID } }"
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

              <div class="panel-footer panel-warning" >
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
                          <input class="pagecountStyle" type="number" v-model="countPage" />
                        </span>
                        <span class="md-caption">
                          Page:( {{ currentPage }} of {{ GetTotalPage -1 }} )
                          Record:( {{currentPage * countPage - (countPage-1)}} - {{currentPage * countPage}} :{{GetAllskillsCount}} )
                        </span>
                      </ul>
                      </nav>

              </div>
           </div>


            <div v-if="ShowPanel">
            
                <div class="row">
                  <div class="col-md-6">
                    <h2 style="direction:ltr">Show all skills list</h2>
                  </div>
                  <div class="col-md-3">
                    <md-switch v-model="filterPanel"><span class="md-caption">FilterPanel</span> </md-switch>
                  </div>
                  <div class="col-md-3">
                    <md-switch v-model="ShowPanel" v-on:click="ShowPanel = !ShowPanel"><span class="md-caption">ShowPanel</span> </md-switch>
                  </div>
                </div>

                <div class="signup-form" style="direction:ltr">
                  <form action="#">
                    <transition enter-active-class="animated fadeIn">
                      <div class="row FilterPanel" v-if="filterPanel">
                        <div class="col-md-12">
                          <table class="table table-hover">
                            <thead class="thead-dark">
                              <tr>
                                <th>
                                  <md-switch v-model="SkillsTitleSwitch" @change="AllfieldValueSwitch=false">SkillsTitle</md-switch>
                                </th>
                                <th>
                                  <md-switch v-model="SkillsDescriptionSwitch" @change="AllfieldValueSwitch=false">SkillsDescription</md-switch>
                                </th>
                                <th>
                                  <md-switch v-model="BootstarpClassNameSwitch " @change="AllfieldValueSwitch=false">BootstarpClassName</md-switch>
                                </th>
                                <th>
                                  <md-switch v-model="ProgressSwitch" @change="AllfieldValueSwitch=false">Progress</md-switch>
                                </th>
                                <th>
                                  <md-switch v-model="StatusSwitch" @change="AllfieldValueSwitch=false">Status</md-switch>
                                </th>
                                <th>
                                  <md-switch v-model="AllfieldValueSwitch" @change="DisableFiltersObjects($event)">Allfield</md-switch>
                                </th>
                              </tr>
                            </thead>
                          </table>
                        </div>

                        <div class="col-md-11">
                          <md-field md-clearable v-if="AllfieldValueSwitch">
                            <label>Please enter value for search in alle field</label>
                            <md-input v-model="AllfieldValue" class="inputstyle"></md-input>
                            <!-- <md-textarea  v-model="AllfieldValue" class="inputstyle" md-counter="500"></md-textarea> -->
                          </md-field>
                        </div>
                        <div class="col-md-10">
                          <md-field md-clearable v-if="SkillsTitleSwitch && !AllfieldValueSwitch">
                            <label>skillsTitle</label>
                            <md-input v-model="skillsTitle" class="inputstyle"></md-input>
                          </md-field>
                          <md-field md-clearable v-if="SkillsDescriptionSwitch && !AllfieldValueSwitch">
                            <label>SkillsDescription</label>
                            <md-input v-model="skillsDescription" class="inputstyle"></md-input>
                          </md-field>
                          <md-field md-clearable v-if="ProgressSwitch && !AllfieldValueSwitch">
                            <label>Progress</label>
                            <md-input v-model="progress" class="inputstyle"></md-input>
                          </md-field>
                          <md-field
                            md-clearable
                            v-if="BootstarpClassNameSwitch && !AllfieldValueSwitch"
                          >
                            <label> BootstarpClassName</label>
                            <md-input v-model="bootstarpClassName" class="inputstyle"></md-input>
                          </md-field>
                          <md-field md-clearable v-if="StatusSwitch && !AllfieldValueSwitch">
                            <label>Status</label>
                            <md-input v-model="status" class="inputstyle"></md-input>
                          </md-field>
                        </div>
                      </div>
                    </transition>
                  </form>

                  <table class="table table-hover">
                    <thead class="thead-dark">
                      <tr class="row-fluid">
                        <th class="HeaderTableStyle" scope="col">Row</th>
                        <th class="HeaderTableStyle" scope="col">ID</th>
                        <th class="HeaderTableStyle">SkillsTitle</th>
                        <th class="HeaderTableStyle" scope="col">SkillsDescription</th>
                        <th class="HeaderTableStyle" scope="col">BootstarpClassName</th>
                        <th class="HeaderTableStyle" scope="col">Progress</th>
                        <th class="HeaderTableStyle" scope="col">Status</th>
                        <th class="HeaderTableStyle" scope="col">#</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(skills, index) in FilterdSkillsList" :key="index">
                        <th scope="row" >{{index + 1}}</th>
                        <th>{{skills.skillsID}}</th>
                        <td>{{ skills.skillsTitle}}</td>
                        <td>{{ skills.skillsDescription}}</td>
                        <td>{{ skills.bootstarpClassName}}</td>
                        <td>{{ skills.progress}}</td>
                        <td>{{ skills.status}}</td>
                        <td>
                         <md-button
                            :to="{ name: 'Skills', params: { id: skills.skillsID } }"
                            class="md-fab md-mini md-plain"
                          > 
                            <md-icon>edit</md-icon>
                          </md-button>
                        </td>
                      </tr>
                    </tbody>
                  </table>

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
                        <input class="pagecountStyle" type="number" v-model="countPage" />
                      </span>
                      <span class="md-caption">
                        Page:( {{ currentPage }} of {{ GetTotalPage -1 }} )
                        Record:( {{currentPage * countPage - (countPage-1)}} - {{currentPage * countPage}} :{{GetAllskillsCount}} )
                      </span>
                    </ul>
                  </nav>
                </div>
             </div>

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
      ShowPanel :false,
      filterPanel: false,
      AllfieldValueSwitch: false,
      SkillsTitleSwitch: false,
      SkillsDescriptionSwitch: false,
      LangugeSwitch: false,
      ProgressSwitch: false,
      StatusSwitch: false,
      skillsTitle: "",
      skillsDescription: "",
      bootstarpClassName: "",
      progress: "",
      status: "",
      languge:"",
      contcactFiltersValue:"",
      AllfieldValue: "",
      currentSort: "SkillsTitle",
      currentSortDir: "asc",
      currentPage: 1,
      countPage: 6,
      totalPages: 10,
      slider: {
        lineHeight: 20,
        processStyle: {
          backgroundColor: "#f50286"
        }
      }
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

    DisableFiltersObjects(){
        this.SkillsTitleSwitch = false;
        this.SkillsDescriptionSwitch = false;
        this.StatusSwitch = false;
        this.LangugeSwitch = false;
        this.ProgressSwitch = false;
    },
    ChangePageID(pageid, btnClicked) {
      if (btnClicked == "previous") {
        if (this.currentPage == 1) this.currentPage = 1;
        else if (this.currentPage > 1) this.currentPage = this.currentPage - 1;
        this.$store.dispatch(
          "GetSkillsByPageIdFromService",
          this.countPage + ";" + this.currentPage
        );
      } else if (btnClicked == "next") {
        if (this.currentPage == this.totalPages - 1)
          this.currentPage = this.totalPages - 1;
        else if (this.currentPage < this.totalPages - 1)
          this.currentPage = this.currentPage + 1;
        this.$store.dispatch(
          "GetSkillsByPageIdFromService",
          this.countPage + ";" + this.currentPage
        );
      } else if (btnClicked == "first") {
        this.currentPage = 1;
        this.$store.dispatch(
          "GetSkillsByPageIdFromService",
          this.countPage + ";" + 1
        );
      } else if (btnClicked == "last") {
        const curentpage = Number(this.totalPages) - 1;
        this.currentPage = curentpage;
        this.$store.dispatch(
          "GetSkillsByPageIdFromService",
          this.countPage + ";" + curentpage
        );
      } else {
        this.currentPage = pageid;
        this.$store.dispatch(
          "GetSkillsByPageIdFromService",
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

    GetSkillsByPageId() {
      return this.$store.getters.GetSkillsByPageId;
    }, //

    GetAllSkills() {
      return this.$store.getters.Getskills;
    }, //

    GetTotalPage() {
      const skillscount = Number(this.GetAllskillsCount);
      const pagecount = Number(this.countPage);
      const paging = skillscount / pagecount;
      console.log("paging : " + paging);
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
      console.log("paging : " + this.paging);

      this.totalPages = this.paging;
      return this.totalPages;
    }, //

    GetAllskillsCount() {
      return this.$store.getters.GetAllskillsCount;
    }, //

    FilterdSkillsList() {
      this.contcactFiltersValue = this.skillsTitle + this.progress+this.status
      +this.bootstarpClassName+this.skillsDescription+this.languge;

      if(this.GetSkillsByPageId.skillsID != undefined){
        return null;
      }

      this.allFilterValue = this.AllfieldValue.toUpperCase().toString();
      return this.GetSkillsByPageId.filter(Element => {
        if (
          this.SkillsTitleSwitch == false &&
          this.SkillsDescriptionSwitch == false &&
          this.StatusSwitch == false &&
          this.LangugeSwitch == false &&
          this.ProgressSwitch == false &&
          this.AllfieldValueSwitch == false
        ) {
          return Element;
        } else if (this.AllfieldValueSwitch == true) {
          return (
            Element.skillsTitle.toUpperCase().match(this.allFilterValue) ||
            Element.progress.toString().match(this.allFilterValue) ||
            Element.status
              .toString()
              .toUpperCase()
              .match(this.allFilterValue) ||
            Element.skillsDescription
              .toUpperCase()
              .match(this.allFilterValue) ||
            Element.languge.toString().toUpperCase().match(this.GetLangugeCode(this.allFilterValue)) 
          );
        }
        else if (this.contcactFiltersValue =='' ){
              return Element;
        }else if (this.skillsTitle =="" && this.progress == "" && this.status==""
         && this.skillsDescription==""  && this.languge==""){
           return Element;
        }
        

        return (
          Element.skillsTitle.toUpperCase().match(this.GetFilterValue(this.skillsTitle,'str')) ||
          Element.progress.toString().match(this.GetFilterValue(this.progress,'num')) ||
          Element.status
            .toString()
            .toUpperCase()
            .match(this.GetFilterValue(this.status,'sts')) ||
          Element.skillsDescription
            .toUpperCase()
            .match(this.GetFilterValue(this.skillsDescription,'str')) ||
          Element.languge.toString()
            .toUpperCase()
            .match(this.GetFilterValue(this.languge,'lng'))
        );
      });
    } //
  }, //computed
  created() {
    this.$store.dispatch(
      "GetSkillsByPageIdFromService",
      this.countPage + ";" + this.currentPage
    );
    //this.totalPages = this.$store.dispatch("GetSkillsCountFromService");
    this.totalPages = this.$store.dispatch("GetAllSkillsCountFromService");
  } //created
}; //default
</script>
/*lang="scss"*/
<style scoped>
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



</style>



