<template>
  <!--<div class="container" style="direction:ltr">-->
  <div  style="direction:ltr">
<div class="col-md-2">
</div>

<div class="col-md-8">
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br> 
 <img  src="/images/HomePic2.jpg" v-show="true" />
  
  <!--<img  v-bind:src="GetImageAddress + '01.png'" v-show="true" />-->

 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
</div>


</div>
</template>
/*lang="scss"*/
<style  scoped>
  .md-app {
    max-height: 100%;
    border: 1px solid rgba(#000, .12);
        background-color: hotpink;

  }

  .md-app-toolbar {
    height: 50px;
    background-color: hotpink;
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
        background-color:white;

  }
</style>

<script>
export default {
  name: 'Flexible',
  data: () => ({
    menuVisible: false,
	  name:"morteza"
  }),
    computed: {
    GetImageAddress(){
      // this.showPreview = false;
        return this.$store.getters.GetImageAddress
}},

}
</script>

