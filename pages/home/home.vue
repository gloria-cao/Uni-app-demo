<template>
	<view class="home">
		Home
	</view>
</template>

<script setup>
	import { onLoad } from '@dcloudio/uni-app'
	import useHomeStore from '@/store/home.js'
	
	const homeStore = useHomeStore()
	onLoad(() => {
		homeStore.fetchMultidata()
	})
</script>

<style>
</style>
