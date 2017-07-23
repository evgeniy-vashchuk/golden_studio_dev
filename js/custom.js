// Прижатие header-a и footer-a =================

$(function(){

var hf = function(){
	var h_header = $('header').height();
	var h_footer = $('footer').height();
	$('.content').css({
		'paddingTop': h_header,
		'paddingBottom': h_footer
	});
};

$(window).bind('load resize', hf);

});


// Кнопка меню ==========================================


$(document).ready(function(){
			var touch = $('#touch-menu');
			var menu = $('.header__hidden');
		 
			$(touch).on('click', function(e) {
				e.preventDefault();
				menu.slideToggle(800);
			});
			$(window).resize(function(){
				var wid = $(window).width();
				if(wid > 520 && menu.is(':hidden')) {
					menu.removeAttr('style');
				}
			});
});


// Фикcированная шапка при скролле =================

$(document).ready(function(){
	var sc = $(window).scrollTop();
	if (sc > 50) {
		$("#header__fixed").addClass("small");
	} else {
		$("#header__fixed").removeClass("small");
	}
});

$(window).scroll(function () {
	var sc = $(window).scrollTop();
	if (sc > 50) {
		$("#header__fixed").addClass("small");
	} else {
		$("#header__fixed").removeClass("small");
	}
});


$(document).ready(function(){
	$(window).scroll(function () {
	var sc = $(window).scrollTop();
	if (sc > 50) {
		$("#header__fixed-2").addClass("small");
	} else {
		$("#header__fixed-2").removeClass("small");
	}
});
});

$(window).scroll(function () {
	var sc = $(window).scrollTop();
	if (sc > 50) {
		$("#header__fixed-2").addClass("small");
	} else {
		$("#header__fixed-2").removeClass("small");
	}
});


// Плавная прокрутка при скроле =================


$(function(){

	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 700);
		$('.header__hidden').slideToggle(800);
		return false;
	});

});

/*Фикс скрола лого ===================================*/

$(function(){

	$('a[href="#anchor-99"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 700);
		return false;
	});

});


// Кнопка TOP =====================

$(document).ready(function(){
	var sc = $(window).scrollTop();
	if (sc > 50) {
		$(".top").addClass("top-hidden");
	} else {
		$(".top").removeClass("top-hidden");
	}
});

$(window).scroll(function () {
	var sc = $(window).scrollTop();
	if (sc > 50) {
		$(".top").addClass("top-hidden");
	} else {
		$(".top").removeClass("top-hidden");
	}
});

// Скрытие меню при клике на пустом пространстве =====================

$(document).click( function(event){
	if( $(event.target).closest(".header__hidden").length ) 
	return;
	$(".header__hidden").slideUp("slow");
	event.stopPropagation();
});
$('#touch-menu').click( function() {
		$(this).siblings(".header__hidden").slideToggle("slow");
		return false;
	});

// Скрытие меню при нажатии на лого =====================

$('a[id="header__logo"]').click( function(){
	var sc = $(window).scrollTop();
	if (sc > 50) {
	$('.header__hidden').hide(800);
	}
	return false;
});

// Wow - анимация =====================

new WOW().init();

// Галерея =====================

$('.mfp-gallery-1').magnificPopup({
	mainClass: 'mfp-zoom-in',
	type: 'image',
	tLoading: '',
	gallery:{
		enabled:true,
	},
	removalDelay: 300,
	callbacks: {
		beforeChange: function() {
			this.items[0].src = this.items[0].src + '?=' + Math.random(); 
		},
		open: function() {
			$.magnificPopup.instance.next = function() {
				var self = this;
				self.wrap.removeClass('mfp-image-loaded');
				setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
			};
			$.magnificPopup.instance.prev = function() {
				var self = this;
				self.wrap.removeClass('mfp-image-loaded');
				setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
			};
		},
		imageLoadComplete: function() { 
			var self = this;
			setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
		}
	}
});

$('.mfp-gallery-2').magnificPopup({
	mainClass: 'mfp-zoom-in',
	type: 'image',
	tLoading: '',
	gallery:{
		enabled:true,
	},
	removalDelay: 300,
	callbacks: {
		beforeChange: function() {
			this.items[0].src = this.items[0].src + '?=' + Math.random(); 
		},
		open: function() {
			$.magnificPopup.instance.next = function() {
				var self = this;
				self.wrap.removeClass('mfp-image-loaded');
				setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
			};
			$.magnificPopup.instance.prev = function() {
				var self = this;
				self.wrap.removeClass('mfp-image-loaded');
				setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
			};
		},
		imageLoadComplete: function() { 
			var self = this;
			setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
		}
	}
});

$('.mfp-gallery-3').magnificPopup({
	mainClass: 'mfp-zoom-in',
	type: 'image',
	tLoading: '',
	gallery:{
		enabled:true,
	},
	removalDelay: 300,
	callbacks: {
		beforeChange: function() {
			this.items[0].src = this.items[0].src + '?=' + Math.random(); 
		},
		open: function() {
			$.magnificPopup.instance.next = function() {
				var self = this;
				self.wrap.removeClass('mfp-image-loaded');
				setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
			}
			$.magnificPopup.instance.prev = function() {
				var self = this;
				self.wrap.removeClass('mfp-image-loaded');
				setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
			}
		},
		imageLoadComplete: function() { 
			var self = this;
			setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
		}
	}
});

$('.mfp-gallery-4').magnificPopup({
	mainClass: 'mfp-zoom-in',
	type: 'image',
	tLoading: '',
	gallery:{
		enabled:true,
	},
	removalDelay: 300,
	callbacks: {
		beforeChange: function() {
			this.items[0].src = this.items[0].src + '?=' + Math.random(); 
		},
		open: function() {
			$.magnificPopup.instance.next = function() {
				var self = this;
				self.wrap.removeClass('mfp-image-loaded');
				setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
			}
			$.magnificPopup.instance.prev = function() {
				var self = this;
				self.wrap.removeClass('mfp-image-loaded');
				setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
			}
		},
		imageLoadComplete: function() { 
			var self = this;
			setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
		}
	}
});


// Кнопка FUTURE-plans=====================


$(document).ready(function(){
			var touch = $('#future-plans');
			var menu = $('.information');
		 
			$(touch).on('click', function(e) {
				e.preventDefault();
				menu.slideToggle(800);
			});
});


// Прелоадер =====================

  $(window).on('load', function () {
    $preloader = $('.loaderArea'),
    $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });


// Подсветка пунктов меню при скроллинге =====================

var navLi = $('.header__menu li, .header__menu-2 li');

$('.tracked').waypoint(function(direction){
   if (direction === 'down') {
   var hash = $(this).attr('id');

   navLi.removeClass('active');

   $.each( navLi, function(){
      if ($(this).children('a').attr('href').slice(1) == hash ) {
      	$(this).addClass('active');
      }
   });
   }
},{
   offset: '25%'
}).waypoint(function(direction){
   if (direction === 'up') {
   var hash = $(this).attr('id');

   navLi.removeClass('active');

   $.each( navLi, function(){
      if ($(this).children('a').attr('href').slice(1) == hash ) {
      	$(this).addClass('active');
      }
   });
   }
},{
   offset: -200
});
