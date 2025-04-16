<template>
	<div>
		<tab-bar>
			<tab-bar-item path="/home" active-color="skyblue">
				<!-- <template #item-icon
					><img src="./assets/img/tabbar/hompage.png" alt=""/>
        </template>
        <template #item-text>
          <div>首页</div>
        </template> -->
				<img slot="item-icon" src="@/assets/img/tabbar/hompage.png" alt="" />
				<img
					slot="item-icon-active"
					src="@/assets/img/tabbar/hompage_active.png"
					alt=""
				/>
				<div slot="item-text">首页</div>

				<!-- 不显示 -->
				<!-- <img src="./assets/img/tabbar/hompage.png" alt=""> -->
				<!-- <div>首页</div> -->
			</tab-bar-item>
			<tab-bar-item path="/category">
				<img
					slot="item-icon"
					src="@/assets/img/tabbar/categories.png"
					alt=""
				/>
				<img
					slot="item-icon-active"
					src="@/assets/img/tabbar/categories_active.png"
					alt=""
				/>
				<div slot="item-text">分类</div>
			</tab-bar-item>
			<tab-bar-item path="/shopcar">
				<img slot="item-icon" src="@/assets/img/tabbar/shopcat.png" alt="" />
				<img
					slot="item-icon-active"
					src="@/assets/img/tabbar/shopcat_active.png"
					alt=""
				/>
				<div slot="item-text">购物</div>
			</tab-bar-item>
			<tab-bar-item path="/profile">
				<img slot="item-icon" src="@/assets/img/tabbar/profile.png" alt="" />
				<img
					slot="item-icon-active"
					src="@/assets/img/tabbar/profile_active.png"
					alt=""
				/>
				<div slot="item-text">我的</div>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
const TabBar = () => import("@/components/tabbar/TabBar.vue");
const TabBarItem = () => import("@/components/tabbar/TabBarItem.vue");

export default {
	name: "Main",
	components: {
		TabBar,
		TabBarItem,
	},
};
</script>

<style></style>
