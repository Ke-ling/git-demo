<template>
	<div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>

	</div>
  
</template>

<script>
import MainTabBar from "@/components/MainTabBar.vue"

export default {
	name: "App",
	components: {
		MainTabBar,
	},
};
</script>

<style>
@import "./assets/css/main.css";
</style>
