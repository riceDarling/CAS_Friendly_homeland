;
(function() {
	//滚动条
	$('.l-ui-aside-navbar').niceScroll({
		styler: "fb",
		cursorcolor: "#f4f4f4",
		cursorwidth: '0',
		horizrailenabled: false,
		cursorborderradius: 0,
		cursorborder: '0',
		background: '',
		zindex: 99999999999999999,
		cursoropacitymin: 0,
		cursoropacitymax: 0,
	});
	
	
	//侧边栏的搜索展开
	$('#luiList dt').click(function(){
		if(!$(this).next().hasClass('l-ui-aside-active')){
			$('#luiList dd').removeClass('l-ui-aside-active');
			$(this).next().addClass('l-ui-aside-active');
			
		}else{
			$(this).next().removeClass('l-ui-aside-active');
		}
	})
	
})();