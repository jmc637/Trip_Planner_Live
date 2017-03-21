$(function initializeValues (){
    hotels.forEach(function(hotel){
        var html_string = '<option value="' + hotel.name + '">' + hotel.name + '</option>';
        $('#hotel-choices').append(html_string);
    })
    restaurants.forEach(function(restaurant){
        var html_string = '<option value="' + restaurant.name + '">' + restaurant.name + '</option>';
        $('#restaurant-choices').append(html_string);
    })
    activities.forEach(function(activity){
        var html_string = '<option value="' + activity.name + '">' + activity.name + '</option>';
        $('#activity-choices').append(html_string);
    })
});