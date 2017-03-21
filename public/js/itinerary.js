//Fake data storage
var days = [];

var currDay = {
    hotel: {
        name: null,
        marker: null
    },
    restaurants: [],
    activities: [],
}

//Helper functions: Updating map for new data

const drawNewHotel = function() {
    if (currDay.hotel.marker) {
        deleteMarker(currDay.hotel.marker);
    }
    const coords = hotels.filter(function(hotel) {
        return hotel.name === currDay.hotel.name
    })[0].place.location
    const hotelMarker = drawMarker('hotel', coords);
    currDay.hotel.marker = hotelMarker;
}

const drawNewRestaurant = function() {
    const latestRestaurant = currDay.restaurants[currDay.restaurants.length - 1];
    const coords = restaurants.filter(function(restaurant) {
        return restaurant.name === latestRestaurant.name;
    })[0].place.location
    const restaurantMarker = drawMarker('restaurant', coords);
    latestRestaurant.marker = restaurantMarker;
}

const drawNewActivity = function() {
    const latestActivity = currDay.activities[currDay.activities.length - 1];
    const coords = activities.filter(function(activity) {
        return activity.name === latestActivity.name;
    })[0].place.location
    const restaurantMarker = drawMarker('activity', coords);
    latestActivity.marker = restaurantMarker;
}

//Helper functions: DOM modifications for itinerary box

const updateHotel = function() {
    const newHotel = '<div class="itinerary-item"><span class="title">' + currDay.hotel.name + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>';
    $('.hotels>div').replaceWith(newHotel);
    drawNewHotel();
}

const updateRestaurants = function() {
    const newRestaurant = '<div class="itinerary-item"><span class="title">' + currDay.restaurants[currDay.restaurants.length - 1].name + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>';
    $('.restaurants').append(newRestaurant);
    drawNewRestaurant();
}

const updateActivities = function() {
    const newActivity = '<div class="itinerary-item"><span class="title">' + currDay.activities[currDay.activities.length - 1].name + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>';
    $('.activities').append(newActivity);
    drawNewActivity();
}

//Helper functions: Data checkers

const addHotel = function(prospectiveHotel) {
    if (currDay.hotel.name !== prospectiveHotel) {
        currDay.hotel.name = prospectiveHotel;
        updateHotel();
    }
}

const addRestaurant = function(prospectiveRestaurant) {
    var restaurantIsInCurrDay = currDay.restaurants.some(function(restaurant) {
        return restaurant.name === prospectiveRestaurant
    })
    if (!restaurantIsInCurrDay) {
        currDay.restaurants.push( { name: prospectiveRestaurant } );
        updateRestaurants();
    }
}

const addActivity = function(prospectiveActivity) {
    var activityIsInCurrDay = currDay.activities.some(function(activity) {
        return activity.name === prospectiveActivity
    })
    if (!activityIsInCurrDay) {
        currDay.activities.push({ name: prospectiveActivity });
        updateActivities();
    }
}

//Event listeners
$('#hotelAdd').on('click', function(e){
    var selectedHotel = $('#hotel-choices').find(":selected").text();
    addHotel(selectedHotel);
})

$('#restaurantAdd').on('click', function(e) {
    var selectedRestaurant = $('#restaurant-choices').find(":selected").text();
    addRestaurant(selectedRestaurant);
})

$('#activityAdd').on('click', function(e) {
    var selectedActivity = $('#activity-choices').find(":selected").text();
    addActivity(selectedActivity);
})
