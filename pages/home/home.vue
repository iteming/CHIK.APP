<template>
	<view class="content">
		<nav-custom :config="config" @customSearch="customSearch" :scrollTop="scrollTop" :scrollMaxHeight="scrollMaxHeight"></nav-custom>

		<swiper class="card-swiper" :indicator-dots="false" :circular="true" :autoplay="false" interval="5000" duration="500"
		 @change="cardSwiper" indicator-color="#8799a3" indicator-active-color="#0081ff">
			<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					<video :src="item.url" loop muted :enable-progress-gesture="false" :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
					<view class="title">肉夹馍</view>
					<view class="user">
						<image class="user-avatar" src="https://s1.st.meishij.net/user/51/159/ns1102301_78054.jpg" mode="aspectFill"></image>
						陕西正宗老吴家泡馍
					</view>
				</view>
			</swiper-item>
		</swiper>

		首页推荐
	</view>
</template>

<script>
	export default {
		data() {
			return {
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


				cardCur: 0,
				swiperList: [{
					id: 7,
					type: 'video',
					url: 'http://q417edx0f.bkt.clouddn.com/uuid.mp4'
				}, {
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		onLoad() {},
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
		}
	}
</script>

<style lang="less">
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
