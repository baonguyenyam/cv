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
    // document.getElementById('text-replace').addEventListener('click', onMouseDown, false);
}

function onMouseDown(e){
    hideMenu();
    document.removeEventListener('click', onMouseDown);
    // document.getElementById('text-replace').removeEventListener('click', onMouseDown);
}

// document.addEventListener('contextmenu', onContextMenu, false);
document.getElementById('openmenu').addEventListener('contextmenu', onContextMenu, false);


// Disable HOT KEY
// var isCtrl = false;
// document.onkeyup=function(e){
//     if(e.keyCode == 17) isCtrl=false;
// }
// document.onkeydown=function(e){
//     if(e.keyCode == 17) isCtrl=true;
//     if((e.keyCode == 83 && isCtrl == true) || (e.keyCode == 73 && isCtrl == true) || e.keyCode == 123) {
//         return false;
//     }
// }
// document.addEventListener("keydown", function(e) {
// 	if (((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && e.keyCode == 83) || ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && e.keyCode == 73) || e.keyCode == 123) {
// 	  e.preventDefault();
// 	}
//   }, false);
// window.addEventListener("keypress", function(event) {
// 	if (!(event.which == 115 && event.ctrlKey) && !(event.which == 19)) return true
// 	event.preventDefault()
// 	return false
// })


// function __nEn(c) {
//     return btoa(encodeURIComponent(c).replace(/%([0-9A-F]{2})/g, function toSolidBytes(a, b) {
//         return String.fromCharCode('0x' + b)
//     }))
// }

// function __nDe(a) {
//     return decodeURIComponent(atob(a).split('').map(function (c) {
//         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
//     }).join(''))
// }
// document.onkeyup = function (a) {
//     if ((a = a || window.event).altKey && a.ctrlKey && a.shiftKey && 13 == a.which) return $("body"), $('#infoMeModal').modal('show'), undefined
// };

console.log('%cNGUYEN', 'font-size:100px;color:#ff451a;text-shadow:0 1px 0 #f73936,0 2px 0 #f73936 ,0 3px 0 #f73936 ,0 4px 0 #f73936 ,0 5px 0 #f73936 ,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);')
console.log('%c NGUYEN ' + '%c - The best Web Solutions Provider', 'border-radius: 2px; padding: 3px; background: #ff451a; color: #FFF', 'color: #ff451a')
console.warn("NGUYEN warning: This is a browser feature intended for developers. If someone told you to copy and paste something here to enable a NGUYEN feature or 'hack' someone's account, it is a scam and will give them access to your NGUYEN account.")
