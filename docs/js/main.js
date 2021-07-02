console.log('%cNGUYEN', 'font-size:100px;color:#ff451a;text-shadow:0 1px 0 #f73936,0 2px 0 #f73936 ,0 3px 0 #f73936 ,0 4px 0 #f73936 ,0 5px 0 #f73936 ,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);')
console.log('%c NGUYEN ' + '%c - The best Web Solutions Provider', 'border-radius: 2px; padding: 3px; background: #ff451a; color: #FFF', 'color: #ff451a')
console.warn("NGUYEN warning: This is a browser feature intended for developers. If someone told you to copy and paste something here to enable a NGUYEN feature or 'hack' someone's account, it is a scam and will give them access to your NGUYEN account.")
document.onkeyup = function (e) {
	var e = e || window.event;
	if (e.altKey && e.ctrlKey && e.shiftKey && e.which == 13) {
		$('body')
		alert('NGUYEN PHAM - +(1) 682 203 1334\nEmail: baonguyenyam@gmail.com\nWeb: baonguyenyam.github.io')
		return false;
	}
};
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})
var typed = new Typed('.text-replace', {
	strings: ["<span class='main'>print</span><span class='text3'>('Hello, I am Nguyen Pham!')</span> ^500 <br><span class='main'>workingOn</span><span class='text3'>('Js, Sass, WordPress, PHP, TypeScript, Ps, Ai...')</span> ^500 <br><span class='include'>let</span> projects <span class='text3'>></span> <span class='main2'>100</span> ^500 <br><span class='include'>let</span> skillsEngineers <span class='text3'>≈</span> <span class='main2'>'90%'</span> ^500 <br><span class='include'>let</span> labs <span class='text3'>=</span> <span class='text2'>handsOn</span> ^500 <br><span class='include'>let</span> hire <span class='text3'>=</span> <span class='text2'>available</span> ^500 <br><span class='include'>let</span> DOB <span class='text3'>=</span> <span class='main'>'Aug 16-1983'</span> ^500 <br><span class='include'>let</span> location <span class='text3'>=</span> <span class='text2'>\"Fort Worth, Texas\"</span> ^500 <br><span class='include'>let</span> Companies <span class='text3'>></span> <span class='text2'>6</span><br><br><a class='text-white' href='//baonguyenyam.github.io' target='_blank'>readMore();</a><br>..."],
	typeSpeed: 20,
	backDelay: 50000,
	loop: true,
	contentType: 'html',
	loopCount: false
});


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
		},
		(xhr) => {}
	);
});

// CONTEXT MENU
var contentmenu = document.querySelector('.menu');

function showMenu(x, y){
    contentmenu.style.left = x + 'px';
    contentmenu.style.top = y + 'px';
    contentmenu.classList.add('menu-show');
}

function hideMenu(){
    contentmenu.classList.remove('menu-show');
}

function onContextMenu(e){
    e.preventDefault();
    showMenu(e.pageX, e.pageY);
    document.addEventListener('click', onMouseDown, false);
}

function onMouseDown(e){
    hideMenu();
    document.removeEventListener('click', onMouseDown);
}

document.addEventListener('contextmenu', onContextMenu, false);
