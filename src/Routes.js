import Login    from "./Pages/User/Login.vue";
import Register from "./Pages/User/Register.vue";
import Home     from "./Pages/Admin/Home.vue";
import ShopList from './Pages/Shop/ShopList';
import Shop from './Pages/Shop/Shop';
import ShopDetailList from './Pages/Shop/ShopDetailList';
import ShopDetail from './Pages/Shop/ShopDetail';
import NewShopDetail from './Pages/Shop/NewShopDetail'

NewShopDetail
export const Routes = [
    {
    path:"/",
    component:Home
},
{
    path:"/ShopList",
    component:ShopList
},
{
    path:"/Shop",
    component:Shop
},
{
    path:"/Shop/:id",
    component:Shop,
    name:'Shop'
},
{
    path:"/ShopDetail",
    component:ShopDetail,
},
{
    path:"/ShopDetail/:id",
    component:ShopDetail,
    name:'ShopDetail'
},
{
    path:"/ShopDetailList",
    component:ShopDetailList
},
{
    path:"/ShopDetailList/:id",
    component:ShopDetailList,
    name:'ShopDetailList'
},
{
    path:"/NewShopDetail/:id",
    component:NewShopDetail,
    name:'NewShopDetail'
},


{
    path:"/Register",
    component:Register
},
{
    path:"/Login",
    component : Login
}

]