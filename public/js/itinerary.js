days = [];

var currDay = {
    hotel: null,
    restaurants: [],
    activities: [],
}

// function(){

// }

var selectedHotel = $('#hotel-choices').find(":selected").text();
console.log(selectedHotel);

$('#hotelAdd').on('click', function(e){
    var selectedHotel = $('#hotel-choices').find(":selected").text();
    currDay.hotel = selectedHotel;

})