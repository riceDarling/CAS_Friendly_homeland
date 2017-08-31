'use strict'

/** 
 * 主要调用方法为 $( '元素标签' ).执行方法( '参数1','参数2' )
 * 
 * */
/*--------------------------------------自动居中(登录浮层) start -----------------------------------*/
//获取元素对象
function g(id) {
	return document.getElementById(id);
};

//自动居中元素 (el = Element)
function autoCenter(el) {
	var bodyW = document.documentElement.clientWidth;
	var bodyH = document.documentElement.clientHeight;

	var elW = el.clientWidth;
	var elH = el.clientHeight;

	el.style.left = (bodyW - elW) / 2 + 'px';
	el.style.top = (bodyH - elH) / 2 + 'px';
};

function showDialog(el1,el2) {
	autoCenter(g(el1));
	fillToBody(g(el2));
};
//	自动扩展元素到全部显示区域
function fillToBody(el) {
	el.style.width = document.documentElement.clientWidth + 'px';
	el.style.height = document.documentElement.clientHeight + 'px';
};
//侦听浏览器窗口大小变化
window.onresize = showDialog;

/*--------------------------------------自动居中(登录浮层) end -----------------------------------*/


/*--------------------------------------拖拽组件  start -------------------------------------------*/
$.fn['Dragdealer'] = function() {
	var self = this,
		obj = null,
		disX = 0,
		disY = 0,
		_zIndex = 9999,
		settings = {
			/*鼠标点下执行的方法*/
			toDown: function() {},
			/*鼠标抬起执行的方法*/
			toUp: function() {},
		};

	var drag = {
		//el1 - 可拖动元素  el2 - 拖动时移动的元素
		init: function(el1, el2, ev) {
			//arguments.length 参数的个数
			if(arguments.length == 1) {
				el2 = el1;
			};
			/* 初始化 */
			//settings = $.extend(settings, options);
			var ev = ev || window.event;
			this._el1 = document.querySelector(el1);
			this._el2 = document.querySelector(el2);
			
			var _this = this;
			
			this._el1.onmousedown = function(ev) {
				var ev = ev || window.event;
				_this.fnDown(ev);
				document.onmousemove = function(ev) {
					var ev = ev || window.event;
					_this.fnMove(ev);
				}

				document.onmouseup = function() {
					var ev = ev || window.event;
					_this.fnUp(ev);
				}

				return false;
			}
		},
		fnDown: function(ev) {

			this._el2.style.zIndex = _zIndex;
			this.disX = ev.clientX - this._el2.offsetLeft;
			this.disY = ev.clientY - this._el2.offsetTop;
		},
		fnMove: function(ev) {

			var L = ev.clientX - this.disX;
			var T = ev.clientY - this.disY;

			if(L < 0) {
				L = 0;
			} else if(L > document.documentElement.clientWidth - this._el2.offsetWidth) {
				L = document.documentElement.clientWidth - this._el2.offsetWidth;
			}

			if(T < 0) {
				T = 0;
			} else if(T > document.documentElement.clientHeight - this._el2.offsetHeight) {
				T = document.documentElement.clientHeight - this._el2.offsetHeight;
			}

			this._el2.style.left = L + 'px';
			this._el2.style.top = T + 'px';

		},
		fnUp: function(ev) {
			this._el2.style.zIndex = 9998;
			document.onmousemove = null;
			document.onmouseout = null;
		}

	}
	return drag;
};

/*调用*/
//$('body').Dragdealer().init('div1');

/*--------------------------------------拖拽组件  end -------------------------------------------*/