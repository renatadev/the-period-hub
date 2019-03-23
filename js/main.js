// DOWN ARROW BUTTON
$(document.body).on('click', 'a[href*="#"]', function(e) {
  e.preventDefault();
  $('html,body').animate({
    scrollTop: $(this.hash).offset().top
  }, 900);
});

$(window).on('scroll', function() {
  var scrolled = $(window).scrollTop();
  var height = $(window).height();
  if (scrolled < height) {
    $('.full-image').css({
      'top': -scrolled * .5
    });
  }
});

// Navbar fixed
$(document).ready(function(){
  $('.navbar').affix({offset: {top: 500} });
});

//Modals
$(document).ready(function(){
  $("#myBtn").click(function(){
    $("#myModal").modal();
  });
});

// SMOOTH SCROLL
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  // Modal - Donations
  var ifr = document.getElementById("JotFormIFrame-90744482471360");
  if(window.location.href && window.location.href.indexOf("?") > -1) {
    var get = window.location.href.substr(window.location.href.indexOf("?") + 1);
    if(ifr && get.length > 0) {
      var src = ifr.src;
      src = src.indexOf("?") > -1 ? src + "&" + get : src  + "?" + get;
      ifr.src = src;
    }
  }
  window.handleIFrameMessage = function(e) {
    if (typeof e.data === 'object') { return; }
    var args = e.data.split(":");
    if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); }
    if (!iframe) { return; }
    switch (args[0]) {
      case "scrollIntoView":
        iframe.scrollIntoView();
        break;
      case "setHeight":
        iframe.style.height = args[1] + "px";
        break;
      case "collapseErrorPage":
        if (iframe.clientHeight > window.innerHeight) {
          iframe.style.height = window.innerHeight + "px";
        }
        break;
      case "reloadPage":
        window.location.reload();
        break;
      case "loadScript":
        var src = args[1];
        if (args.length > 3) {
            src = args[1] + ':' + args[2];
        }
        var script = document.createElement('script');
        script.src = src;
        script.type = 'text/javascript';
        document.body.appendChild(script);
        break;
      case "exitFullscreen":
        if      (window.document.exitFullscreen)        window.document.exitFullscreen();
        else if (window.document.mozCancelFullScreen)   window.document.mozCancelFullScreen();
        else if (window.document.mozCancelFullscreen)   window.document.mozCancelFullScreen();
        else if (window.document.webkitExitFullscreen)  window.document.webkitExitFullscreen();
        else if (window.document.msExitFullscreen)      window.document.msExitFullscreen();
        break;
    }
    var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
    if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
      var urls = {"docurl":encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)};
      iframe.contentWindow.postMessage(JSON.stringify({"type":"urls","value":urls}), "*");
    }
  };
  if (window.addEventListener) {
    window.addEventListener("message", handleIFrameMessage, false);
  } else if (window.attachEvent) {
    window.attachEvent("onmessage", handleIFrameMessage);
  }


  //abbr
$('[title]').each( function() {
    var mytitle = $(this);
    mytitle.data('title',mytitle.attr('title')); // get title attribute value
mytitle.attr('name', mytitle.attr('title')); // add title attribute value to NAME attribute
    mytitle.removeAttr('title'); // remove the title attribute, removing browser tooltip
});

// Wow
$(function() {
   new WOW().init();//animation on scroll
});

// Toggle FAQs
$(document).ready(function(){
    $(".toggle-cont").click(function(){
    $("answer").toggle();
  });
});

// Newsletter pop-up
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Smooth Scrolling
$(function () {
  $("a.smooth-scroll").click(function(event) {
    event.preventDefault();

    // return section id e.g. #contact...
    var section = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(section).offset().top
    }, 1250);
  });
});

// Back to top button
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() < 50) {
      $("#back-to-top").fadeOut();
    } else {
      $("#back-to-top").fadeIn();
    }
  });
});

// Toggle faqs
$(document).ready(function(){
  $("#show1").click(function(){
    $(".answer1").toggle("slide");
  });
  $("#show2").click(function(){
    $(".answer2").toggle("slide");
  });
  $("#show3").click(function(){
    $(".answer3").toggle("slide");
  });
  $("#show4").click(function(){
    $(".answer4").toggle("slide");
  });
  $("#show5").click(function(){
    $(".answer5").toggle("slide");
  });
  $("#show6").click(function(){
    $(".answer6").toggle("slide");
  });
  $("#show7").click(function(){
    $(".answer7").toggle("slide");
  });
  $("#show8").click(function(){
    $(".answer8").toggle("slide");
  });
});

// Counter
jQuery(document).ready(function ($) {
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });
});
