$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})
if($('#text-replace').length) {
	var typed = new Typed('#text-replace', {
		strings: ["<span class='main'>print</span><span class='text3'>('Hello, I am Nguyen Pham!')</span> ^500 <br><span class='main'>workingOn</span><span class='text3'>('Js, Sass, WordPress, PHP, TypeScript, Ps, Ai...')</span> ^500 <br><span class='include'>let</span> projects <span class='text3'>></span> <span class='main2'>100</span> ^500 <br><span class='include'>let</span> skillsEngineers <span class='text3'>≈</span> <span class='main2'>'90%'</span> ^500 <br><span class='include'>let</span> labs <span class='text3'>=</span> <span class='text2'>handsOn</span> ^500 <br><span class='include'>let</span> hire <span class='text3'>=</span> <span class='text2'>available</span> ^500 <br><span class='include'>let</span> DOB <span class='text3'>=</span> <span class='main'>'Aug 16-1983'</span> ^500 <br><span class='include'>let</span> location <span class='text3'>=</span> <span class='text2'>\"Fort Worth, Texas\"</span> ^500 <br><span class='include'>let</span> Companies <span class='text3'>></span> <span class='text2'>6</span><br><br><a class='text-white' href='//baonguyenyam.github.io' target='_blank'>readMore();</a><br>..."],
		typeSpeed: 20,
		backDelay: 50000,
		loop: true,
		contentType: 'html',
		loopCount: false
	});
}
if($('#text-replace-vn').length) {
	var typedvn = new Typed('#text-replace-vn', {
		strings: ["<span class='main'>viet</span><span class='text3'>('Xin chao, toi la Nguyen Pham!')</span> ^500 <br><span class='main'>lamViecTren</span><span class='text3'>('Js, Sass, WordPress, PHP, TypeScript, Ps, Ai...')</span> ^500 <br><span class='include'>let</span> cacDuAn <span class='text3'>></span> <span class='main2'>100</span> ^500 <br><span class='include'>let</span> kyNangCongNghe <span class='text3'>≈</span> <span class='main2'>'90%'</span> ^500 <br><span class='include'>let</span> hopTac <span class='text3'>=</span> <span class='text2'>chaoDon</span> ^500 <br><span class='include'>let</span> lamViec <span class='text3'>=</span> <span class='text2'>sanSang</span> ^500 <br><span class='include'>let</span> sinhNhat <span class='text3'>=</span> <span class='main'>'16-08-1983'</span> ^500 <br><span class='include'>let</span> noiSong <span class='text3'>=</span> <span class='text2'>\"Fort Worth, Texas\"</span> ^500 <br><span class='include'>let</span> congTy <span class='text3'>></span> <span class='text2'>6</span><br><br><a class='text-white' href='//baonguyenyam.github.io' target='_blank'>xemThem();</a><br>..."],
		typeSpeed: 20,
		backDelay: 50000,
		loop: true,
		contentType: 'html',
		loopCount: false
	});
}

function setTheme() {
	var head = document.getElementsByTagName('HEAD')[0];
	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.setAttribute("id", "nguyen-theme");
	link.type = 'text/css';
	link.href = '/cv/css/dist/dark.min.css';
	head.appendChild(link);
}
function removeTheme() {
	$('#nguyen-theme').remove()
}

/////////////////////////////////////////////////////
/////////////////////  ICON MENU  //////////////////////
/////////////////////////////////////////////////////

///Initiation Variables
var icon_1 = document.getElementById("gimenu");
var topLine_1 = document.getElementById("top-line-1");
var middleLine_1 = document.getElementById("middle-line-1");
var bottomLine_1 = document.getElementById("bottom-line-1");
var state_1 = "menu";  // can be "menu" or "arrow"
var topLineY_1;
var middleLineY_1;
var bottomLineY_1;
var topLeftY_1;
var topRightY_1;
var bottomLeftY_1;
var bottomRightY_1;
var topLeftX_1;
var topRightX_1;
var bottomLeftX_1;
var bottomRightX_1;

///Animation Variables
var segmentDuration_1 = 15;
var menuDisappearDurationInFrames_1 = segmentDuration_1;
var arrowAppearDurationInFrames_1 = segmentDuration_1;
var arrowDisappearDurationInFrames_1 = segmentDuration_1;
var menuAppearDurationInFrames_1 = segmentDuration_1;
var menuDisappearComplete_1 = false;
var arrowAppearComplete_1 = false;
var arrowDisappearComplete_1 = false;
var menuAppearComplete_1 = false;
var currentFrame_1 = 1;

