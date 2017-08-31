/**                                                                                                       
 * 定义Test类                                                                                                
 */
var Test = function() { // 实际相当于java的构造方法                                                                 
	var that = this;

	this._attachEvents();

}

Test.prototype = { // 相当于java中的块：定义变量和函数的地方                                                            
	constructor: Test,
	_events: [],

	_attachEvents: function() {
		var that = this;
		this._events = [
			// 如果 search 方法带参数 则用 function(){this._search()}                                              
			[$("#search_btn"), {
				"click": $.proxy(this._search(), this)
			}]
		]
		// 绑定事件                                                                                           
		TestUtil.attachEvents(this._events);

		/**                                                                                               
		 * 如果页面显示的数据都有对当前一行数据有操作，如：删除、修改                                                                  
		 * 则采用冒泡原则                                                                                        
		 *                                                                                                
		 * 如：查询的结果集在                                                                                      
		 * <div class="page-container">                                                                   
		 *     序号    姓名   年龄   操作                                                                         
		 *    1     zs    22   <btn class='del'>删除<btn class='update'>修改                                  
		 *    2     wb    22   <btn class='del'>删除<btn class='update'>修改                                  
		 * </div>                                                                                         
		 *                                                                                                
		 * $(".page-container")                                                                           
		 *     .on('click','.del',function(){                                                             
		 *          // 删除 具体操作                                                                            
		 *     })                                                                                         
		 *     .on('click','.update',function(){                                                          
		 *         // 更新具体操作                                                                              
		 *     })                                                                                         
		 *                                                                                                
		 */

	},

	_search: function() {

		var that = this;
		// 获取form表单中的参数，转json对象                                                                           
		var param = TestUtil.serializeJson("search_form");
		// 可以直接将param带到后台，如果有区域是动态的集合数据,有如下操作                                                             
		// 1. 赋值                                                                                        
		// param.list = that._getList();                                                                
		// 2. 对象转json串,这里测试，不转串，数据带不到后台                                                                 
		// jsonParam =  JSON.stringify(param);                                                          

		//......                                                                                        

	},
	// 实际情况实际对待                                                                                           
	_getList: function() {
		var arry = [];
		for(var i = 0; i < 5; i++) {
			arry.push(i);
		}
		return arry;
	}
}