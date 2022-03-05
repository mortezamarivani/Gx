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
                    <h2 style="direction:ltr">Show all ReciveInfo list</h2>
                  </div>
                  <div class="col-md-3">
                    <md-switch v-model="filterPanel">
                      <span class="md-caption">FilterPanel</span>
                    </md-switch>
                  </div>
                  <div class="col-md-3">
                    <md-switch v-model="ShowPanel" v-on:click="ShowPanel = !ShowPanel">
                      <span class="md-caption">RemovePanel</span>
                    </md-switch>
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
                                  <md-switch 
                                    v-model="SenderNameSwitch"
                                    @change="AllfieldValueSwitch=false"
                                  >SenderName</md-switch>
                                </th>
                                <th>
                                  <md-switch
                                    v-model="SenderEmailSwitch"
                                    @change="AllfieldValueSwitch=false"
                                  >SenderEmail</md-switch>
                                </th>
                                <th>
                                  <md-switch
                                    v-model="CreatedDateSwitch "
                                    @change="AllfieldValueSwitch=false"
                                  >CreatedDate</md-switch>
                                </th>
                                <th>
                                  <md-switch
                                    v-model="StatusSwitch"
                                    @change="AllfieldValueSwitch=false"
                                  >Status</md-switch>
                                </th>
                                <th>
                                  <md-switch
                                    v-model="ReciveMessageSwitch"
                                    @change="AllfieldValueSwitch=false"
                                  >ReciveMessage</md-switch>
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
                          <md-field md-clearable v-if="SenderNameSwitch && !AllfieldValueSwitch">
                            <label>SenderName</label>
                            <md-input v-model="SenderName" class="inputstyle"></md-input>
                          </md-field>
                          <md-field md-clearable v-if="SenderEmailSwitch && !AllfieldValueSwitch">
                            <label>SenderEmail</label>
                            <md-input v-model="SenderEmail" class="inputstyle"></md-input>
                          </md-field>
                          <md-field md-clearable v-if="CreatedDateSwitch && !AllfieldValueSwitch">
                            <label>CreatedDate</label>
                            <md-input v-model="CreatedDate" class="inputstyle"></md-input>
                          </md-field>
                          <md-field md-clearable v-if="StatusSwitch && !AllfieldValueSwitch">
                            <label>Status</label>
                            <md-input v-model="Status" class="inputstyle"></md-input>
                          </md-field>
                          <md-field md-clearable v-if="ReciveMessageSwitch && !AllfieldValueSwitch">
                            <label>ReciveMessage</label>
                            <md-input v-model="ReciveMessage" class="inputstyle"></md-input>
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
                        <th scope="col" class="HeaderTableStyle">SenderName</th>
                        <th scope="col" class="HeaderTableStyle">SenderEmail</th>
                        <th scope="col" class="HeaderTableStyle">CreatedDate</th>
                        <th scope="col" class="HeaderTableStyle">ReciveMessage</th>
                        <th scope="col" class="HeaderTableStyle">Status</th>
                        <th scope="col" class="HeaderTableStyle">#</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(ReciveInfo, index) in FilterdReciveInfoList" :key="index">
                        <th scope="row">{{index + 1}}</th>
                        <th>{{ ReciveInfo.reciveInfoID}}</th>
                        <td>{{ ReciveInfo.senderName}}</td>
                        <td>{{ ReciveInfo.senderEmail}}</td>
                        <td>{{ ReciveInfo.createdDate}}</td>
                        <td>{{ ReciveInfo.reciveMessage}}</td>
                        <td>{{ ReciveInfo.status}}</td>
                        <td>
                          <md-button
                            :to="{ name: 'ReciveInfo', params: { id: ReciveInfo.reciveInfoID } }"
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
                      Record:( {{currentPage * countPage - (countPage-1)}} - {{currentPage * countPage}} :{{GetAllReciveInfoCount}} )
                    </span>
                  </ul>
                </nav>
              </div>

            </div>

            <br>

            <div  v-if="ShowPanel">
                <div class="row">
                  <div class="col-md-6">
                    <h2 style="direction:ltr">Show all ReciveInfo list</h2>
                  </div>
                  <div class="col-md-3">
                    <md-switch v-model="filterPanel">
                      <span class="md-caption">FilterPanel</span>
                    </md-switch>
                  </div>
                  <div class="col-md-3">
                    <md-switch v-model="ShowPanel" v-on:click="ShowPanel = !ShowPanel">
                      <span class="md-caption">ShowePanel</span>
                    </md-switch>
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
                                    v-model="SenderNameSwitch"
                                    @change="AllfieldValueSwitch=false"
                                  >SenderName</md-switch>
                                </th>
                                <th>
                                  <md-switch
                                    v-model="SenderEmailSwitch"
                                    @change="AllfieldValueSwitch=false"
                                  >SenderEmail</md-switch>
                                </th>
                                <th>
                                  <md-switch
                                    v-model="CreatedDateSwitch "
                                    @change="AllfieldValueSwitch=false"
                                  >CreatedDate</md-switch>
                                </th>
                                <th>
                                  <md-switch
                                    v-model="StatusSwitch"
                                    @change="AllfieldValueSwitch=false"
                                  >Status</md-switch>
                                </th>
                                <th>
                                  <md-switch
                                    v-model="ReciveMessageSwitch"
                                    @change="AllfieldValueSwitch=false"
                                  >ReciveMessage</md-switch>
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
                          <md-field md-clearable v-if="SenderNameSwitch && !AllfieldValueSwitch">
                            <label>SenderName</label>
                            <md-input v-model="SenderName" class="inputstyle"></md-input>
                          </md-field>
                          <md-field md-clearable v-if="SenderEmailSwitch && !AllfieldValueSwitch">
                            <label>SenderEmail</label>
                            <md-input v-model="SenderEmail" class="inputstyle"></md-input>
                          </md-field>
                          <md-field md-clearable v-if="CreatedDateSwitch && !AllfieldValueSwitch">
                            <label>CreatedDate</label>
                            <md-input v-model="CreatedDate" class="inputstyle"></md-input>
                          </md-field>
                          <md-field md-clearable v-if="StatusSwitch && !AllfieldValueSwitch">
                            <label>Status</label>
                            <md-input v-model="Status" class="inputstyle"></md-input>
                          </md-field>
                          <md-field md-clearable v-if="ReciveMessageSwitch && !AllfieldValueSwitch">
                            <label>ReciveMessage</label>
                            <md-input v-model="ReciveMessage" class="inputstyle"></md-input>
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
                        <th scope="col" class="HeaderTableStyle">SenderName</th>
                        <th scope="col" class="HeaderTableStyle">SenderEmail</th>
                        <th scope="col" class="HeaderTableStyle">CreatedDate</th>
                        <th scope="col" class="HeaderTableStyle">ReciveMessage</th>
                        <th scope="col" class="HeaderTableStyle">Status</th>
                        <th scope="col" class="HeaderTableStyle">#</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(ReciveInfo, index) in FilterdReciveInfoList" :key="index">
                        <th scope="row">{{index + 1}}</th>
                        <th>{{ ReciveInfo.reciveInfoID}}</th>
                        <td>{{ ReciveInfo.senderName}}</td>
                        <td>{{ ReciveInfo.senderEmail}}</td>
                        <td>{{ ReciveInfo.createdDate}}</td>
                        <td>{{ ReciveInfo.reciveMessage}}</td>
                        <td>{{ ReciveInfo.status}}</td>
                        <td>
                          <md-button
                            :to="{ name: 'ReciveInfo', params: { id: ReciveInfo.reciveInfoID } }"
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

                <nav aria-label="Page navigation">
                  <ul class="pagination">
                    <li>
                      <a @click="ChangePageID(0, 'first')" aria-label="Previous">
                        <span aria-hidden="true">««</span>
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
                        <span aria-hidden="true" > »»</span>
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
                      Record:( {{currentPage * countPage - (countPage-1)}} - {{currentPage * countPage}} :{{GetAllReciveInfoCount}} )
                    </span>
                  </ul>
                </nav>

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
      ShowPanel: false,
      filterPanel: false,
      AllfieldValueSwitch: false,

      SenderNameSwitch: false,
      SenderEmailSwitch: false,
      StatusSwitch: false,
      CreatedDateSwitch: false,
      ReciveMessageSwitch : false,
      SenderName: "",
      SenderEmail: "",
      Status: "",
      CreatedDate: "",
      ReciveMessage: "",
      contcactFiltersValue: "",
      SenderNameFilterValue: "",
      SenderEmailFilterValue: "",
      StatusFilterValue: "",
      CreatedDateFilterValue: "",
      ReciveMessageFilterValue: "",
      AllfieldValue: "",
      currentPage: 1,
      countPage: 6,
      totalPages: 10
    };
  },
  methods: {
    DisableFiltersObjects() {
      this.SenderNameSwitch= false,
      this.SenderEmailSwitch= false,
      this.StatusSwitch= false,
      this.CreatedDateSwitch= false,
      this.ReciveMessageSwitch = false
    },
    ChangePageID(pageid, btnClicked) {
      if (btnClicked == "previous") {
        if (this.currentPage == 1) this.currentPage = 1;
        else if (this.currentPage > 1) this.currentPage = this.currentPage - 1;
        this.$store.dispatch(
          "GetReciveInfoByPageIdFromService",
          this.countPage + ";" + this.currentPage
        );
      } else if (btnClicked == "next") {
        if (this.currentPage == this.totalPages - 1)
          this.currentPage = this.totalPages - 1;
        else if (this.currentPage < this.totalPages - 1)
          this.currentPage = this.currentPage + 1;
        this.$store.dispatch(
          "GetReciveInfoByPageIdFromService",
          this.countPage + ";" + this.currentPage
        );
      } else if (btnClicked == "first") {
        this.currentPage = 1;
        this.$store.dispatch(
          "GetReciveInfoByPageIdFromService",
          this.countPage + ";" + 1
        );
      } else if (btnClicked == "last") {
        const curentpage = Number(this.totalPages) - 1;
        this.currentPage = curentpage;
        this.$store.dispatch(
          "GetReciveInfoByPageIdFromService",
          this.countPage + ";" + curentpage
        );
      } else {
        this.currentPage = pageid;
        this.$store.dispatch(
          "GetReciveInfoByPageIdFromService",
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
    GetReciveInfoByPageId() {
      return this.$store.getters.GetReciveInfoByPageid;
    }, //

    GetAllReciveInfo() {
      return this.$store.getters.GetReciveInfo;
    }, //

    GetTotalPage() {
      const ReciveInfocount = Number(this.GetAllReciveInfoCount);
      const pagecount = Number(this.countPage);
      const paging = ReciveInfocount / pagecount;
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

    GetAllReciveInfoCount() {
      return this.$store.getters.GetAllreciveInfoCount;
    }, //

    FilterdReciveInfoList() {
       this.contcactFiltersValue =
         this.SenderName +
         this.Status +
         this.CreatedDate +
         this.SenderEmail +
         this.ReciveMessage 

       this.allFilterValue = this.AllfieldValue.toUpperCase().toString();

       if(this.GetReciveInfoByPageId.reciveInfoID != undefined){
         return null;
       }

      return this.GetReciveInfoByPageId.filter(Element => {
        if (
          this.SenderNameSwitch == false &&
          this.SenderEmailSwitch == false &&
          this.StatusSwitch == false &&
          this.CreatedDateSwitch == false &&
          this.ReciveMessageSwitch == false &&
          this.AllfieldValueSwitch == false
        ) {
          console.log(Element);
          return Element;
        } else if (this.AllfieldValueSwitch == true) {
          console.log('this.AllfieldValueSwitch == true');

          return (
            Element.senderName.toUpperCase().match(this.allFilterValue) ||
            Element.reciveMessage.toString().match(this.allFilterValue) ||
            Element.status
              .toString()
              .toUpperCase()
              .match(this.allFilterValue) ||
            Element.senderEmail.toUpperCase().match(this.allFilterValue) ||
            Element.createdDate
              .toString()
              .toUpperCase()
              .match(this.allFilterValue)
          );
        } else if (this.contcactFiltersValue == "") {
          console.log('this.contcactFiltersValue == ""');
          return Element;
        }

        if (this.SenderName == "" ) {
          this.SenderNameFilterValue = "000";
        } else if(this.SenderName != "") {
          this.SenderNameFilterValue = this.SenderName.toUpperCase();
        }

       if (this.SenderEmail == "" ) {
         this.SenderEmailFilterValue = "000";
       } else if(this.SenderEmail != ""){
         this.SenderEmailFilterValue = this.SenderEmail.toUpperCase();
       }
       if (this.ReciveMessage == "") {
         this.ReciveMessageFilterValue = "000";
       } else if(this.ReciveMessage != "") {
         this.ReciveMessageFilterValue = this.ReciveMessage.toUpperCase();
       }
      if (this.Status == "") {
        this.StatusFilterValue = "000";
      } else if(this.Status != "") {
        this.StatusFilterValue = this.Status.toString().toUpperCase();
      }
       if (this.CreatedDate == "") {
         this.CreatedDateFilterValue = "000";
       } else if(this.CreatedDate != "") {
         this.CreatedDateFilterValue = this.CreatedDate
           .toString()
           .toUpperCase();
       }

        return (
          Element.senderName.toUpperCase().match(this.SenderNameFilterValue) ||
          Element.reciveMessage.toUpperCase().match(this.ReciveMessageFilterValue) ||
          Element.status
              .toString()
              .toUpperCase()
              .match(this.StatusFilterValue) ||
          Element.senderEmail.trim().toUpperCase().match(this.SenderEmailFilterValue)||
          Element.createdDate
              .toString()
              .toUpperCase()
              .match(this.CreatedDateFilterValue)
        );
      });
    } //
  }, //computed
  created() {
    this.$store.dispatch(
      "GetReciveInfoByPageIdFromService",
      this.countPage + ";" + this.currentPage
    );
    this.$store.dispatch("GetAllreciveInfoCountFromService");
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

</style>



