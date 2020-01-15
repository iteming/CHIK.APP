<template>
	<view class="content">
		<view>我的</view>
		<view class="out-btn" @tap="clearLaunchFlag()">清除launchFlag值</view>
		<view class="out-btn" @tap="GO()">GO</view>
		
		<view class="waterfall">
			<view class="item" v-for="(item,index) in waterfallList" v-bind:key="index">
				<view class="item-content">
					{{index}} {{item}}
				</view>
			</view>
		</view>
		<view class="out-btn" @tap="nextPage()">加载下一页</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				waterfallList: [],
				waterfallItem: [
					"三月到大理赏樱花不远不近",
					"三月到大理赏樱花不远不近，才是最好的距离余生，请带上自己的阳光回忆，在部队那些日子被遗忘的花儿春光",
					"三月到大理赏樱花不远不近，才是最好的距离余生，请带上自己的阳光回忆",
					"三月到大理赏樱花不远不近，才是最好的距离余生，请带上自己的阳光回忆，在部队那些日子被遗忘的花儿春光",
					"三月到大理赏樱花不远不近，三月到大理赏樱花不远不近，三月到大理赏樱花不远不近",
					"三月到大理赏樱花不远不近，才是最好的距离余生，请带上自己的阳光回忆",
				]
			}
		},
		mounted() {
			console.log('user mounted')
			this.nextPage();
		},
		methods: {
			GO: function() {
				
				uni.navigateTo({
					url: "/pages/user/waterfall"
				})
			},
			nextPage: function() {
				console.log("load next page");
				let itemlist = this.waterfallItem;
				// console.log('x1', itemlist);
				itemlist.forEach(item =>{
					this.waterfallList.push(item);
				})				
				// console.log('x2', this.waterfallList);
			},
			clearLaunchFlag: function() {
				uni.showModal({
					title: '清除launchFlag值',
					content: '确定要清除launchFlag值，进行重启测试？',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							// 清除缓存
							uni.clearStorage();
							// 两秒后重启
							// #ifdef APP-PLUS
							uni.showToast({
								icon: 'none',
								duration: 3000,
								title: '清除成功2秒后重启'
							});
							setTimeout(function() {
								uni.hideToast();
								plus.runtime.restart();
							}, 2000);
							// #endif
							// 两秒后跳转
							// #ifdef H5 || MP-WEIXIN
							uni.showToast({
								icon: 'none',
								duration: 3000,
								title: '清除成功2秒后刷新'
							});
							setTimeout(function() {
								uni.navigateTo({
									url: '/pages/index/start'
								});
							}, 2000);
							// #endif
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		}
	}
</script>

<style lang="less">
	.out-btn{
		width: 660upx;
		height: 80upx;
		margin: 0 auto;
		text-align: center;
		line-height: 80upx;
		background: #918984;
		color: #FFFFFF;
		border-radius: 40upx;
	}
	
	.waterfall {
		column-count: 2;
		column-gap: 0;

		.item {
			box-sizing: border-box;
			break-inside: avoid;
			padding: 10px;
		}

		.item-content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 10px;
			height: auto;
			font-size: 20px;
			color: #686868;
			box-sizing: border-box;
			border: 1px solid #ccc;
		}

	}
</style>
