<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "TabBar",
};
</script>

<style>
#tab-bar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 49px;

	background-color: #f6f6f6;
	border-top: 1px solid #ccc;

	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;

	box-shadow: inset 0 -1px 0 #ccc;
	z-index: 1000;
	font-size: 14px;
	color: #666;
	font-weight: bold;
	text-align: center;
	box-sizing: border-box;
}
</style>
