/**
 * 帮助类
 */
var TestUtil = {

	// 绑定事件
	attachEvents: function(events) {
		this.disAttachEvents(events);
		for(var i = 0, el, ev; i < events.length; i++) {
			el = events[i][0];
			ev = events[i][1];
			el.on(ev);
		}
	},
	// 解绑事件
	disAttachEvents: function(events) {
		for(var i = 0, el, ev; i < events.length; i++) {
			el = events[i][0];
			ev = events[i][1];
			el.off(ev);
		}
	},
	/**
	 * 将form表单内容转换为json对象
	 * checkbox值以逗号隔开
	 */
	serializeJson: function(formId) {
		var serializeObj = {},
			array = $("#" + formId).serializeArray();
		$(array).each(function() {
			if(serializeObj[this.name]) {
				serializeObj[this.name] += ',' + this.value;
			} else {
				serializeObj[this.name] = this.value;
			}
		});
		return serializeObj;
	},
}