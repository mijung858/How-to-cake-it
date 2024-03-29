

// $(document).ready(function () {
//     $(".single-item").slick();

//     var strawberryCake = "img/cake.png";
//     var CherryHam = "img/cherryHam.png";
//     var StrawberryHam = "img/strawberryham.png";
//     var dish = "img/dish.png";
//     var nameTag = "img/nametag.png";
//     var Clock= "img/clock.png";
//     var selectedItems = {
//         myImg1: false,
//         myImg2: false,
//         myImg3: false,
//         myImg4: false,
//         myImg5: false,
//         myImg6: false,
//         myImg7: false,
//         myImg8: false,
//         myImg9: false,
//     };

//     $(".box img").click(function () {
//         var id = $(this).attr("id");
//         selectedItems[id] = !selectedItems[id];
//         toggleSetImage();
//         $(this).toggleClass("clicked"); // Add or remove the "clicked" class
//     });

//     function toggleSetImage() {
//         var allSelected1 = selectedItems.myImg1 && selectedItems.myImg2 && selectedItems.myImg3;
//         var allSelected2 = selectedItems.myImg4 && selectedItems.myImg5 && selectedItems.myImg6;
//         var allSelected3 = selectedItems.myImg1 && selectedItems.myImg2 && selectedItems.myImg6;

//         $("#stagezone").empty(); // Remove existing images

//         if (allSelected1) {
//             $("#stagezone").append(`<img src='${strawberryCake}' alt="" style="top: -25px;">`);
//         } else if (allSelected2) {
//             $("#stagezone").append(`<img src='${CherryHam}' alt="" style="top: -15px;">`);
//         } else if (allSelected3) {
//             $("#stagezone").append(`<img src='${StrawberryHam}' alt="" style="top: -25px;">`);
//         } else {
//             $("#stagezone").append(`<img src='img/bowl.png' alt="">`);
//         }

//         if (allSelected1 || allSelected2 || allSelected3) {
//             $("#stagezone").append(`<img src='${dish}' alt="" style="z-index: -10;">`);
//         }
//         if (allSelected1 || allSelected2 || allSelected3) {
//             $("#stagezone").append(`<img src='${nameTag}' alt="" style="z-index: 10;     top: 360px;" >`);
//         }

//         // Check if three or more images are selected
//         var selectedCount = Object.values(selectedItems).filter(Boolean).length;
//         if (selectedCount >= 4) {
//             alert("네가지 재료만 선택해줘!");
//         }
//     }
// });
$(document).ready(function () {
    $(".single-item").slick();

    var strawberryCake = "img/cake.png";
    var CherryHam = "img/cherryHam.png";
    var StrawberryHam = "img/strawberryham.png";
    var dish = "img/dish.png";
    var nameTag = "img/nametag.png";
    var mushroomCake = "img/mushroomcake.png";
    var mushroomHam = "img/mushroomham.png";
    var Clock = "img/clock.png";
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
        myImg10: false,
    };

    $(".box img").click(function () {
        var id = $(this).attr("id");
        selectedItems[id] = !selectedItems[id];
        toggleSetImage();
        $(this).toggleClass("clicked"); // Add or remove the "clicked" class
    });

    function toggleSetImage() {
        var allSelected1 = selectedItems.myImg1 && selectedItems.myImg2 && selectedItems.myImg3;
        // 딸기케이크
        var allSelected2 = selectedItems.myImg4 && selectedItems.myImg5 && selectedItems.myImg6;
        // 체리햄
        var allSelected3 = selectedItems.myImg1 && selectedItems.myImg2 && selectedItems.myImg6;
        // 딸기햄
        var allSelected4 = selectedItems.myImg10 && selectedItems.myImg7 && selectedItems.myImg8;
        // 버섯케이크
        var allSelected5 = selectedItems.myImg10 && selectedItems.myImg7 && selectedItems.myImg8;
        // 버섯햄

        $("#stagezone").empty(); // Remove existing images

        if (allSelected1) {
            setTimeout(function() {
                $("#stagezone").append(`<img src='${strawberryCake}' alt="" style="top: -25px;">`);
                setTimeout(function() {
                    $("#stagezone").append(`<img src='${Clock}' alt="" style="z-index: 20; top: 150px;">`);
                    setTimeout(function() {
                        $("#stagezone img[src='${Clock}']").remove(); // Remove clock image after 3 seconds
                    }, 3000);
                }, 3000);
            }, 3000);
        } else if (allSelected2) {
            $("#stagezone").append(`<img src='${CherryHam}' alt="" style="top: -15px;">`);
        } else if (allSelected3) {
            $("#stagezone").append(`<img src='${StrawberryHam}' alt="" style="top: -25px;">`);
        } else if (allSelected4) {
            $("#stagezone").append(`<img src='${mushroomCake}' alt="" style="top: -25px;">`);
        } else if (allSelected5) {
            $("#stagezone").append(`<img src='${mushroomHam}' alt="" style="top: -25px;">`);
                
        } else {
            $("#stagezone").append(`<img src='img/bowl.png' alt="">`);
        }

        if (allSelected1 || allSelected2 || allSelected3 || allSelected4 || allSelected5) {
            $("#stagezone").append(`<img src='${dish}' alt="" style="z-index: -10;">`);
            $("#stagezone").append(`<img src='${nameTag}' alt="" style="z-index: 10; top: 360px;">`);
        }

        // Check if three or more images are selected
        var selectedCount = Object.values(selectedItems).filter(Boolean).length;
        if (selectedCount >= 4) {
            alert("네가지 재료만 선택해줘!");
        }
    }
});
