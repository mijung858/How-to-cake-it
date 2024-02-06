$(function () {
  $(".single-item").slick();
});

$(document).ready(function () {
  $(".single-item").slick();
});

var set = "img/그릇세트.jpg";
var schoolset = "img/스쿨세트.jpg";

var selectedItems = {
  pork: false,
  spoon: false,
  plate: false,
  pencil: false,
  erase: false,
  clock: false,
};

$(".imgbox img").click(function () {
  var id = $(this).attr("id");
  selectedItems[id] = !selectedItems[id];
  toggleSetImage();
});

function toggleSetImage() {
  if (selectedItems.pencil && selectedItems.erase && selectedItems.clock) {
    // 세이미지 전체 선택되었을 때
    $("#stagezone")
      .empty()
      .append(
        `<img src='${schoolset}' class="image-layer" style="width: 300px; height: 400px;">`
      );
  } else {
    selectedItems.pork &&
      selectedItems.spoon &&
      selectedItems.plate &&
      // 세이미지 전체 선택되었을 때
      $("#stagezone")
        .empty()
        .append(
          `<img src='${set}' class="image-layer" style="width: 300px; height: 400px;">`
        );
  }
}
