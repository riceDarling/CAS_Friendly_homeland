/*window.onload = function(){
	var drag = new Drag();
	drag.init({
		id : 'drag',
		toDown : function(){
			document.title = '您现在可以拖拽...'
		},
		toUp : function(){
			document.title = '您现在不可以拖拽...'
		}
	});
};


function Drag(){
	this.obj = null;
	this.disX = 0;
	this.disY = 0;
	
	this.settings = {
		toDown : function(){},
		toUp : function(){}
	}
};

Drag.prototype.init = function(opt){
	this.oDiv = document.getElementById(opt.id);
	
	var _this = this;
	this.oDiv.onmousedown = function(ev){
		var ev = ev || window.event;
		_this.fnDown(ev);

		document.onmousemove = function(ev){
			var ev = ev || window.event;
			_this.fnMove(ev);
		}
		
		document.onmouseup = function(ev){
			var ev = ev || window.event;
			_this.fnUp(ev);

		}
		
		return false;
	}
};

Drag.prototype.fnDown = function(ev){
	this.disX = ev.clientX - this.oDiv.offsetLeft;
	this.disY = ev.clientY - this.oDiv.offsetTop;
};


Drag.prototype.fnMove = function(ev){
	var L = ev.clientX - this.disX;
	var T = ev.clientY - this.disY;
	if( L < 0){
		L = 0;
	}else if( L > document.documentElement.clientWidth - this.oDiv.offsetWidth){
		L = document.documentElement.clientWidth - this.oDiv.offsetWidth
	};
	
	if( T < 0 ){
		T = 0;
	}else if( T > document.documentElement.clientHeight - this.oDiv.offsetHeight){
		T = document.documentElement.clientHeight - this.oDiv.offsetHeight
	};
	
	this.oDiv.style.left = L + 'px';
	this.oDiv.style.top = T + 'px';
};

Drag.prototype.fnUp = function(){
	document.onmousemove = null;
	document.onmouseup = null;
};
*/

/*function Drag(){
	this.obj = null;
	this.disX = 0;
	this.disY = 0;
};

Drag.prototype = {
	init : function(id){
		this.obj = document.getElementById(id);
		
		var _this = this;
		this.obj.onmousedown = function(ev){
			var ev = ev || window.event;
			_this.fnDown(ev);

			document.onmousemove = function(ev){
				var ev = ev || window.event;
				_this.fnMove(ev);
			};
			
			document.onmouseup = function(ev){
				var ev = ev || window.event;
				_this.fnUp(ev);
			}
			return false;
		}
	},
	fnDown : function(ev){

		this.disX = ev.clientX - this.obj.offsetLeft;
		this.disY = ev.clientY - this.obj.offsetTop;
	},
	fnMove : function(ev){

		this.obj.style.left = ev.clientX - this.disX + 'px';
		this.obj.style.top = ev.clientY - this.disY + 'px';
	},
	fnUp : function(ev){

		document.onmousemove = null;
		document.onmouseup = null;
	}
}

window.onload = function(){
	var drag = new Drag();
	drag.init('drag');
};*/
