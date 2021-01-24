<template>
	<view class="container">
		<!-- #ifdef MP-WEIXIN -->
		<view class="userinfo">
			<button v-if="!hasUserInfo" open-type="getUserInfo" @getuserinfo="getUserInfo"> 获取头像昵称 </button>
			<block v-else>
				<image class="userinfo-avatar" :src="user.avatar" mode="cover"></image>
				<text class="userinfo-nickname">{{user.userName}}</text>
			</block>
		</view>
		<view v-if="!inWxwork" class="testblock">
			<button @click="getOpenid">获取用户openid</button>
			<view>
				<view>openid: </view>
				<view>{{openid || ''}}</view>
			</view>
			<button open-type="contact">进入客服会话</button>
		</view>
		<view v-if="inWxwork" class="testblock">
			<button @click="getMemberId">获取用户memberId</button>
			<view>
				<view>memberId: </view>
				<view class="memberId">{{memberId || ''}}</view>
			</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef MP-DINGTALK -->
		<view class="userinfo">
			<block>
				<image class="userinfo-avatar" :src="user.avatar" mode="cover"></image>
				<text class="userinfo-nickname">{{user.userName}}</text>
			</block>
		</view>
		<view class="testblock">
			<button @click="getMemberId">获取用户memberId</button>
			<view>
				<view>memberId: </view>
				<view class="memberId">{{memberId || ''}}</view>
			</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: null,
				hasUserInfo: false,
				openid: null,
				memberId: null, // for wxwork/dingtalk
				inWxwork: this.$cabloy.data.wxwork,
			}
		},
		created() {
			if (this.$cabloy.data.user) {
				this.__updateUser(this.$cabloy.data.user);
			} else {
				this.$cabloy.__loginReadyCallback = res => {
					this.__updateUser(res.op);
				}
			}
		},
		methods: {
			__updateUser(user) {
				if (!user) return;
				this.user = user;
				this.hasUserInfo = !!user.userName;
			},
			getUserInfo(e) {
				// 判断是否成功取得用户授权
				if (e.detail.errMsg.indexOf(':fail') > -1) return;
				// 登录
				this.$cabloy.util.login({
					detail: e.detail
				}).then(res => {
					this.__updateUser(res.op);
				}).catch(err => {
					console.log(err);
				});
			},
			getOpenid() {
				this.$cabloy.api.post('/test/wechat/test/getOpenidMini', {
					scene: this.$cabloy.config.base.scene,
				}).then(data => {
					this.openid = data.openid;
				});
			},
			getMemberId() {
				// #ifdef MP-WEIXIN
				this.$cabloy.api.post('/test/wxwork/test/getMemberId').then(data => {
					this.memberId = data.memberId;
				});
				// #endif
				// #ifdef MP-DINGTALK
				this.$cabloy.api.post('/test/dingtalk/test/getMemberId').then(data => {
					this.memberId = data.memberId;
				});
				// #endif
			},
		}
	}
</script>

<style>
	.userinfo {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.userinfo-avatar {
		width: 128rpx;
		height: 128rpx;
		margin: 20rpx;
		border-radius: 50%;
	}

	.userinfo-nickname {
		color: #aaa;
	}

	.testblock {
		margin-top: 40px;
	}

	.memberId {
		color: green;
	}
</style>
