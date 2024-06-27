import { createRouter, createWebHistory } from "vue-router";

import Beranda from "@views/Beranda/Index.vue";
import Tentang from "@views/Tentang/Index.vue";
import Edukasi from "@views/Edukasi/Index.vue";
import Informasi from "@views/Informasi/Index.vue";
import InformasiDetail from "@views/Informasi/Detail.vue";

import Market from "@views/Market/Index.vue";
import ProdukDetail from "@views/Market/ProdukDetail.vue";
import Cart from "@views/Market/Cart.vue";

import PlantCam from "@views/PlantCam/Index.vue";
import PlantCamDetail from "@views/PlantCam/Detail.vue";

import Login from "@views/Login/Index.vue";
import Signup from "@views/Signup/Index.vue";

const routes = [
  {
    path: "/",
    component: Beranda,
    name: "Beranda",
  },
  {
    path: "/login",
    component: Login,
    name: "Login",
  },
  {
    path: "/signup",
    component: Signup,
    name: "Signup",
  },
  {
    path: "/about",
    component: Tentang,
    name: "Tentang",
  },
  {
    path: "/edukasi",
    component: Edukasi,
    name: "Edukasi",
  },
  {
    path: "/informasi",
    component: Informasi,
    name: "Informasi",
  },
  {
    path: "/informasi/detail",
    component: InformasiDetail,
    name: "InformasiDetail",
  },
  {
    path: "/market",
    component: Market,
    name: "Market",
  },
  {
    path: "/market/produk/detail",
    component: ProdukDetail,
    name: "ProdukDetail",
  },
  {
    path: "/market/cart",
    component: Cart,
    name: "Cart",
  },
  {
    path: "/plantcam",
    component: PlantCam,
    name: "PlantCam",
  },
  {
    path: "/plantcam/detail",
    component: PlantCamDetail,
    name: "PlantCamDetail",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
