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
$(document).ready(function () {
	$("#navbarTogglerNguyen").on("click", "a", function () {
		$('#nguyenTab a[href="#' + $(this).attr("todata") + '"]').tab('show');
		$('a[data-toggle="tab"]').on('shown.bs.tab', function (event) {
			// event.target // newly activated tab
			// event.relatedTarget // previous active tab
			$('html, body').animate({
				scrollTop: $("#viewcontent").offset().top - 80
			}, 100);
			$('#nguyentopBar button').trigger('click')
		})
	});
});
