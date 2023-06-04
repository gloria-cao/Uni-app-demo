import { defineStore } from 'pinia'
import { getHomeMultidata } from '@/service/home.js'
export const useHomeStore = defineStore('home', {
	state: () => {
		return: {
			banner: []
		}
	},
	actions: {
		// 发起网络请求
		async fetchMultidata() {
			const banner = await getHomeMultidata()
			// 获取首页轮播图和推荐栏数据
			console.log('res'+banner);
		}
	}
}) 