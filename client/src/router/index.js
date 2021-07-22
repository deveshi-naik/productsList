import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Login from "@/components/Login";
import Signup from "@/components/Signup";
import productDetail from "@/components/productDetail";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/home",
      name: "Home",
      component: Home,
      beforeEnter(to, from, next) {
        if (localStorage.getItem("token")) {
          next();
        } else {
          next({
            path: `/login`
          });
        }
      }
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    },
    {
      path: "/detail/:id",
      name: "productDetail",
      component: productDetail,
      beforeEnter(to, from, next) {
        if (localStorage.getItem("token")) {
          next();
        } else {
          next({
            path: `/login`
          });
        }
      }
    },
    {
      path: "/",
      beforeEnter(to, from, next) {
        if (localStorage.getItem("token")) {
          next({
            path: `/home`
          });
        } else {
          next({
            path: `/login`
          });
        }
      }
    }
  ]
});
