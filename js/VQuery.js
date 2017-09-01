'use strict'

/** 
 * 主要调用方法为 $( '元素标签' ).执行方法( '参数1','参数2' )
 * 
 * */
/*--------------------------------------自动居中(登录浮层) start -----------------------------------*/
/*
 g() -- 获取元素对象
 autoCenter() -- 自动居中元素(el = Element)
 fillToBody() -- 自动扩展元素到全部显示区域
 
 */

$.fn['layerUi'] =  $(window).resize =  function() {
	var bodyW = 1,
		bodyH,
		elW,
		elH;

	var _dialog = {
		g: function(elements) {
			return document.querySelector(elements);
		},
		init: function(el1, el2) {

			this.autoCenter(this.g(el1));

			if(arguments.length == 2) {

				this.fillToBody(this.g(el2));
			}
			
			return {
				el1,
				el2
			}
		},
		autoCenter: function(el1) {
			//获取可视区域的宽、高
			bodyW = document.documentElement.clientWidth;
			bodyH = document.documentElement.clientHeight;

			//获取元素的宽、高
			elW = el1.offsetWidth;
			elH = el1.offsetHeight;

			//设置居中 (可视区域宽/高 - 元素宽/高)/2
			el1.style.left = (bodyW - elW) / 2 + 'px';
			el1.style.top = (bodyH - elH) / 2 + 'px';

		},
		fillToBody: function(el2) {

			el2.style.width = document.documentElement.clientWidth + 'px';
			el2.style.height = document.documentElement.clientHeight + 'px';
		}
	};
	return _dialog;
};

/*调用*/
//$('body').layerUi().init();
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