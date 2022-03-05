<template>
<div id="app">
  <div class="container" style="direction:ltr;" >
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary" style="background-color:#fb8da5fc;border-radius: 10px;"> 
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>

          <div class="md-toolbar-section-end">
               <router-link to="/Login" active-class="active"><span class="md-body-1"> Login </span></router-link>  /             
               <router-link to="/Register" active-class="active"><span class="md-body-1"> Register </span></router-link> 
            </div>
                        <div class="row" style="direction:ltr">
                  <div class="col-sm-12 pull-right">
                    <div class="mainmenu pull-right">

                      <ul class="nav navbar-nav collapse navbar-collapse">
                        <li>      
                        <router-link to="/" active-class="active"  exact><span class="md-body-1"  style="flex: 1 1">Home</span> </router-link>
                        </li>

                        <li>
                          <router-link to="/ShopList" activ-class="active"> <span class="md-body-1">ShopList</span></router-link>
                        </li>
                        <li>
                          <router-link to="/Shop" activ-class="active"> <span class="md-body-1">Shop</span></router-link>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>


      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" >
        <md-toolbar class="md-transparent" md-elevation="0">Admin Panel</md-toolbar>

        <md-list>

          <md-list-item>
                <md-icon>home</md-icon>
                <span class="md-list-item-text "> <router-link to="/" active-class="active" exact> Home</router-link></span>
          </md-list-item>
          
          <md-divider></md-divider>
<!--
          
         
   <md-list-item>
            <md-icon>email</md-icon>
            <span class="md-list-item-text"><router-link to="/Skills" activ-class="active"> Skills</router-link></span>
          </md-list-item>

          <md-divider class="md-inset"></md-divider>
         <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text"><router-link to="/Gallery" activ-class="active"> Gallery</router-link></span>
        </md-list-item>
         
          <md-divider class="md-inset"></md-divider>

         <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text"><router-link to="/ReciveInfo" activ-class="active"> ReciveInfo</router-link></span>
        </md-list-item>
          <md-divider class="md-inset"></md-divider>

         <md-list-item>
            <md-icon>phone</md-icon>
            <span class="md-list-item-text"><router-link to="/About" activ-class="active"> About</router-link></span>
        </md-list-item>

          <md-divider class="md-inset"></md-divider>

         <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text"><router-link to="/Course" activ-class="active"> Course</router-link></span>
        </md-list-item>

          <md-divider class="md-inset"></md-divider>

         <md-list-item>
            <md-icon>email</md-icon>
            <span class="md-list-item-text"><router-link to="/Project" activ-class="active"> Project</router-link></span>
        </md-list-item>

          <md-divider class="md-inset"></md-divider>

         <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text"><router-link to="/Education" activ-class="active"> Education</router-link></span>
        </md-list-item>

          <md-divider class="md-inset"></md-divider>
-->
         <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text"><router-link to="/ShopList" activ-class="active"> ShopList</router-link></span>
        </md-list-item>
        <md-divider class="md-inset"></md-divider>
        <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text"><router-link to="/Shop" activ-class="active"> Shop</router-link></span>
        </md-list-item>


<md-divider></md-divider>
<md-divider class="md-inset"></md-divider>
          <md-list-item>
                <md-icon>thumb_up</md-icon>
                <span class="md-list-item-text"><router-link to="/Register" active-class="active">Register</router-link>
              </span>
          </md-list-item>
          <md-list-item>
                <md-icon>add</md-icon>
                <i class="far fa-dove"></i>
                <span class="md-list-item-text"><router-link to="/Login" active-class="active">LogIn</router-link></span>
          </md-list-item>
          <md-list-item>
                <md-icon>delete</md-icon>
                <span class="md-list-item-text">Logout</span>
          </md-list-item>




        </md-list>
      </md-app-drawer>

      <md-app-content style="border-right: 0px solid transparent;">



      <transition enter-active-class="animated fadeIn">
      <router-view></router-view>
      </transition>


      </md-app-content>
    </md-app>
  </div>
</div>
</template>

import AppHome from "./Pages/Admin/Home";

<script>
export default {
 name: 'Reveal',
  data: () => ({
    menuVisible: false,
    Authenticated : false,
    UserFullName :''
  }),



}
</script>
<style  scoped>
  .md-app {
    max-height: 100%;
  }

  .md-drawer {
    width: 200px;
    max-width: calc(100vw - 125px);
  
  }
</style>