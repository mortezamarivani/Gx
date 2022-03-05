<template>
  <div>
    <!--   -->
    <md-card >

        <div class="panel panel-default">
          <div class="panel-body" style="background-color:#f7f7f9">
            <div class="panel panel-warning" >



              <div class="panel-heading">
                <div class="row">
                  <div class="col-md-6">
                    <h2 style="direction:ltr">

                     <md-button class="md-icon-button md-accent">
                      <md-icon>thumb_up</md-icon>
                    </md-button>
                    {{GetshopListWithId.fldTitle}}</h2>
                   
 
                  </div>
                </div>
              </div>



              <div class="panel-body">
                <div class="signup-form" style="direction:ltr">
                  
                 <table class="table table-hover">
                    <thead class="thead-dark">
                      <tr class="row-fluid">
                        <th scope="col" v-if="moreFileds" class="HeaderTableStyle">Row</th>
                        <th scope="col" v-if="moreFileds" class="HeaderTableStyle">ID</th>
                       <th scope="col" class="HeaderTableStyle">Url</th>
                       <th scope="col" class="HeaderTableStyle">Price</th>
                       <th scope="col" v-if="moreFileds" class="HeaderTableStyle">MinPrice</th>
                       <th scope="col" v-if="moreFileds" class="HeaderTableStyle">MaxPrice</th>
                       <th scope="col" v-if="moreFileds" class="HeaderTableStyle">Description</th>
                       <th scope="col" v-if="moreFileds" class="HeaderTableStyle">Status</th>
                       <th scope="col" v-if="moreFileds" class="HeaderTableStyle">#</th>
                      </tr>
                    </thead>
                   
                    <tbody>
                      <tr v-for="(ShopDetail, index) in FilterdShopDetail" :key="index">
                        <th scope="row" v-if="moreFileds">{{index + 1}}</th>
                        <th v-if="moreFileds">{{ ShopDetail.fldShopDetailID}}</th>
                        <td >
                         <md-button v-if="!moreFileds"
                            :to="{ name: 'ShopDetail', params: { id: ShopDetail.fldShopDetailID } }"
                            class="md-fab md-mini md-plain"
                          >
                            <md-icon>edit</md-icon>
                        </md-button>
                        <a v-bind:href="ShopDetail.fldUrl">{{ ShopDetail.fldUrl.substring(0,50)}} ...</a>
                        </td>
                        <td :class="{MinPriceStyle:ShopDetail.fldRealPrice < ShopDetail.fldMinPrice}">
                             <input type="checkbox" @click="UpdateSelectedItemForGetPrice(ShopDetail.fldShopDetailID 
                                                                                      , ShopDetail.fldGetData,ShopDetail.fldRealPrice)" 
                             name="check1" v-model="ShopDetail.fldGetData" />

     
                            {{ShopDetail.fldRealPrice}}
                            <md-progress-spinner  
                            :md-diameter="20" :md-stroke="2" 
                            md-mode="indeterminate">
                            </md-progress-spinner>
                        </td>
                        
                        <td v-if="moreFileds">{{ShopDetail.fldMinPrice}}</td>
                        <td v-if="moreFileds">{{ShopDetail.fldMaxPrice}}</td>
                        <td v-if="moreFileds">{{ ShopDetail.fldDescription}}</td>
                        <td v-if="moreFileds">
                         <md-button
                            :to="{ name: 'ShopDetail', params: { id: ShopDetail.fldShopDetailID } }"
                            class="md-fab md-mini md-plain"
                          >
                            <md-icon>edit</md-icon>
                          </md-button>
                        </md-button>

                        </td>
                      </tr>
                    </tbody>
                    
                  </table>

                </div>
              </div>
              <md-toolbar>
                   
                      <md-button  class="md-fab md-mini md-primary"
                          :to="{ name: 'NewShopDetail', params: { id: this.fldShopListID } }"
                          >
                          <md-icon>add</md-icon>
                          </md-button>
                          <md-button  @click="moreFileds=!moreFileds" class="md-fab md-mini">
                              <md-icon>menu</md-icon>
                        </md-button>
                      
                      <md-button class="md-icon-button">
                          <md-icon>more_vert</md-icon>
                      </md-button>
                      <md-button class="md-accent" @click="ReLoadPrice()">ReLoad Price</md-button>
                      <md-button class="md-accent" @click="showDialog = true">showDialog</md-button>
 
                  </md-toolbar>

              
            </div>

          </div>
        </div>

    </md-card>


 <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Preferences</md-dialog-title>

     <div class="gcse-search"></div>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        <md-button class="md-primary" @click="showDialog = false">Save</md-button>
      </md-dialog-actions>
    </md-dialog>

    <div  id="Price"></div>
    <div  id="ShowUrlContent"></div>
    



  </div>
