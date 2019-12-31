// pages/moreStandard/moreStandard.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var paperStandard=wx.getStorageSync('paperStandard');
		if(paperStandard==null){
			paperStandard=require("/data/data.js").paperStandard;
		}
		this.setData({
			paperStandard:paperStandard
		})
	},
	nameInput:function(e){
		var id=e.currentTarget.dataset.id;
		console.log(id)
		var ps=this.data.paperStandard;
		for (var i=0;i<ps.length;i++) {
			if (ps[i] && ps[i].id == id) {
				console.log(e.detail.value);
				console.log(this.data.paperStandard[i].name);
				this.data.paperStandard[i].name=e.detail.value;
				wx.setStorageSync('paperStandard', this.data.paperStandard);
				break;			
			}
		}
	},
	heightInput: function (e) {
		var id = e.currentTarget.dataset.id;
		var ps = this.data.paperStandard;
		for (var i = 0; i < ps.length; i++) {
			if (ps[i] &&ps[i].id == id) {
				console.log(e.detail.value);
				console.log(this.data.paperStandard[i].height);
				this.data.paperStandard[i].height = e.detail.value;
				wx.setStorageSync('paperStandard', this.data.paperStandard);
				break;
			}
		}
	},
	widthInput: function (e) {
		var id = e.currentTarget.dataset.id;
		var ps = this.data.paperStandard;
		for (var i = 0; i < ps.length; i++) {
			if (ps[i] && ps[i].id == id) {
				console.log(e.detail.value);
				console.log(this.data.paperStandard[i].width);
				this.data.paperStandard[i].width = e.detail.value;
				wx.setStorageSync('paperStandard', this.data.paperStandard);
				break;
			}
		}
	},
	weightInput: function (e) {
		var id = e.currentTarget.dataset.id;
		var ps = this.data.paperStandard;
		for (var i = 0; i < ps.length; i++) {
			if (ps[i] && ps[i]&&ps[i].id == id) {
				console.log(e.detail.value);
				console.log(this.data.paperStandard[i].weight);
				this.data.paperStandard[i].weight = e.detail.value;
				wx.setStorageSync('paperStandard', this.data.paperStandard);
				break;
			}
		}
	},
	addStandard:function(e){
		var newData={
			id:this.data.paperStandard.length,
			name: '未命名' + this.data.paperStandard.length,
			height:null,
			width:null,
			weight:null
		}
		this.data.paperStandard.push(newData);
		this.setData({
			paperStandard:this.data.paperStandard
		})
		wx.setStorageSync('paperStandard', this.data.paperStandard);
	},
	deletePaperStandard:function(e){
		var id=e.currentTarget.dataset.id;
		console.log(id+"删除")
		var ps = this.data.paperStandard;
		var that=this;
		wx.showModal({
			title: '提示',
			content: '确定要删除'+ps[id].name+'吗？',
			success(res) {
				if (res.confirm) {
					that.deleteConfirm(ps,id);
					console.log('用户点击确定')
				} else if (res.cancel) {
					console.log('用户点击取消')
				}
			}
		})
	
	},
	deleteConfirm:function(ps,id){
		for (var i = 0; i < ps.length; i++) {
			if (ps[i] && ps[i].id == id) {
				for (var r = i + 1; r < this.data.paperStandard.length; r++) {
					var ps = this.data.paperStandard[r];
					ps.id = r - 1;
					this.data.paperStandard[r - 1] = ps;
				}
				this.data.paperStandard.pop();
				this.setData({
					paperStandard: this.data.paperStandard
				})
				wx.setStorageSync('paperStandard', this.data.paperStandard);
				break;
			}
		}
	},
	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})