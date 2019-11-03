// handle toggle .show-dashboard width 100%-0%
//$(".toggle-dashboard").click(function(){
//	$("body").toggleClass("show-dashboard");
//});

// handle toggle RESULTS panel width 100%-0%
$(".toggle-results").click(function(){
    $("body").toggleClass("show-results");
    $("body").removeClass("hide-dashboard hide-filter show-profile show-details");
});

// handle flex box splitter
$(document).ready(function () {
    $(".results").resizable({
        // optional selector for handle that starts dragging
        handleSelector: ".splitter",
        // resize the width
        resizeWidth: true,
        // resize the height
        resizeHeight: false,
        // the side that the width resizing is relative to
        resizeWidthFrom: 'right',
        // the side that the height resizing is relative to
        resizeHeightFrom: 'bottom',
        // hook into start drag operation (event,$el,opt passed - return false to abort drag)
        onDragStart: null,
        // hook into stop drag operation (event,$el,opt passed)
        onDragEnd: null,
        // hook into each drag operation (event,$el,opt passed)
        onDrag: null,
        // disable touch-action on the $handle
        // prevents browser level actions like forward back gestures
        touchActionNone: true
    });
});

// handle toggle PROFILE panel width 100%-0%
$(".toggle-profile").click(function(){
    $("body").toggleClass("show-profile"); /* open/close profile panel */
    $(".results table tbody tr").toggleClass("selected"); /* highlight selected row */
    $(".profile").removeAttr("style"); /* remove inline style width put there by resizer */
});

// handle open PROFILE panel button(s)
$(".open-profile").click(function(){
    $("body").addClass("show-profile");
});

// handle toggle DETAILS panel margin-right 0-300px
$(".toggle-details").click(function(){
    $("body").toggleClass("show-details");
});

// handle toggle light/dark themes
$(".toggle-lights").click(function(){
    $('#lightsOut').prop('disabled', function(i, v) { return !v; }); /* hash is required to work vs class */
});

// handle toggle DASHBOARD panel min-width 250px-0
$(".toggle-hide-dashboard").click(function(){
    $("body").toggleClass("hide-dashboard");
});

// handle toggle FILTER panel min-width 250px-0
$(".toggle-hide-filter").click(function(){
    $("body").toggleClass("hide-filter");
});

// handle close PROFILE panel
$(".close-profile").click(function(){
    $("body").removeClass("show-filter");
    $(".profile").removeClass("fullscreen");
    $(".profile").removeAttr("style"); /* remove inline style width put there by resizer */
});

// handle toggle RESULTS fullscreen
$(".toggle-results-fullscreen").click(function(){
    $(".results").toggleClass("fullscreen");
});

// handle toggle PROFILE fullscreen
$(".toggle-profile-fullscreen").click(function(){
    $(".profile").toggleClass("fullscreen");
});

/* jQuery textarea resizer pollyfill plug-in usage
$(document).ready(function() {
$('textarea.resizable:not(.processed)').TextAreaResizer()
$('iframe.resizable:not(.processed)').TextAreaResizer();
});*/

// handle dynamic user name

// handle theme SWITCH
var checkbox = document.querySelector('input[name=mode]');
checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000)
}