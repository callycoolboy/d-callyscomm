
function codeAddress() {
//$("#page2").hide();
   onLoad();         
  $( "#info" ).fadeOut( 100 ).delay( 15000 ).fadeIn( 3000 );
 
var duration = 7000;
    setTimeout(function() {
	   checkNetConnection();
$("#carl2").show();
$("#carl").fadeOut( 1500 );
$( "#lgif" ).fadeIn( 1000 );

}, duration);

//var duration2 = 70000;
   // setTimeout(function() {  
 //checkNetConnection();  
 //}, duration2);
	
setTimeout(function() {
    $("#carl2").fadeOut( 1500 );
    $("#lgif").fadeOut( 1500 );
   // $("#info").show();
}, 15000);
	 }
window.onload = codeAddress;

var online = navigator.onLine || false;
$(document).ready(function() { 
  $(document).bind('deviceready', function(){
    onDeviceReady()
  })
  // Your main code
}) 
function onLoad() {
if(online) {
	window.screen.orientation.lock('portrait'); 
} else {
	navigator.vibrate(500);
  alert("Connection Not Available\nCheck Network settings and Try Again!!!");
  navigator.app.exitApp();
}
}

   
function checkNetConnection(){
  var xhr = new XMLHttpRequest();
 var file = "https://zamxa.store/themes/images/icons-png/minus-black.png";
 var r = Math.round(Math.random() * 10000);
 xhr.open('HEAD', file + '?subins=' + r, false);
 try {
  xhr.send();
  if (xhr.status >= 200 && xhr.status < 304) {
   return true;
  } else {
	  navigator.vibrate(500);
	  swal("Network Error!!!", "Check Internet Connection Or check if app is running in Latest Version and Try Again.", "error");
	  var dura = 3000;
    setTimeout(function() {
	  var r = confirm("Would you like to switch to OFFLINE MODE?.\nClick OK to continue");
	  if (r == true) {
    window.location='index2.html';
   return true;
  }
 else {
navigator.app.exitApp();
    return false;
}
	  }, dura);
   return false;
  }
 } catch (e) {
	 navigator.vibrate(500);
	  swal("Network Error!!!", "Check Internet Connection Or check if app is running in Latest Version and Try Again.", "error");
	  var dura = 3000;
    setTimeout(function() {
	   var r = confirm("Would you like to switch to OFFLINE MODE?.\nClick OK to continue");
	  if (r == true) {
    window.location='index2.html';
   return true;
  }
 else {
navigator.app.exitApp();
    return false;
}
	  }, dura);
   return false;
 }
}

function logout() {
$('#usern').value = "";
alert("You Have sucessfully Logged out!!!");
window.location = "#page";
return true;
}
