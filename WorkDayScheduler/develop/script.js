

// display current date in header
var nowDate = moment().format('dddd,' + ' MMM Do YYYY');
var date = $('#currentDay');
date.text(nowDate);
// console.log("what is the date?");

// create variable for time slots
var time = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
// console.log(time)

var i = 0;
//function for checking and updating schedule with css styling
function hourChecker(){
    var nowHour = moment().hours();
    console.log(nowHour);

    $(time).each(function(calHour) {
    var calHour = parseInt(time[i++]);
    console.log(calHour);

    if (calHour < nowHour) {
        $("#time" + calHour).addClass("past");
    }
    else if (calHour === nowHour) {
        $("#time" + calHour).removeClass("past");
        $("#time" + calHour).addClass("present");
    }
    else {
        $("#time" + calHour).removeClass("past");
        $("#time" + calHour).removeClass("present");
        $("#time" + calHour).addClass("future");
    } 
    })}
hourChecker();

//save calender event into local storage
$(document).ready(function() {

    $(".btn").on("click", function(){
        var event = $(this).siblings("textarea").val()
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, event)
        console.log(time, event)
});
});

//display calendar events when page refreshes if the same day
function renderEvent() {
    var schedule = localStorage.getItem("textarea".val);
if (nowDate !== date) {
    localStorage.removeItem("textarea".val)
}

}
renderEvent();

//get event from local storage
$("#hour9.description").val(localStorage.getItem("hour9"));
$("#hour10.description").val(localStorage.getItem("hour10"));
$("#hour11.description").val(localStorage.getItem("hour11"));
$("#hour12.description").val(localStorage.getItem("hour12"));
$("#hour13.description").val(localStorage.getItem("hour13"));
$("#hour14.description").val(localStorage.getItem("hour14"));
$("#hour15.description").val(localStorage.getItem("hour15"));
$("#hour16.description").val(localStorage.getItem("hour16"));
$("#hour17.description").val(localStorage.getItem("hour17"));

//set interval to check time every 15 mins
var interval = setInterval(hourChecker, 900000)



// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar(done)
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours(done)
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future(done)
// WHEN I click into a time block
// THEN I can enter an event(done)
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage(done)
// WHEN I refresh the page
// THEN the saved events persist - in progress
