//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
		clothValue:null,
		paperValue:null,
		result:null,
		paperStandard: ['A4'],
		checkId:0
  },
  //事件处理函数
  onShow: function () {
		this.setData({
			paperStandard:wx.getStorageSync('paperStandard'),
			checkId:wx.getStorageSync('checkId')
		})
  },
	onBindClothInput:function(event){
		this.setData({
			clothValue:event.detail.value
		})
		this.setResult();
	},
	onBindClothConfirm:function(){
		this.setData({
			focusPaper:true
		})
	},
	onBindPaperInput: function (event) {
		this.setData({
			paperValue:event.detail.value
		})
		this.setResult();
	},
	onBindPaperConfirm: function () {
		this.setData({
			focusPaper: false
		})
	},
	setResult:function(){
		//result=0.0001*clothValue/0.0000135*pv
		//result=cv*z/(c*k*pv) cv布重 z纸标重 c长 k宽 pv纸重
		if(this.data.paperValue!=null&&this.data.clothValue!=null){

			var ps=this.data.paperStandard[this.data.checkId];

			// var result = 0.001 * this.data.clothValue /( 0.0000135 * this.data.paperValue);
			var result=this.data.clothValue * ps.weight / (0.0001*ps.height * ps.width * this.data.paperValue);
			result =result.toFixed(4);
			this.setData({
				result:result
			})
		}
	},
	bindPickerChange: function (e) {
		console.log('picker发送选择改变，携带值为', e.detail.value)
		wx.setStorageSync('checkId', e.detail.value);
		this.setData({
			checkId: e.detail.value
		})
		this.setResult();
	},
	moreStandard:function(e){
		wx.navigateTo({
			url: '../moreStandard/moreStandard'
		})
	}
})
