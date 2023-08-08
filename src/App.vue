<script setup>
	import login from "./components/login.vue"
</script>

<template>
	<login />
</template>

<style>
	body {
		margin: 0;

		width: 100%;
		max-width: 1980px;
		min-height: 100%;
		display: flex;
		justify-content: stretch;
		align-items: stretch;
	}
	#app {
		text-align: left;
		height: inherit;
		width: inherit;
	}
</style>
