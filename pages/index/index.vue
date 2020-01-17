<template>
	<view>		
		<basics v-if="PageCur=='basics'" class="content"></basics>
		<components v-if="PageCur=='component'" class="content"></components>
		<plugin v-if="PageCur=='plugin'" class="content"></plugin>
		<index-home v-if="PageCur=='index-home'" class="content" ref="indexhome"></index-home>
		<user-home v-if="PageCur=='user-home'" class="content"></user-home>

		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="index-home">
				<view class='cuIcon-cu-image'>
					<image :src="'http://q417edx0f.bkt.clouddn.com/index-home' + [PageCur=='index-home'?'_cur':''] + '.png'" mode="aspectFill"></image>
				</view>
				<view :class="PageCur=='index-home'?'text-red':'text-black'">推荐</view>
			</view>
			<view class="action" @click="NavChange" data-cur="basics">
				<view class='cuIcon-cu-image'>
					<image :src="'http://q417edx0f.bkt.clouddn.com/basics' + [PageCur=='basics'?'_cur':''] + '.png'" mode="aspectFill"></image>
				</view>
				<view :class="PageCur=='basics'?'text-red':'text-black'">元素</view>
			</view>
			<view class="action" @click="NavChange" data-cur="component">
				<view class='cuIcon-cu-image'>
					<image :src="'http://q417edx0f.bkt.clouddn.com/component' + [PageCur == 'component'?'_cur':''] + '.png'" mode="aspectFill"></image>
				</view>
				<view :class="PageCur=='component'?'text-red':'text-black'">组件</view>
			</view>
			<view class="action" @click="NavChange" data-cur="plugin">
				<view class='cuIcon-cu-image'>
					<image :src="'http://q417edx0f.bkt.clouddn.com/plugin' + [PageCur == 'plugin'?'_cur':''] + '.png'" mode="aspectFill"></image>
				</view>
				<view :class="PageCur=='plugin'?'text-red':'text-black'">扩展</view>
			</view>
			<view class="action" @click="NavChange" data-cur="user-home">
				<view class='cuIcon-cu-image'>
					<image :src="'http://q417edx0f.bkt.clouddn.com/user-home1' + [PageCur=='user-home'?'_cur':''] + '.png'" mode="aspectFill"></image>
				</view>
				<view :class="PageCur=='user-home'?'text-red':'text-black'">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				PageCur: 'user-home'
			}
		},
		onReachBottom() {
			console.log('index-home onReachBottom')
			if(this.PageCur=='index-home'){
				this.$refs.indexhome.reachBottom();
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>
	.content {
		background-color: #FFFFFF;
		margin-bottom:100rpx;
	}
</style>
