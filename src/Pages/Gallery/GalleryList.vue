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
                    <h2 style="direction:ltr">Show all Shop list</h2>
                  </div>
                  <div class="col-md-3">
                    <md-switch v-model="filterPanel">
                      <span class="md-caption">FilterPanel</span>
                    </md-switch>
                  </div>
                  <div class="col-md-3">
                    <md-switch v-model="moreFileds">
                      <span class="md-caption">Show More Fileds</span>
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
                                    v-model="TitleSwitch"
                                    @change="AllfieldValueSwitch=false"
                                  >Title</md-switch>
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
                          <md-field md-clearable v-if="TitleSwitch && !AllfieldValueSwitch">
                            <label>Title</label>
                            <md-input v-model="Title" class="inputstyle"></md-input>
                          </md-field>

                        </div>
                      </div>
                    </transition>
                  </form>

                  <table class="table table-hover">
                    <thead class="thead-dark">
                      <tr class="row-fluid">
                        <th scope="col" v-if="moreFileds" class="HeaderTableStyle">Row</th>
                        <th scope="col" v-if="moreFileds" class="HeaderTableStyle">ID</th>
                       <th scope="col" class="HeaderTableStyle">Title</th>
                       <th scope="col" v-if="moreFileds" class="HeaderTableStyle">Description</th>
                       <th scope="col" v-if="moreFileds" class="HeaderTableStyle">Status</th>
                       <th scope="col" v-if="moreFileds" class="HeaderTableStyle">#</th>
                      </tr>
                    </thead>
                   
                    <tbody>
                      <tr v-for="(Shop, index) in FilterdShopList" :key="index">
                        <th scope="row" v-if="moreFileds">{{index + 1}}</th>
                        <th v-if="moreFileds">{{ Shop.fldShpoListID}}</th>
                        <td >
                        
                         <md-button v-if="!moreFileds"
                            :to="{ name: 'Shop', params: { id: Shop.fldShpoListID } }"
                            class="md-fab md-mini md-plain"
                          >
                            <md-icon>edit</md-icon>
                          </md-button>
                          <md-button v-if="!moreFileds" class="md-fab md-mini md-primary"
                          :to="{ name: 'ShopDetailList', params: { id: Shop.fldShpoListID } }"
                          >
                          <md-icon>add</md-icon>
                        </md-button>
                        {{ Shop.fldTitle}}

                        </td>
                        <td v-if="moreFileds">{{ Shop.fldDescription}}</td>
                        <td v-if="moreFileds">{{ Shop.fldStatus}}</td>
                        <td v-if="moreFileds">
                         <md-button
                            :to="{ name: 'Shop', params: { id: Shop.fldShpoListID } }"
                            class="md-fab md-mini md-plain"
                          >
                            <md-icon>edit</md-icon>
                          </md-button>
                          <md-button class="md-fab md-mini md-primary">
                          <md-icon>add</md-icon>
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
                      Record:( {{currentPage * countPage - (countPage-1)}} - {{currentPage * countPage}} :{{GetAllShopListCount}} )
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
      ShowPanel: false,
      filterPanel: false,
      moreFileds : false,
      AllfieldValueSwitch: false,
      TitleSwitch: false,
      Title: "",
      Status: "",
      Languge: "",
      Institute: "",
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
      this.TitleSwitch = false;
    },
    ChangePageID(pageid, btnClicked) {
      if (btnClicked == "previous") {
        if (this.currentPage == 1) this.currentPage = 1;
        else if (this.currentPage > 1) this.currentPage = this.currentPage - 1;
        this.$store.dispatch(
          "GetShopListByPageIdFromService",
          this.countPage + ";" + this.currentPage
        );
      } else if (btnClicked == "next") {
        if (this.currentPage == this.totalPages - 1)
          this.currentPage = this.totalPages - 1;
        else if (this.currentPage < this.totalPages - 1)
          this.currentPage = this.currentPage + 1;
        this.$store.dispatch(
          "GetShopListByPageIdFromService",
          this.countPage + ";" + this.currentPage
        );
      } else if (btnClicked == "first") {
        this.currentPage = 1;
        this.$store.dispatch(
          "GetShopListByPageIdFromService",
          this.countPage + ";" + 1
        );
      } else if (btnClicked == "last") {
        const curentpage = Number(this.totalPages) - 1;
        this.currentPage = curentpage;
        this.$store.dispatch(
          "GetShopListByPageIdFromService",
          this.countPage + ";" + curentpage
        );
      } else {
        this.currentPage = pageid;
        this.$store.dispatch(
          "GetShopListByPageIdFromService",
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
    GetShopListByPageId() {
      console.log("-------------------computed 1----------------")
      //console.log(this.$store.getters.GetShopListByPageid)

      return this.$store.getters.GetShopListByPageid;

    }, //

    GetAllShopList() {
      return this.$store.getters.GetShopList;
    }, //

    GetTotalPage() {
      const ShopListcount = Number(this.GetAllShopListCount);
      const pagecount = Number(this.countPage);
      const paging = ShopListcount / pagecount;
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

    GetAllShopListCount() {
      return this.$store.getters.GetAllshopListCount;
    }, //

    FilterdShopList() {
      this.contcactFiltersValue = this.Title ;
      this.allFilterValue = this.AllfieldValue.toUpperCase().toString();

      console.log('--------FilterdShopList---GetShopListByPageId.fldShpoListID----')
      console.log(this.GetShopListByPageId.fldShpoListID)

      if(this.GetShopListByPageId.fldShpoListID != undefined){
        return null;
      }

      return this.GetShopListByPageId.filter(Element => {
        if (
          this.TitleSwitch == false && this.AllfieldValueSwitch == false
        ) 
        {
          return Element;
        } else if (this.AllfieldValueSwitch == true) {
          return (
            Element.fldTitle.toUpperCase().match(this.allFilterValue) ||
            Element.fldstatus
              .toString()
              .toUpperCase()
              .match(this.allFilterValue)  );
        } else if (this.contcactFiltersValue == "") {
          return Element;
        }else if (this.fldTitle =="" && this.fldStatus==""){
           return Element;
        }




        return (
          Element.fldTitle.toUpperCase().match(this.GetFilterValue(this.Title,'str')) ||
          Element.fldstatus.toString()
              .toUpperCase()
              .match(this.GetFilterValue(this.Status,'sts'))
        );
      });
    } //
  }, //computed

  created() {
   
    this.$store.dispatch(
      "GetShopListByPageIdFromService",
       this.countPage + ";" + this.currentPage
      
    );
    this.$store.dispatch("GetAllShopListCountFromService");

   
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



