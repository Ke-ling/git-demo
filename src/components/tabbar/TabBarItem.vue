<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive">
			<slot name="item-icon"></slot>
		</div>
		<div v-else>
			<slot name="item-icon-active"></slot>
		</div>

		<!-- <div :class="{active: isActive}">
			<slot name="item-text"></slot>
		</div> -->

		<div :style="isActive ? 'color: ' + activeColor : ''">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "TabBarItem",
	props: {
		path: {
			type: String,
			default: "",
		},
		activeColor: {
			type: String,
			default: "#f87e7e",
		},
	},
	data() {
		return {
			// isActive: true, // 是否选中
		};
	},

	computed: {
		isActive() {
			// 计算属性，根据当前路由路径判断是否选中
			// return this.$route.path.includes(this.path) // 如果当前路由路径包含传入的path，则返回true;

			return this.$route.path === this.path; // 如果当前路由路径包含传入的path，则返回true;
		},
	},
	methods: {
		itemClick() {
			if (this.$route.path !== this.path) this.$router.replace(this.path); // 触发父组件的事件
		},
	},
};
</script>

<style>
.tab-bar-item {
	display: flex;
	flex-direction: column; /* 添加这行使内容垂直排列 */
	align-items: center; /* 水平居中 */
	justify-content: center; /* 垂直居中 */
	width: 25%;
	height: 100%;
	font-size: 12px;
	color: #666;
	cursor: pointer;
}

.tab-bar-item img {
	width: 24px;
	height: 24px;
	vertical-align: middle; /* 图片垂直居中 */
	/* margin-top: 3px; 添加底部间距 */
}

.active {
	color: #f87e7e;
}
</style>
