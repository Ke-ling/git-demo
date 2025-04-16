import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("@/views/Home/Home.vue");
const Category = () => import("@/views/Categories/Category.vue");
const Profile = () => import("@/views/Profile/Profile.vue");
const ShopCar = () => import("@/views/Shopcar/Shopcar.vue");

Vue.use(VueRouter);

const routes = [
	{ path: "/", redirect: "/home" },
	{ path: "/home", component: Home },
	{ path: "/category", component: Category },
	{ path: "/profile", component: Profile },
	{ path: "/shopcar", component: ShopCar },
];

const router = new VueRouter({
	mode: "history",
	routes,
});

export default router;
