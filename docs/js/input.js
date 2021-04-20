$(document).ready(function() {
    var token = "46e755fe2e9591025b102219bb558b1d04e79a5b";
    $("#address").suggestions({
        token: token,
        type: "ADDRESS",
        /* Вызывается, когда пользователь выбирает одну из подсказок */
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });
    
    $show = $("#show-map");

    function showOn(suggestion) {
    console.log(suggestion);
    var hasHouseCoords = suggestion.data.qc_geo === "0" || suggestion.data.qc_geo === "1";
    if (hasHouseCoords) {
        showHouse(suggestion);
    } else {  
        showUnknown(suggestion);
    }
    }

    function showUnknown(suggestion) {
    var message;
    if (suggestion.data.house) {
        message = "Координаты дома неизвестны";
    } else {
        message = "Укажите адрес до дома";
    }
    $show.text(message);
    $show.attr("href", "#");
    $show.addClass("disabled");
    $show.show();
    }

    function showHouse(suggestion) {
    var mapLink = "http://maps.yandex.ru/?text=" + suggestion.data.geo_lat + "," + suggestion.data.geo_lon;
    $show.text("Показать на карте");
    $show.attr("href", mapLink);
    $show.removeClass("disabled");
    $show.show();
    }

    function showOff() {
    $show.hide();
    }

    $("#address").suggestions({
    token: token,
    type: "ADDRESS",
    onSelect: showOn,
    onSelectNothing: showOff
    });
})



