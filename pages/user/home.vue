<template>
	<view class="content">
		<navigation-custom :config="config" />
		
		<view class="grid col-24 padding-sm">
			Qiu Qiu
		</view>
		
		<view class="cu-bar margin-top bg-white">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>镂空按钮
			</view>
			<view class="action">
			</view>
		</view>
		<view class="grid col-24 padding-sm">
			<view class="margin-tb-sm text-center">
				<button class="cu-btn round" :class="['lines-red','shadow']" @tap="clearFlag()">清除缓存</button>
			</view>
			
			<view class="margin-tb-sm text-center">
				<button class="cu-btn round" :class="['lines-black','shadow']" @tap="showFall()">瀑布布局</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shadow: false,
				bordersize: '',
				
				config: {
					bgcolor: "#f37b1d", //背景颜色
				},
			}
		},
		mounted() {
			console.log('user mounted')
		},
		methods: {
			showFall: function() {
				uni.navigateTo({
					url: "/pages/user/waterfall"
				})
			},
			clearFlag: function() {
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
</style>
