//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
		clothValue:null,
		paperValue:null,
		result:null
  },
  //事件处理函数
  onLoad: function () {
    
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
		if(this.data.paperValue!=null&&this.data.clothValue!=null){
			var result = 0.001 * this.data.clothValue /( 0.0000135 * this.data.paperValue);
			result =result.toFixed(4);
			this.setData({
				result:result
			})
		}
	}
})
