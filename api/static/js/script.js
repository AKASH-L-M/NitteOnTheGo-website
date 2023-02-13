'use strict';

/**
 * navbar toggle
 */




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


/**
 * Function definition for displaying live time on the screen
 */
function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh === 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000);
}

currentTime();

   
