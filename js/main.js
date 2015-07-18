$(document).ready(function(){
	var runPage;
	runPage = new FullPage({
			id: 'pageContain',
			slideTime: 800,
			effect: {
				transform: {
	            translate: 'Y'    //垂直滚动，改为X则是水平滚动
	        },
	        opacity: [0, 1]
	    },
	    mode: 'wheel, touch, nav:navBar',
	    easing: 'ease'
	});
});
