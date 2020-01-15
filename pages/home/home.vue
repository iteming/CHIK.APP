<template>
	<view class="content">
		<navigation-custom :config="config" @customSearch="customSearch" :scrollTop="scrollTop" :scrollMaxHeight="scrollMaxHeight" />

		<swiper class="card-swiper" :indicator-dots="false" :circular="true" :autoplay="false" interval="5000" duration="500"
		 @change="cardSwiper" indicator-color="#8799a3" indicator-active-color="#0081ff">
			<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					<video :src="item.url" loop muted :enable-progress-gesture="false" :show-play-btn="false" :controls="false"
					 objectFit="cover" v-if="item.type=='video'"></video>
					<view class="title">肉夹馍</view>
					<view class="user">
						<image class="user-avatar" src="https://s1.st.meishij.net/user/51/159/ns1102301_78054.jpg" mode="aspectFill"></image>
						陕西正宗老吴家泡馍
					</view>
				</view>
			</swiper-item>
		</swiper>

		<view class="text-center text-xxl text-bold">编辑精选</view>
		<view class="con">
			<i></i>
			<p>SELECT</p>
		</view>

		<waterfall-flow :list="list" :loading="loading" @click="choose"></waterfall-flow>
	</view>
</template>

<script>
	// 模拟 JSON 数据
	const waterfalldata = require('@/common/json/waterfalldata.json');
	const swiperdata = require('@/common/json/swiperdata.json');
	export default {
		data() {
			return {
				// 导航配置
				config: {
					title: "我是标题", //title
					type: 5, //type 1，3胶囊 2，4无胶囊模式
					// bgcolor: "#c1a379", //背景颜色
					transparent: false, //是否背景透明 默认白色
					linear: false, //是为开启下滑渐变
					share: false, //是否将主页按钮显示为分享按钮
				},
				scrollTop: 0, // 当linear为true的时候需要通过onpagescroll传递参数
				scrollMaxHeight: 200, //滑动的高度限制，超过这个高度即背景全部显示

				// 卡片配置
				cardCur: 0,
				swiperList: swiperdata,

				// 瀑布流配置
				page: 1,
				start: 0,
				end: 0,
				list: [], // 列表
				loading: true,
			}
		},
		onPageScroll(e) {
			// 这里不会被触发，需要使用父子组件调用
			this.scrollTop = e.scrollTop;
		},
		mounted() {
			console.log('home mounted')
			this.getList();
		},
		methods: {
			//当config type 为 5 的时候 自定义methods
			customSearch() {
				console.log("ssssss")
			},
			// cardSwiper
			cardSwiper(e) {
				console.log("@change=cardSwiper");
				this.cardCur = e.detail.current
			},

			// 瀑布流 选中
			choose(item) {
				// item 返回选中 JSON 对象
				console.log(item)
			},
			reachBottom() {
				console.log('home onReachBottom')
				this.page++;
				this.loading = true;
				this.getList();
			},
			// 瀑布流 模拟加载数据
			getList() {
				if (this.list.length < waterfalldata.list.length) {
					this.loading = true;
					setTimeout(() => {
						this.end = this.page * 10;
						this.list = this.list.concat(waterfalldata.list.slice(this.start, this.end));
						this.start = this.end;
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

<style lang="less">
	.content {
		margin-bottom: 200rpx;
	}

	// 横线到底了
	.con {
		position: relative;
		height: 5rpx;
		line-height: 5rpx;
		margin: 30rpx auto;
		text-align: center;

		p {
			display: inline-block;
			font-size: 20rpx;
			color: #c1c1c1;
			background: #FFFFFF;
			padding: 0 20rpx;
			text-align: center;
			margin: 0 auto;
			position: relative;
			z-index: 2;
		}

		i {
			display: block;
			height: 1rpx;
			background: #e1e1e1;
			position: absolute;
			top: 5rpx;
			width: 100%;
		}
	}

	// swiper 
	.swiper-item image,
	.swiper-item video {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.card-swiper {
		height: 776rpx !important;
	}

	// 卡片通用
	.card-swiper swiper-item {
		width: 414rpx !important;
		left: 70rpx;
		box-sizing: border-box;
		padding: 30rpx 0rpx 30rpx;
		overflow: inherit;

		.title,
		.user {
			position: absolute;
			color: #FFFFFF;
			font-weight: bold;
			margin-left: 30rpx;
		}

		.title {
			font-size: 40rpx;
			bottom: 120rpx;
		}

		.user {
			font-size: 24rpx;
			bottom: 50rpx;
			vertical-align: middle;
		}

		.user-avatar {
			width: 50rpx;
			height: 50rpx;
			border-radius: 50%;
			// 控制图片和文字在同一行显示且对齐
			display: inline-block;
			vertical-align: middle;
			margin-right: 10rpx;
		}
	}

	// 隔壁其他卡片
	.card-swiper swiper-item .swiper-item {
		display: block;
		height: 100%;
		border-radius: 30rpx;
		-webkit-transform: scale(0.9);
		transform: scale(0.9);
		-webkit-transition: all 0.2s ease-in 0s;
		transition: all 0.2s ease-in 0s;
		overflow: hidden;
	}
</style>