</template>


<script>
import Paginatron from "vue-paginatron";
import vPagination from "vue-plain-pagination";
//import VueSlideBar from "vue-slide-bar";

export default {
  data() {
    return {
      showDialog: false,
      SelectedUrls :[],
      shopDetailsId : "",
      indeterminate : 50,
      name: 'ProgressSpinnerSizes',
      moreFileds : false,
      Title: "",
      showCreateShopDetailBtn : false,
      price:'0',
    };
  },
  methods: {
    
    GetTitleOfShopList(value){
      this.Title = value;
    },//GetTitleOfShopList

    ReLoadPrice(){
        const shopList = [] ;
            shopList.push(this.GetShopDetailByShopListId.filter(Element => {
              return Element.fldGetData.toString().toUpperCase().match("TRUE");
            }));
        for (var i = 0; i <= shopList.length;i++){
          var ShowUrlContent = document.querySelector('#ShowUrlContent');
              ShowUrlContent.innerHTML="";
              
              if(shopList[0][i] != undefined){
                 this.LoadUrl(shopList[0][i] );
              }
             }//for

        /*  
              let price="0" ;
               setTimeout(() =>{
               let el = document.getElementById("corePrice_desktop");
                  console.log(el.hasChildNodes())
                  if (el.hasChildNodes()){
                    price = el.childNodes[1].childNodes[1].childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[1].innerText;
                    price = price.substring(1,price.length-1);
                  }//if
                  alert(price);
                  console.log(price)
          },3000);  */

       
          /*
          for (var i = 0; i < shopListForGetPric.length;i++){
                  const retPric = [];
                        retPric.push({
                          fldShopDetailID :  shopListForGetPric[0][i].fldShopDetailID,
                          fldUrl: shopListForGetPric[0][i].fldUrl,
                          fldRealPrice : 0,
                          fldGetData:shopListForGetPric[0][i].fldGetData,
                          fldDescription: "--",
                          fldStatus: true,
                          fldShopListID : 0,
                          fldMinPrice: 0,
                          fldMaxPrice: 0,
                          fldCurrency: '-', 
                          fldCurrenySymbol : '-',
                        })//Push
                    this.$store.dispatch("EditShopDetailForGetPrice", retPric);
                }

*/
    },//ReLoadPrice

    LoadUrl(Pi_shopList ){
           const xhr = new XMLHttpRequest(),method = "GET",url = Pi_shopList.fldUrl;
           xhr.open(method, url , false);
           xhr.onreadystatechange =  function () {
             console.log(Pi_shopList.fldUrl)
            if ( xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                  let div = document.createElement('div')
                  div.innerHTML =  xhr.responseText;
                  //div.style.display = 'none';
                  document.querySelector('#ShowUrlContent').append(div);
              }//if  
              else{
                alert(xhr.status);
                return false;
              }
              
            };//function
            xhr.send();

            let price = -1;
            let siteName = this.getSiteName(Pi_shopList.fldUrl);
            if(siteName == "amazon2"){
                let el = document.getElementById("corePrice_desktop");
                if(el.hasChildNodes()){
                    price = el.childNodes[1].childNodes[1].childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[1].innerText;
                    price = getPriceValue(price);
                  }//if
            }
            else if(siteName == "amazon"){
                let el = document.getElementsByTagName("script");
               for (var i = 0; i <el.length; i++){
                 console.log(el[i])
                    /* 
                     if(el[i].getAttribute('type') != undefined 
                        && el[i].getAttribute('type')!= null 
                        && el[i].getAttribute('type')=="application/ld+json"){
                          var ret = JSON.parse(el[i].innerText)
                          if(ret.offers != undefined && ret.offers != null){
                            price = ret.offers['price'];
                          } 
                     } */

               }
            }
            else if(siteName == "walmart"){
                let el = document.getElementsByClassName("b lh-copy dark-gray mr2 f1");
                if(el != undefined){
                    price = el[0].childNodes[1].innerText;
                    price = getPriceValue(price);
                  }
            }
            else if(siteName == "ebay"){
                let el = document.getElementById("mm-saleDscPrc");//bb_bdp
                console.log(el);
                if(el != undefined && el != null){
                    price = el.getAttribute('content');
                  }
                  else{
                    el = document.getElementById("prcIsum_bidPrice");//
                    console.log(el.getAttribute('content'));
                    price = el.getAttribute('content');
                  }
            }
            else if(siteName == "thebay"){
                let el = document.getElementsByTagName("script");//product-secondary-section pdp-standard
               for (var i = 0; i <el.length; i++){
                     if(el[i].getAttribute('type') != undefined 
                        && el[i].getAttribute('type')!= null 
                        && el[i].getAttribute('type')=="application/ld+json"){
                          var ret = JSON.parse(el[i].innerText)
                          if(ret.offers != undefined && ret.offers != null){
                            price = ret.offers['price'];
                          } 
                     }
               }
            }
             else if(siteName == "apple"){
                let el = document.getElementsByClassName("as-localnav-price-content");
                console.log(el)
                if(el != undefined){
                    //price = el[0].childNodes[1].innerText;
                    //price = getPriceValue(price);
                  }
            }
             else if(siteName == "homedepot"){
                let el = document.getElementById("zone-a-price");
                console.log(el)
                if(el != undefined){
                    //price = el[0].childNodes[1].innerText;
                    //price = getPriceValue(price);
                  }
            }
            else if(siteName == "target"){
                let el = document.getElementsByClassName("h-padding-b-default");
                console.log(el)
                if(el != undefined){
                    //price = el[0].childNodes[1].innerText;
                    //price = getPriceValue(price);
                  }
            }//if


            if(price != -1){
              console.log(price)
              this.UpdateSelectedItemForGetPrice(Pi_shopList.fldShopDetailID,this.fldGetData,price);
              return true;
            }
            
    },//LoadUrl

    getSiteName(Pi_fldUrl){
      let siteName = Pi_fldUrl;
      let dotIndex = Pi_fldUrl.indexOf('.');
      siteName = siteName.substring(dotIndex+1, siteName.length-dotIndex);
      let dotIndex2 = siteName.indexOf('.');
      siteName = siteName.substring(0,dotIndex2);
      return siteName;
    },

    getPriceValue(Pi_strPricr){
      return Pi_strPricr.substring(1,Pi_strPricr.length-1);
    },

    UpdateSelectedItemForGetPrice(_fldShopDetailID,_fldGetData,_fldRealPrice){ 
      const shopDetail =[];
      shopDetail.push({
             fldShopDetailID :  _fldShopDetailID,
             fldGetData:!_fldGetData,
              fldUrl:'--',
              fldDescription: "--",
              fldStatus: true,
              fldShopListID : 0,
              fldMinPrice: 0,
              fldMaxPrice: 0,
              fldRealPrice: _fldRealPrice,
              fldCurrency: '-', 
              fldCurrenySymbol : '-',
      });
       this.$store.dispatch("EditShopDetailForGetPrice", shopDetail);
    },//UpdateSelectedItemForGetPrice
  
  },//methods
 
  components: {
    vPagination,
    //VueSlideBar
  },

  computed: {
    GetShopDetailByShopListId() {
     var retObj=this.$store.getters.GetShopDetailByShopListId;
      if(retObj.length ==0){
        this.showCreateShopDetailBtn = true;
      }
      return retObj;

    }, //

     GetshopListWithId() {
      var retShop = this.$store.getters.GetshopListWithId;
      return retShop;
    }, //

    FilterdShopDetail() {
        return this.GetShopDetailByShopListId
    } //

    
  }, //computed

  created() {
    this.fldShopListID = this.$route.params.id
    this.$store.dispatch("GetShopDetailByShopListId", this.fldShopListID );
     
     if(this.$route.params.id > 0 ){
        let id = this.$route.params.id;
        this.$store.dispatch("GetshopListWithId", {
          fldShopListID: id
        });
        this.fldShopListID = id;
    }
      
  } //created

}; //default
</script>




/*lang="scss"*/
<style  scoped>
 .md-dialog.md-dialog-container {
    max-width: 768px;
  }
 .md-progress-spinner {
    margin: 10px;
  }

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

    .MinPriceStyle{
      color: #0ac50a;
    }

    .MaxPriceStyle{
      color:red;
    }

</style>



