$(".one-time").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
});
$(document).ready(function () {
  $(".one-time").slick({
    autoplay: true,
    autoplaySpeed: 2000, // Adjust this to change the speed of sliding
    speed: 1000, // Adjust this to change the speed of typing animation
    dots: false,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    vertical: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// Typing Animation Function
function typeWriter(text, i, fnCallback) {
  if (i < text.length) {
    // Check if text isn't finished yet
    $(".tutorial_explan").html(text.substring(0, i + 1));
    setTimeout(function () {
      typeWriter(text, i + 1, fnCallback);
    }, 100); // Adjust typing speed here (milliseconds)
  } else if (typeof fnCallback == "function") {
    setTimeout(fnCallback, 1000); // Adjust delay after typing here (milliseconds)
  }
}

// Start Typing Animation
function StartTextAnimation(i) {
  if (typeof dataText[i] == "undefined") {
    setTimeout(function () {
      StartTextAnimation(0);
    }, 20000); // Adjust delay between iterations here (milliseconds)
  }
  // Check if dataText[i] exists
  if (i < dataText[i].length) {
    // Call typewriter function
    typeWriter(dataText[i], 0, function () {
      StartTextAnimation(i + 1); // Call the next iteration
    });
  }
}

// Data for Typing Animation
var dataText = [
  "안녕? 전설의 케이크를 찾으러 온걸 환영해..",
  "튜토리얼2",
  "튜토리얼3",
];

// Start Animation on Document Load
$(document).ready(function () {
  StartTextAnimation(0);
});