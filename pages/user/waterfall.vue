<template>
	<view>
		<navigation-custom :config="config" :scrollTop="scrollTop" :scrollMaxHeight="scrollMaxHeight" />
		<waterfall-flow :list="list" :loading="loading" @click="choose"></waterfall-flow>
	</view>
</template>

<script>
	// 模拟 JSON 数据
	const data = require('@/common/json/waterfalldata.json');
	export default {
		data() {
			return {
				page: 1,

				start: 0,
				end: 0,

				list: [], // 列表
				loading: true,

				// 导航栏
				config: {
					title: "我是标题", //title
					bgcolor: "#c1a379", //背景颜色
					type: 1, //type 1，3胶囊 2，4无胶囊模式
					transparent: false, //是否背景透明 默认白色
					linear: true, //是为开启下滑渐变
					share: false, //是否将主页按钮显示为分享按钮
					menuIcon: "../../static/icon/back_.png", //当type为3或者4的时候左边的icon文件位置，注意位置与当前页面不一样
				},
				scrollTop: 0, // 当linear为true的时候需要通过onpagescroll传递参数
				scrollMaxHeight: 200 //滑动的高度限制，超过这个高度即背景全部显示
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		// mounted() {
		// 	console.log('waterfall mounted')
		// 	this.getList();
		// },
		onLoad() {
			console.log('waterfall onLoad')
			this.getList();
		},
		onReachBottom() {
			console.log('waterfall onReachBottom')
			this.page++;
			this.loading = true;
			this.getList();
		},
		methods: {
			//当config type 为 4或者3 的时候 自定义methods
			customConduct() {
				console.log("ssssss")
			},
			// 选中
			choose(item) {
				// item 返回选中 JSON 对象
				console.log(item)
			},
			// 模拟加载数据
			getList() {
				if (this.list.length < data.list.length) {
					console.log('this.list.length < data.list.length')
					console.log('this.list', this.list)
					console.log('data.list', data.list)
					this.loading = true;
					setTimeout(() => {
						this.end = this.page * 10;
						this.list = this.list.concat(data.list.slice(this.start, this.end));
						this.start = this.end;

						console.log('this.list 2', this.list)
						// 延迟 120 毫秒隐藏加载动画，为了跟组件里面的 100 毫秒定位有个平缓过度
						setTimeout(() => {
							this.loading = false;
						}, 120);
					}, 1000)
				} else {
					this.loading = false;
				}
			}
		}
	}
</script>

<style>

</style>
