'use strict';

/**
 * navbar toggle
 */


function parseTime(cTime)
{
  if (cTime == '') return null;
  var d = new Date();
  var time = cTime.match(/(\d+)(:(\d\d))?\s*(p?)/);
  d.setHours( parseInt(time[1]) + ( ( parseInt(time[1]) < 12 && time[4] ) ? 12 : 0) );
  d.setMinutes( parseInt(time[3]) || 0 );
  d.setSeconds(0, 0);
  return d;
}

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);

/**
 * timer function
 */

var countdownfunction = setInterval(function() {

  var d = new Date();
  var currentOffset = d.getTimezoneOffset();
  var ISTOffset = 330;   // IST offset UTC +5:30 
  var ISTTime = new Date(d.getTime() + (ISTOffset + currentOffset)*60000);

  var hour =  ISTTime.getHours();
  var minute =  ISTTime.getMinutes();
  var second =  ISTTime.getSeconds();

  if (hour.toString().length < 2) hour = '0' + hour;
  if (minute.toString().length < 2) minute = '0' + minute;
  if (second.toString().length < 2) second = '0' + second;

  var today = hour + ":" + minute + ":" + second;

  document.getElementById("timer").innerHTML = today;
 
}, 1000);

var timeDifference = setInterval(function() {
  var d = new Date().toJSON().slice(11, 19);
  var today;
  var cStart = d;
  var cStop = "12:10:15";

  if (cStart != "" && cStop != "") {
      var tStart = parseTime(cStart);
      var tStop = parseTime(cStop);

      today = "Minutes:"+(tStop - tStart)/(1000*60);
  }
   document.getElementById("timediff").innerHTML = today;
}, 1000);

/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});


   
