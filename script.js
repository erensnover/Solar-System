$(window).ready(function() {
  var $sun = $('.sun');

  var setupPosition = function (event) {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    var sunHeight = $sun.height();
    var sunWidth = $sun.width();

    $sun.css('left', (windowWidth - sunWidth) / 2);
    $sun.css('top', (windowHeight - sunHeight) / 2);
  };

  $(window).resize(setupPosition);

  setupPosition();
});
$(window).keydown(function random(e){
  var $sun = $('.sun');
  var selector = Math.ceil(Math.random() * 6);

  if(e.keyCode === 32 && selector === 1){
    var earth = function(){
      var earth = $('<img class="earth" style="width:50px" src="img/2.png" />');

      $('.foreground').append(earth);

      var sunWidth = $sun.width();
      var t = 0;
      var dist = Math.ceil(Math.random() * 400);

      setInterval(function() {
        var width = earth.width();
        var height = earth.height();
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        earth.css('top', dist * Math.sin(t) - height / 2 + windowHeight / 2);
        earth.css('left', dist * Math.cos(t) - width / 2 + windowWidth / 2);

        t += 0.01;
      }, 16);
    };
    earth();
  }
  if(e.keyCode === 32 && selector === 2){
    var mercury = function(){
      var mercury = $('<img class="mercury" style="width:50px" src="img/3.png" />');

      $('.foreground').append(mercury);

      var sunWidth = $sun.width();
      var t = 0;
      var dist = Math.ceil(Math.random() * 400);

      setInterval(function() {
        var width = mercury.width();
        var height = mercury.height();
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        mercury.css('top', dist * Math.sin(t) - height / 2 + windowHeight / 2);
        mercury.css('left', dist * Math.cos(t) - width / 2 + windowWidth / 2);

        t += 0.01;
      }, 16);
    };
    mercury();
  }
  if(e.keyCode === 32 && selector === 3){
    var venus = function(){
      var venus = $('<img class="venus" style="width:80px" src="img/4.png" />');

      $('.foreground').append(venus);

      var sunWidth = $sun.width();
      var t = 0;
      var dist = Math.ceil(Math.random() * 400);

      setInterval(function() {
        var width = venus.width();
        var height = venus.height();
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        venus.css('top', dist * Math.sin(t) - height / 2 + windowHeight / 2);
        venus.css('left', dist * Math.cos(t) - width / 2 + windowWidth / 2);

        t += 0.01;
      }, 16);
    };
  }
  if(e.keyCode === 32 && selector === 4){
    var comet = function(){
      var comet = $('<img class="comet" style="width:20px" src="img/1.png" />');

      $('.foreground').append(comet);

      var sunWidth = $sun.width();
      var t = 0;
      var dist = Math.ceil(Math.random() * 400);
      setInterval(function() {
        var width = comet.width();
        var height = comet.height();
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        comet.css('top', dist * Math.sin(t) - height / 2 + windowHeight / 2);
        comet.css('left', dist * Math.cos(t) - width / 2 + windowWidth / 2);

        t += 0.01;
      }, 16);
    };
  }
  if(e.keyCode === 32 && selector === 5){
    var uranus = function(){
      var uranus = $('<img class="uranus" style="width:60px" src="img/6.png" />');

      $('.foreground').append(uranus);

      var sunWidth = $sun.width();
      var t = 0;
      var dist = Math.ceil(Math.random() * 400);

      setInterval(function() {
        var width = uranus.width();
        var height = uranus.height();
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        uranus.css('top', dist * Math.sin(t) - height / 2 + windowHeight / 2);
        uranus.css('left', dist * Math.cos(t) - width / 2 + windowWidth / 2);

        t += 0.01;
      }, 16);
    };
  }
});


// $(document).ready(function() {
//   var $sun = $('.sun');
//
//   var setupPosition = function () {
//     var windowWidth = $(window).width();
//     var windowHeight = $(window).height();
//
//     var sunHeight = $sun.height();
//     var sunWidth = $sun.width();
//
//     $sun.css('left', (windowWidth - sunWidth) / 2);
//     $sun.css('top', (windowHeight - sunHeight) / 2);
//   };
//
//   $(window).resize(setupPosition);
//
//   setupPosition();
// });
//
//
// var earth = $('<img class="earth" style="width:50px" src="img/2.png" />');
//
// $('.foreground').append(earth);
//
// var t = 0;
// var dist = 400;
// var drawEarth = function() {
//   var width = earth.width();
//   var height = earth.height();
//   var windowWidth = $(window).width();
//   var windowHeight = $(window).height();
//   earth.css('top', dist * Math.sin(t) - height / 2 + windowHeight / 2);
//   earth.css('left', dist * Math.cos(t) - width / 2 + windowWidth / 2);
//   t += 0.01;
// };
//
// var mercury = $('<img class="mercury" style="width:100px" src="img/4.png" />');
//
// $('.foreground1').append(mercury);
//
// var t2 = 0;
// var dist2 = 500;
// var drawMercury = function() {
//   var width2 = mercury.width();
//   var height2 = mercury.height();
//   var windowWidth2 = $(window).width();
//   var windowHeight2 = $(window).height();
//   mercury.css('top', dist2 * Math.sin(t2) - height2 / 2 + windowHeight2 / 2);
//   mercury.css('left', dist2 * Math.cos(t2) - width2 / 2 + windowWidth2 / 2);
//   t2 += 0.015;
// };
//
// var blue1 = $('<img class="blue1" style="width:100px" src="img/5.png" />');
//
// $('.foreground2').append(blue1);
//
// var t3 = 0;
// var dist3 = 600;
// var drawBlue1 = function() {
//   var width3 = blue1.width();
//   var height3 = blue1.height();
//   var windowWidth3 = $(window).width();
//   var windowHeight3 = $(window).height();
//   blue1.css('top', dist3 * Math.sin(t3) - height3 / 2 + windowHeight3 / 2);
//   blue1.css('left', dist3 * Math.cos(t3) - width3 / 2 + windowWidth3 / 2);
//   t3 += 0.007;
// };
//
//
// // var moon = $('<img class="moon" style="width:10px" src="img/6.png" />');
// //
// // $('.foreground3').append(moon);
// //
// // var t4 = 0;
// // var dist4 = 100;
// // var drawMoon = function() {
// //   var earthWidth = earth.width();
// //   var earthHeight = earth.height();
// //   var width4 = moon.width();
// //   var height4 = moon.height();
// //   moon.css('top', dist4 * Math.sin(t4) - height4 / 2 + earthHeight / 2);
// //   moon.css('left', dist4 * Math.cos(t4) - width4 / 2 + earthWidth / 2);
// //   t4 += 0.015;
// // };
// //
// // setInterval(drawMoon, 20);
// setInterval(drawBlue1, 20);
// setInterval(drawEarth, 20);
// setInterval(drawMercury, 20);
