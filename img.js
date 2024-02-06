$(document).ready(function () {
  $(".single-item").slick();
});

// var cake = "img/딸기케이크.png";

// var selectedItems = {
//   myImg1: false,
//   myImg2: false,
//   myImg3: false,
// };

// $(".box img").click(function () {
//   var id = $(this).attr("id");
//   selectedItems[id] = !selectedItems[id];
//   toggleSetImage();
// });

// function toggleSetImage() {
//   if (selectedItems.myImg1 && selectedItems.myImg2 && selectedItems.myImg3) {
//     // All three images are selected
//     setTimeout(function () {
//       $("#stagezone").append(
//         `<img src='${cake}' class="image-layer" style="width: 400px; height: 400px;">`
//       );
//     }); // Delay for 5 seconds (5000 milliseconds)
//   }
// }
$(document).ready(function () {
  $(".single-item").slick();
});

var cake = "img/딸기케이크.png";

var selectedItems = {
  myImg1: false,
  myImg2: false,
  myImg3: false,
};

$(".box img").click(function () {
  var id = $(this).attr("id");
  selectedItems[id] = !selectedItems[id];
  toggleSetImage();
  $(this).toggleClass("clicked"); // Add or remove the "clicked" class
});

function toggleSetImage() {
  if (selectedItems.myImg1 && selectedItems.myImg2 && selectedItems.myImg3) {
    // All three images are selected
    $("#stagezone").addClass("red"); // Change the background color to red

    setTimeout(function () {
      $("#stagezone").removeClass("red"); // Remove the red background color
      $("#stagezone").append(
        `<img src='${cake}' class="image-layer" style="width: 400px; height: 400px;">`
      );
    }, 3000); // Delay for 3 seconds (3000 milliseconds) before displaying the cake image
  }
}
