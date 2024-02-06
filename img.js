$(document).ready(function () {
    $(".single-item").slick();

    var strawberryCake = "img/cake.png";
    var CherryHam = "img/cherryHam.png";
    var StrawberryHam = "img/strawberryham.png";
    var dish = "img/dish.png";

    var selectedItems = {
        myImg1: false,
        myImg2: false,
        myImg3: false,
        myImg4: false,
        myImg5: false,
        myImg6: false,
        myImg7: false,
        myImg8: false,
        myImg9: false,
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
        var allSelected3 = selectedItems.myImg1 && selectedItems.myImg2 && selectedItems.myImg6;

        $("#stagezone").empty(); // Remove existing images

        if (allSelected1) {
            $("#stagezone").append(`<img src='${strawberryCake}' alt="">`);
        } else if (allSelected2) {
            $("#stagezone").append(`<img src='${CherryHam}' alt="">`);
        } else if (allSelected3) {
            $("#stagezone").append(`<img src='${StrawberryHam}' alt="">`);
        } else {
            $("#stagezone").append(`<img src='img/bowl.png' alt="">`);
        }

        if (allSelected1 || allSelected2 || allSelected3) {
            $("#stagezone").append(`<img src='${dish}' alt="">`);
        }
    }
});
