<template>
  <div>
    <!-- -->
    <md-card >

        <div class="panel panel-default">
          <div class="panel-body" style="background-color:#f7f7f9">
            <div class="panel panel-warning" >

              <div class="panel-heading">
                <div class="row">
                  <div class="col-md-6">
                    <h2 style="direction:ltr">Show all Shop list</h2>
                  </div>
                </div>
              </div>

              <div class="panel-body">
                <div class="signup-form" style="direction:ltr">
                  <form action="#">
                    <transition enter-active-class="animated fadeIn">
                    
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
                      <tr v-for="(Shop, index) in GetAllShop" :key="index">
                         <th scope="row" v-if="moreFileds">{{index + 1}}</th>
                        <th v-if="moreFileds">{{ Shop.fldShopListID}}</th>
                        <td >
                        
                         <md-button v-if="!moreFileds"
                            :to="{ name: 'Shop', params: { id: Shop.fldShopListID } }"
                            class="md-fab md-mini md-plain"
                          >
                            <md-icon>edit</md-icon>
                          </md-button>
                          <md-button v-if="!moreFileds" class="md-fab md-mini md-primary"
                          :to="{ name: 'ShopDetailList', params: { id: Shop.fldShopListID } }"
                          >
                          <md-icon>add</md-icon>
                        </md-button>
                        {{ Shop.fldTitle}}

                        </td>
                        <td v-if="moreFileds">{{ Shop.fldDescription}}</td>
                        <td v-if="moreFileds">{{ Shop.fldStatus}}</td>
                        <td v-if="moreFileds">
                         <md-button
                            :to="{ name: 'Shop', params: { id: Shop.fldShopListID } }"
                            class="md-fab md-mini md-plain"
                          >
                            <md-icon>edit</md-icon>
                          </md-button>
                          <md-button class="md-fab md-mini md-primary">
                          <md-icon>add</md-icon>
                        </md-button>

                        </td>
                      </tr>
                       <md-button  class="md-fab md-mini md-primary"
                          :to="{ name: 'Shop', params: { id: 0 } }"
                          >
                          <md-icon>add</md-icon>
                   </md-button>
                    <md-button  @click="moreFileds=!moreFileds" class="md-fab md-mini">
                      <md-icon>menu</md-icon>
                    </md-button>

                    </tbody>
                  </table>
                </div>
              </div>

            
            </div>

<br>



          </div>
        </div>

    </md-card>
  </div>
</template>


<script>
//import VueSlideBar from "vue-slide-bar";

export default {
  data() {
    return {
      moreFileds : false,
      name: "RegularCards",
      
    };
  },
  methods: {
  },
  components: {
    //VueSlideBar
  },

computed: {
    GetAllShop() {
      console.log("GetAllShop--------1-------------------")
      return this.$store.getters.GetAllShop;
      console.log("GetAllShop------2---------------------")
    }, //
  }, //computed
  created() {
    this.$store.dispatch("GetAllShop");
    console.log(this.$store.getters.GetAllShop);
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



