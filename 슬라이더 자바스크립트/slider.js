$(document).ready(function () {
  $(".single-item").slick();
});

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
// $(document).ready(function () {
//   alert("hi");
// });
