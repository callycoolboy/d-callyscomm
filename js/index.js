/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("f88624df-ab99-464b-980a-46b4b0700aea")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
}, false);

  function checkUpdate(){
  var version = 'v1.0.0';
 var xhr = new XMLHttpRequest();
 var file = "https://callysconcept.000webhostapp.com/d-callyscomm.txt";
 var r = Math.round(Math.random() * 10000);
 xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      //alert(xhr.readyState);
	  var values = xhr.responseText;
	  //alert(value);
	 if (version == values) {
   //alert('YES');
   return true;
   
  } else {
	  window.stop();
	  navigator.vibrate(500);
	  alert("You are running and outdated version of this app.\nKindly update to "+values);
	  var dura = 3000;
    setTimeout(function() {
       window.location="https://play.google.com/store/apps/details?id=com.dcallyscomm.app&hl=en";
	  navigator.app.exitApp();
	  }, dura);
   return false;
  }
    }
  };
 xhr.open("GET", file + '?subins=' + r, false);
 xhr.send();
}
	     
function checkUpdate2(){
  var version = 'v1.0.0';
 var xhr = new XMLHttpRequest();
 var file = "https://callysconcept.000webhostapp.com/d-callyscomm.txt";
 var r = Math.round(Math.random() * 10000);
 xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      //alert(xhr.readyState);
	  var values = xhr.responseText;
	  //alert(value);
	 
	 if (version == values) {
   //alert('YES');
   return true;
   
  }  else {
	var r = confirm("A newer version of this app is available.\nClick OK to upgrade to "+values);
	  if (r == true) {
    var dura = 3000;
    setTimeout(function() {
       window.location="https://play.google.com/store/apps/details?id=com.dcallyscomm.app&hl=en";
	  navigator.app.exitApp();
	  }, dura);
   return false;
  }
 else {
    return true;
} 
}	  
    }
  };
 xhr.open("GET", file + '?subins=' + r, false);
 xhr.send();
}      
//checkUp();
setTimeout(function(){

     onClick();

   },180000);
   
   var timeOut = 0;
function onClick()
{
    //code
	checkUpdate2();
    clearTimeout(timeOut);
    timeOut = setTimeout(function (){onClick()},300000);
}  
	     
checkUpdate();

    
