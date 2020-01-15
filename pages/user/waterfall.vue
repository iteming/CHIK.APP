<template>
	<!-- /*
	  注意:
	  1. gutterWidth需要与width一起使用才会生效，否则会进行自适应宽度(使用rem布局时，需先计算出自适应后的宽度再传值)
	  2. 使用了`waterfall`的父组件,如果样式存在问题，可去掉css `scoped`尝试一下
	*/ -->
	<view class="container-water-fall">
		<view>
			<button @tap="loadmore()">loadmore</button> 
			<button @tap="mix()">mix</button> 
			<button @tap="switchCol('5')">5列</button>
			<button @tap="switchCol('8')">8列</button> 
			<button @tap="switchCol('10')">10列</button> 
		</view>
		
		<waterfall :col='col' :width="itemWidth" :gutterWidth="gutterWidth" :data="data" @loadmore="loadmore" @scroll="scroll">
			<template>
				<view class="cell-item" v-for="(item,index) in data" v-bind:key="index">
					<img v-if="item.img" :src="item.img" alt="加载错误" mode="widthFix"/>
					<!-- <img v-if="item.img" :lazy-src="item.img" alt="加载错误" /> -->
					<!-- <view class="item-body">
						<view class="item-desc">{{item.title}}</view>
						<view class="item-footer">
							<view class="avatar" :style="{backgroundImage : 'url({{item.avatar}})' }"></view>
							<view class="name">{{item.user}}</view>
							<view class="like" :class="item.liked?'active':''">
								<i></i>
								<view class="like-total">{{item.liked}}</view>
							</view>
						</view>
					</view> -->
				</view>
			</template>
		</waterfall>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: [
					{"img":"https://s1.st.meishij.net/r/23/159/2414773/a2414773_157874221566808.jpg"},
					{"img":"https://s1.st.meishij.net/r/24/80/13145024/a13145024_157881633102074.jpg"},
					{"img":"https://s1.st.meishij.net/r/93/190/13922593/a13922593_157890202768641.jpg"},
					{"img":"https://s1.st.meishij.net/r/93/190/13922593/a13922593_157890202768641.jpg"},
					{"img":"https://s1.st.meishij.net/r/23/159/2414773/a2414773_157874171388915.jpg"},
					{"img":"https://s1.st.meishij.net/r/23/159/2414773/a2414773_157874221566808.jpg"},
				],
				col: 2,
				itemWidth() {
					return (138 * 0.5 * (414 / 375));
					// return (138 * 0.5 * (document.documentElement.clientWidth / 375)) // # rem布局 计算宽度
				},
				gutterWidth() {
					return (9 * 0.5 * (414 / 375));
					// return (9 * 0.5 * (document.documentElement.clientWidth / 375)) //# rem布局 计算x轴方向margin(y轴方向的margin自定义在css中即可)
				}
			}
		},
		computed: {
			
		},
		methods: {
			scroll(scrollData) {
				console.log(scrollData)
			},
			switchCol(col) {
				this.col = col
				console.log(this.col)
			},
			loadmore() {
				this.data = this.data.concat(this.data)
			},
			mix() {
				this.data = this.data.concat(this.data)
			}
		}
	}
</script>

<style>
</style>
