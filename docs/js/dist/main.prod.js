"use strict";var typed,typedvn;function setTheme(){var e=document.getElementsByTagName("HEAD")[0],a=document.createElement("link");a.rel="stylesheet",a.setAttribute("id","nguyen-theme"),a.type="text/css",a.href="/cv/css/dist/dark.min.css",e.appendChild(a)}function removeTheme(){$("#nguyen-theme").remove()}$(function(){$('[data-toggle="tooltip"]').tooltip()}),$("#text-replace").length&&(typed=new Typed("#text-replace",{strings:["<span class='main'>print</span><span class='text3'>('Hello, I am Nguyen Pham!')</span> ^500 <br><span class='main'>workingOn</span><span class='text3'>('Js, Sass, WordPress, PHP, TypeScript, Ps, Ai...')</span> ^500 <br><span class='include'>let</span> projects <span class='text3'>></span> <span class='main2'>100</span> ^500 <br><span class='include'>let</span> skillsEngineers <span class='text3'>≈</span> <span class='main2'>'90%'</span> ^500 <br><span class='include'>let</span> labs <span class='text3'>=</span> <span class='text2'>handsOn</span> ^500 <br><span class='include'>let</span> hire <span class='text3'>=</span> <span class='text2'>available</span> ^500 <br><span class='include'>let</span> DOB <span class='text3'>=</span> <span class='main'>'Aug 16-1983'</span> ^500 <br><span class='include'>let</span> location <span class='text3'>=</span> <span class='text2'>\"Fort Worth, Texas\"</span> ^500 <br><span class='include'>let</span> Companies <span class='text3'>></span> <span class='text2'>6</span><br><br><a class='text-white' href='//baonguyenyam.github.io' target='_blank'>readMore();</a><br>..."],typeSpeed:20,backDelay:5e4,loop:!0,contentType:"html",loopCount:!1})),$("#text-replace-vn").length&&(typedvn=new Typed("#text-replace-vn",{strings:["<span class='main'>viet</span><span class='text3'>('Xin chao, toi la Nguyen Pham!')</span> ^500 <br><span class='main'>lamViecTren</span><span class='text3'>('Js, Sass, WordPress, PHP, TypeScript, Ps, Ai...')</span> ^500 <br><span class='include'>let</span> cacDuAn <span class='text3'>></span> <span class='main2'>100</span> ^500 <br><span class='include'>let</span> kyNangCongNghe <span class='text3'>≈</span> <span class='main2'>'90%'</span> ^500 <br><span class='include'>let</span> hopTac <span class='text3'>=</span> <span class='text2'>chaoDon</span> ^500 <br><span class='include'>let</span> lamViec <span class='text3'>=</span> <span class='text2'>sanSang</span> ^500 <br><span class='include'>let</span> sinhNhat <span class='text3'>=</span> <span class='main'>'16-08-1983'</span> ^500 <br><span class='include'>let</span> noiSong <span class='text3'>=</span> <span class='text2'>\"Fort Worth, Texas\"</span> ^500 <br><span class='include'>let</span> congTy <span class='text3'>></span> <span class='text2'>6</span><br><br><a class='text-white' href='//baonguyenyam.github.io' target='_blank'>xemThem();</a><br>..."],typeSpeed:20,backDelay:5e4,loop:!0,contentType:"html",loopCount:!1}));var topLineY_1,middleLineY_1,bottomLineY_1,topLeftY_1,topRightY_1,bottomLeftY_1,bottomRightY_1,topLeftX_1,topRightX_1,bottomLeftX_1,bottomRightX_1,icon_1=document.getElementById("gimenu"),topLine_1=document.getElementById("top-line-1"),middleLine_1=document.getElementById("middle-line-1"),bottomLine_1=document.getElementById("bottom-line-1"),state_1="menu",segmentDuration_1=15,menuDisappearDurationInFrames_1=segmentDuration_1,arrowAppearDurationInFrames_1=segmentDuration_1,arrowDisappearDurationInFrames_1=segmentDuration_1,menuAppearDurationInFrames_1=segmentDuration_1,menuDisappearComplete_1=!1,arrowAppearComplete_1=!1,arrowDisappearComplete_1=!1,menuAppearComplete_1=!1,currentFrame_1=1;function menuDisappearAnimation_1(){++currentFrame_1<=menuDisappearDurationInFrames_1?window.requestAnimationFrame(function(){topLineY_1=AJS.easeInBack(37,50,menuDisappearDurationInFrames_1,currentFrame_1),topLine_1.setAttribute("d","M30,"+topLineY_1+" L70,"+topLineY_1),bottomLineY_1=AJS.easeInBack(63,50,menuDisappearDurationInFrames_1,currentFrame_1),bottomLine_1.setAttribute("d","M30,"+bottomLineY_1+" L70,"+bottomLineY_1),menuDisappearAnimation_1()}):(middleLine_1.style.opacity="0",currentFrame_1=1,menuDisappearComplete_1=!0,openMenuAnimation_1())}function arrowAppearAnimation_1(){++currentFrame_1<=arrowAppearDurationInFrames_1?window.requestAnimationFrame(function(){topLeftX_1=AJS.easeOutBack(30,35,arrowAppearDurationInFrames_1,currentFrame_1),topLeftY_1=AJS.easeOutBack(50,35,arrowAppearDurationInFrames_1,currentFrame_1),bottomRightX_1=AJS.easeOutBack(70,65,arrowAppearDurationInFrames_1,currentFrame_1),bottomRightY_1=AJS.easeOutBack(50,65,arrowAppearDurationInFrames_1,currentFrame_1),topLine_1.setAttribute("d","M"+topLeftX_1+","+topLeftY_1+" L"+bottomRightX_1+","+bottomRightY_1),bottomLeftX_1=AJS.easeOutBack(30,35,arrowAppearDurationInFrames_1,currentFrame_1),bottomLeftY_1=AJS.easeOutBack(50,65,arrowAppearDurationInFrames_1,currentFrame_1),topRightX_1=AJS.easeOutBack(70,65,arrowAppearDurationInFrames_1,currentFrame_1),topRightY_1=AJS.easeOutBack(50,35,arrowAppearDurationInFrames_1,currentFrame_1),bottomLine_1.setAttribute("d","M"+bottomLeftX_1+","+bottomLeftY_1+" L"+topRightX_1+","+topRightY_1),arrowAppearAnimation_1()}):(currentFrame_1=1,arrowAppearComplete_1=!0,openMenuAnimation_1())}function openMenuAnimation_1(){menuDisappearComplete_1?arrowAppearComplete_1||arrowAppearAnimation_1():menuDisappearAnimation_1()}function arrowDisappearAnimation_1(){++currentFrame_1<=arrowDisappearDurationInFrames_1?window.requestAnimationFrame(function(){topLeftX_1=AJS.easeInBack(35,30,arrowDisappearDurationInFrames_1,currentFrame_1),topLeftY_1=AJS.easeInBack(35,50,arrowDisappearDurationInFrames_1,currentFrame_1),bottomRightX_1=AJS.easeInBack(65,70,arrowDisappearDurationInFrames_1,currentFrame_1),bottomRightY_1=AJS.easeInBack(65,50,arrowDisappearDurationInFrames_1,currentFrame_1),topLine_1.setAttribute("d","M"+topLeftX_1+","+topLeftY_1+" L"+bottomRightX_1+","+bottomRightY_1),bottomLeftX_1=AJS.easeInBack(35,30,arrowDisappearDurationInFrames_1,currentFrame_1),bottomLeftY_1=AJS.easeInBack(65,50,arrowDisappearDurationInFrames_1,currentFrame_1),topRightX_1=AJS.easeInBack(65,70,arrowDisappearDurationInFrames_1,currentFrame_1),topRightY_1=AJS.easeInBack(35,50,arrowDisappearDurationInFrames_1,currentFrame_1),bottomLine_1.setAttribute("d","M"+bottomLeftX_1+","+bottomLeftY_1+" L"+topRightX_1+","+topRightY_1),arrowDisappearAnimation_1()}):(middleLine_1.style.opacity="1",currentFrame_1=1,arrowDisappearComplete_1=!0,closeMenuAnimation_1())}function menuAppearAnimation_1(){++currentFrame_1<=menuAppearDurationInFrames_1?window.requestAnimationFrame(function(){topLineY_1=AJS.easeOutBack(50,37,menuDisappearDurationInFrames_1,currentFrame_1),topLine_1.setAttribute("d","M30,"+topLineY_1+" L70,"+topLineY_1),bottomLineY_1=AJS.easeOutBack(50,63,menuDisappearDurationInFrames_1,currentFrame_1),bottomLine_1.setAttribute("d","M30,"+bottomLineY_1+" L70,"+bottomLineY_1),menuAppearAnimation_1()}):(currentFrame_1=1,menuAppearComplete_1=!0,closeMenuAnimation_1())}function closeMenuAnimation_1(){arrowDisappearComplete_1?menuAppearComplete_1||menuAppearAnimation_1():arrowDisappearAnimation_1()}$(document).ready(function(){$("#lang-vn").length&&($(".lift-js-chatbox__body__header-title-chat").text("Liên lạc tại hạ?"),$(".lift-js-chatbox__body__footer-copyright a").html("THIẾT KẾ BỞI <span>NGUYEN PHAM</span>")),$("#navbarTogglerNguyen").on("click","a",function(){$('#nguyenTab a[href="#'+$(this).attr("todata")+'"]').tab("show"),$('a[data-toggle="tab"]').on("shown.bs.tab",function(e){$("html, body").animate({scrollTop:$("#viewcontent").offset().top-150},100)}),$("#nguyentopBar button").trigger("click"),$(".welcome").text($(this).text())}),$("#gimenu").on("click",function(){"menu"===state_1?(openMenuAnimation_1(),menuAppearComplete_1=arrowDisappearComplete_1=!(state_1="arrow")):"arrow"===state_1&&(closeMenuAnimation_1(),arrowAppearComplete_1=menuDisappearComplete_1=!(state_1="menu"))}),LIFT_CHAT_APP.jsonLoad("https://api.github.com/users/baonguyenyam",function(e){$("#badge-from-github").html('<div class="item"><span>Followers</span><span>'+e.followers+'</span></div><div class="item"><span>Repositories</span><span>'+e.public_repos+"</span></div>"),$("#badge-from-github-vn").html('<div class="item"><span>Theo dõi</span><span>'+e.followers+'</span></div><div class="item"><span>Kho mã</span><span>'+e.public_repos+"</span></div>")},function(e){}),$("#nguyenTab a").on("click",function(e){e.preventDefault(),$(this).hasClass("active")?$("#loading").addClass("d-none"):$("#loading").removeClass("d-none"),$('a[data-toggle="tab"]').on("shown.bs.tab",function(e){$("#loading").addClass("d-none")})}),$("#themtoggle").on("click",function(e){localStorage.getItem("nguyenTheme")?(localStorage.removeItem("nguyenTheme"),removeTheme()):(localStorage.setItem("nguyenTheme","true"),setTheme())}),localStorage.getItem("nguyenTheme")&&(setTheme(),$("#themtoggle").prop("checked",!0))});