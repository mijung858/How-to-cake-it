$(document).ready(function () {
  $(".single-item").slick();

  var strawberryCake = "img/cake.png";
  var CherryHam = "img/cherryHam.png";
  var dish = "img/dish.png";

  var selectedItems = {
      myImg1: false,
      myImg2: false,
      myImg3: false,
      myImg4: false,
      myImg5: false,
      myImg6: false,
  };

  $(".box img").click(function () {
      var id = $(this).attr("id");
      selectedItems[id] = !selectedItems[id];
      toggleSetImage();
      $(this).toggleClass("clicked"); // Add or remove the "clicked" class
  });

  function toggleSetImage() {
      var allSelected1 = selectedItems.myImg1 && selectedItems.myImg2 && selectedItems.myImg3;
      var allSelected2 = selectedItems.myImg4 && selectedItems.myImg5 && selectedItems.myImg6;

      $("#stagezone").empty(); // Remove existing images

      $("#stagezone").append(
          `<img src='${allSelected1 ? strawberryCake : (allSelected2 ? CherryHam : 'img/bowl.png')}' alt="">`
      );

      if (allSelected1 || allSelected2) {
          $("#stagezone").append(`<img src='${dish}' alt="">`);
      }
  }
});
