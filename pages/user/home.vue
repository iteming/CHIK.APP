<template>
	<view>
		<view>我的</view>
		<view class="out-btn" @tap="clearLaunchFlag()">清除launchFlag值</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
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

<style>
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
</style>
