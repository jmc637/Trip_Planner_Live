$(createDay);

function createDay(){
    index++;
    removeMarkers();    
    days.push(
        {
            hotel: {
                name: null,
                marker: null
            },
            restaurants: [],
            activities: [],
        }
    );
    currDay = days[index - 1];
    clearItinerary();
    addButton();
}

function clearItinerary(){
    $('#itinerary .hotels').empty().append('<div></div>');
    $('#itinerary .restaurants').empty();
    $('#itinerary .activities').empty();
}

function addButton(){
    var button = '<button class="btn btn-circle day-btn">' + (index) +'</button>';
    $('#day-add').before(button);
}

function removeMarkers(){
    if(currDay){
        deleteMarker(currDay.hotel.marker);
        currDay.restaurants.forEach(function(restaurant){
            deleteMarker(restaurant.marker);
        });
        currDay.activities.forEach(function(activity){
            deleteMarker(activity.marker);
        });
    }
}