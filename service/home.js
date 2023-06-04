import CQRequest from './index.js'

// 下面写请求数据方法 
export const getHomeMultidata = () => {
	return CQRequest.get('/home/multidata',{})
}