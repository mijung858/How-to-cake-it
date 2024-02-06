// $(".box").click(function () {
//   document("hi");
// });

// var url1 = "img/dd5cdf70d82381e5ad611d218c3a6d40.jpg";
// $("#myImg").click(function () {
//   $("#container").html(`<img src='${url}'>`);
// });
// var url2 = "img/05392b7db1bd7d90ed1640181e5f5325.jpg";
// $("#myImg1").click(function () {
//   $("#container").html(`<img src='${url}'>`);
// });

var url1 = "img//이미지1.jpg";
$("#myImg1").click(function () {
  $("#container").append(`<img src='${url1}' class="image-layer">`);
});
var url2 = "img/이미지2.jpg";
$("#myImg2").click(function () {
  $("#container").append(`<img src='${url2}' class="image-layer">`);
});
var url3 = "img/이미지3.jpg";
$("#myImg3").click(function () {
  $("#container").append(`<img src='${url3}' class="image-layer">`);
});
var url4 = "img/이미지4.jpg";
$("#myImg4").click(function () {
  $("#container").append(`<img src='${url4}' class="image-layer">`);
});

// 랜덤이미지 코드//

// // JavaScript
// var imageUrls = [
//   "img/이미지1.jpg",
//   "img/이미지2.jpg",
//   "img/이미지3.jpg",
//   "img/이미지4.jpg",
// ];

// $("#myImg").click(function () {
//   var randomIndex = Math.floor(Math.random() * imageUrls.length);
//   var randomImageUrl = imageUrls[randomIndex];
//   $("#container").empty().append(`<img src='${randomImageUrl}' class="image-layer">`);
// });

// $("#myImg1").click(function () {
//   var url1 = "img/이미지1.jpg";
//   $("#container").empty().append(`<img src='${url1}' class="image-layer">`);
// });

// $("#myImg2").click(function () {
//   var url2 = "img/이미지2.jpg";
//   $("#container").empty().append(`<img src='${url2}' class="image-layer">`);
// });

// $("#myImg3").click(function () {
//   var url3 = "img/이미지3.jpg";
//   $("#container").empty().append(`<img src='${url3}' class="image-layer">`);
// });

// $("#myImg4").click(function () {
//   var url4 = "img/이미지4.jpg";
//   $("#container").empty().append(`<img src='${url4}' class="image-layer">`);
// });
var imageUrls = [
  "img/이미지1.jpg",
  "img/이미지2.jpg",
  "img/이미지3.jpg",
  "img/이미지4.jpg",
  // 추가 이미지 URL을 필요한 만큼 여기에 추가할 수 있습니다.
];

var displayedImages = [];

function getRandomImageUrl() {
  var availableImages = imageUrls.filter(
    (url) => !displayedImages.includes(url)
  );
  if (availableImages.length === 0) {
    // 이미 모든 이미지가 표시되었으면 리셋
    displayedImages = [];
    availableImages = imageUrls.slice();
  }

  var randomIndex = Math.floor(Math.random() * availableImages.length);
  var randomImageUrl = availableImages[randomIndex];
  displayedImages.push(randomImageUrl);
  return randomImageUrl;
}

$("#myImg").click(function () {
  var randomImageUrl = getRandomImageUrl();
  $("#container")
    .empty()
    .append(`<img src='${randomImageUrl}' class="image-layer">`);
});
