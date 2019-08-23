$ (function () {
	 'use strict';


	 var myHeader = $('.header');
	 myHeader.height($(window).height());
	 $(window).resize(function (){
	  	myHeader.height($(window).height());
	  });

  
	 $('.links li a').click(function (){
	 	$(this).parent().addClass('active').siblings().removeClass('active');
	  });

	 $('#Container').mixItUp();

	 $('.shuffel li').click ( function(){
	 	$(this).addClass('active').seblings().removeClass('active');

	 });

	 $('html').niceScroll({
	 	cursorcolor : '  #1abc9c ' ,
	 	cursorborder: '  #1abc9c ' ,
	 });

});