///Menu Disappear
function menuDisappearAnimation_1() {
	currentFrame_1++;
	if ( currentFrame_1 <= menuDisappearDurationInFrames_1 ) {
		window.requestAnimationFrame( ()=> {
			//top line
			topLineY_1 = AJS.easeInBack( 37, 50, menuDisappearDurationInFrames_1, currentFrame_1 );
			topLine_1.setAttribute( "d", "M30,"+topLineY_1+" L70,"+topLineY_1 );
			//bottom line
			bottomLineY_1 = AJS.easeInBack( 63, 50, menuDisappearDurationInFrames_1, currentFrame_1 );
			bottomLine_1.setAttribute( "d", "M30,"+bottomLineY_1+" L70,"+bottomLineY_1 );
			//recursion
			menuDisappearAnimation_1();
		});
	} else {
		middleLine_1.style.opacity = "0";
		currentFrame_1 = 1;
		menuDisappearComplete_1 = true;
		openMenuAnimation_1();
	}
}

///Cross Appear
function arrowAppearAnimation_1() {
	currentFrame_1++;
	if ( currentFrame_1 <= arrowAppearDurationInFrames_1 ) {
		window.requestAnimationFrame( ()=> {
			//top line
			topLeftX_1 = AJS.easeOutBack( 30, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
			topLeftY_1 = AJS.easeOutBack( 50, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
			bottomRightX_1 = AJS.easeOutBack( 70, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
			bottomRightY_1 = AJS.easeOutBack( 50, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
			topLine_1.setAttribute( "d", "M" + topLeftX_1 + "," + topLeftY_1 + " L" + bottomRightX_1 + "," + bottomRightY_1 );
			//bottom line
			bottomLeftX_1 = AJS.easeOutBack( 30, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
			bottomLeftY_1 = AJS.easeOutBack( 50, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
			topRightX_1 = AJS.easeOutBack( 70, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
			topRightY_1 = AJS.easeOutBack( 50, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
			bottomLine_1.setAttribute( "d", "M" + bottomLeftX_1 + "," + bottomLeftY_1 + " L" + topRightX_1 + "," + topRightY_1 );
			//recursion
			arrowAppearAnimation_1();
		});
	} else {
		currentFrame_1 = 1;
		arrowAppearComplete_1 = true;
		openMenuAnimation_1();
	}
}

///Combined Open Menu Animation
function openMenuAnimation_1() {
	if ( !menuDisappearComplete_1 ) {
		menuDisappearAnimation_1();
	} else if ( !arrowAppearComplete_1) {
		arrowAppearAnimation_1();
	}
}

///Cross Disappear
function arrowDisappearAnimation_1() {
	currentFrame_1++;
	if ( currentFrame_1 <= arrowDisappearDurationInFrames_1 ) {
		window.requestAnimationFrame( ()=> {
			//top line
			topLeftX_1 = AJS.easeInBack( 35, 30, arrowDisappearDurationInFrames_1, currentFrame_1 );
			topLeftY_1 = AJS.easeInBack( 35, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
			bottomRightX_1 = AJS.easeInBack( 65, 70, arrowDisappearDurationInFrames_1, currentFrame_1 );
			bottomRightY_1 = AJS.easeInBack( 65, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
			topLine_1.setAttribute( "d", "M" + topLeftX_1 + "," + topLeftY_1 + " L" + bottomRightX_1 + "," + bottomRightY_1 );
			//bottom line
			bottomLeftX_1 = AJS.easeInBack( 35, 30, arrowDisappearDurationInFrames_1, currentFrame_1 );
			bottomLeftY_1 = AJS.easeInBack( 65, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
			topRightX_1 = AJS.easeInBack( 65, 70, arrowDisappearDurationInFrames_1, currentFrame_1 );
			topRightY_1 = AJS.easeInBack( 35, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
			bottomLine_1.setAttribute( "d", "M" + bottomLeftX_1 + "," + bottomLeftY_1 + " L" + topRightX_1 + "," + topRightY_1 );
			//recursion
			arrowDisappearAnimation_1();
		});
	} else {
		middleLine_1.style.opacity = "1";
		currentFrame_1 = 1;
		arrowDisappearComplete_1 = true;
		closeMenuAnimation_1();
	}
}

///Menu Appear
function menuAppearAnimation_1() {
	currentFrame_1++;
	if ( currentFrame_1 <= menuAppearDurationInFrames_1 ) {
		window.requestAnimationFrame( ()=> {
			//top line
			topLineY_1 = AJS.easeOutBack( 50, 37, menuDisappearDurationInFrames_1, currentFrame_1 );
			topLine_1.setAttribute( "d", "M30,"+topLineY_1+" L70,"+topLineY_1 );
			//bottom line
			bottomLineY_1 = AJS.easeOutBack( 50, 63, menuDisappearDurationInFrames_1, currentFrame_1 );
			bottomLine_1.setAttribute( "d", "M30,"+bottomLineY_1+" L70,"+bottomLineY_1 );
			//recursion
			menuAppearAnimation_1();
		});
	} else {
		currentFrame_1 = 1;
		menuAppearComplete_1 = true;
		closeMenuAnimation_1();
	}
}

///Close Menu Animation
function closeMenuAnimation_1() {
	if ( !arrowDisappearComplete_1 ) {
		arrowDisappearAnimation_1();
	} else if ( !menuAppearComplete_1 ) {
		menuAppearAnimation_1();
	}
}

///Events
// icon_1.addEventListener( "click", ()=> {
//   if ( state_1 === "menu" ) {
//   	openMenuAnimation_1();
//   	state_1 = "arrow";
//   	arrowDisappearComplete_1 = false;
// 		menuAppearComplete_1 = false;
//   } else if ( state_1 === "arrow" ) {
//   	closeMenuAnimation_1();
//   	state_1 = "menu";
//   	menuDisappearComplete_1 = false;
// 		arrowAppearComplete_1 = false;
//   }
// });


$(document).ready(function () {

	if($('#lang-vn').length) {
		$('.lift-js-chatbox__body__header-title-chat').text('Liên lạc tại hạ?')
		$('.lift-js-chatbox__body__footer-copyright a').html('THIẾT KẾ BỞI <span>NGUYEN PHAM</span>')
	}

	$("#navbarTogglerNguyen").on("click", "a", function () {
		$('#nguyenTab a[href="#' + $(this).attr("todata") + '"]').tab('show');
		$('a[data-toggle="tab"]').on('shown.bs.tab', function (event) {
			$('html, body').animate({
				scrollTop: $("#viewcontent").offset().top - 150
			}, 100);
		})
		$('#nguyentopBar button').trigger('click')
		$('.welcome').text($(this).text())
	});
	$('#gimenu').on('click', function(){
		if ( state_1 === "menu" ) {
			openMenuAnimation_1();
			state_1 = "arrow";
			arrowDisappearComplete_1 = false;
			menuAppearComplete_1 = false;
		} else if ( state_1 === "arrow" ) {
			closeMenuAnimation_1();
			state_1 = "menu";
			menuDisappearComplete_1 = false;
			arrowAppearComplete_1 = false;
		}
	})
	LIFT_CHAT_APP.jsonLoad(
		'https://api.github.com/users/baonguyenyam',
		(data) => {
			$('#badge-from-github').html('<div class="item"><span>Followers</span><span>'+data.followers+'</span></div><div class="item"><span>Repositories</span><span>'+data.public_repos+'</span></div>')
			$('#badge-from-github-vn').html('<div class="item"><span>Theo dõi</span><span>'+data.followers+'</span></div><div class="item"><span>Kho mã</span><span>'+data.public_repos+'</span></div>')
		},
		(xhr) => {}
	);


	$('#nguyenTab a').on('click', function (event) {
		event.preventDefault()
		if($(this).hasClass('active')) {
			$('#loading').addClass('d-none')
		} else {
			$('#loading').removeClass('d-none')
		}
		$('a[data-toggle="tab"]').on('shown.bs.tab', function (event) {
			$('#loading').addClass('d-none')
		})
	})

	$('#themtoggle').on('click', function (event) {
		if(localStorage.getItem("nguyenTheme")) {
			localStorage.removeItem('nguyenTheme');
			removeTheme()
		} else {
			localStorage.setItem('nguyenTheme', 'true');
			setTheme()
		}
	})


	if(localStorage.getItem("nguyenTheme")) {
		setTheme()
		$('#themtoggle').prop('checked', true);
	}

});


jQuery(function($) {

	// Function which adds the 'animated' class to any '.animatable' in view
	var doAnimations = function() {

	  // Calc current offset and get all animatables
	  var offset = $(window).scrollTop() + $(window).height(),
		  $animatables = $('.animatable');

	  // Unbind scroll handler if we have no animatables
	  if ($animatables.length == 0) {
		$(window).off('scroll', doAnimations);
	  }

	  // Check all animatables and animate them if necessary
		  $animatables.each(function(i) {
		 var $animatable = $(this);
			  if (($animatable.offset().top + $animatable.height() - 20) < offset) {
		  $animatable.removeClass('animatable').addClass('animated');
			  }
	  });

	  };

	// Hook doAnimations on scroll, and trigger a scroll
	  $(window).on('scroll', doAnimations);
	$(window).trigger('scroll');

  });

  
$(window).scroll(function(event){
	var st = $(this).scrollTop();
	if (st > 0){
	 $('#nguyentopBar').addClass('active')
	} else {
	 $('#nguyentopBar').removeClass('active')
	}
 });