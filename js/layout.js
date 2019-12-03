// handle toggle .show-home width 100%-0%
//$(".toggle-home").click(function(){
//	$("body").toggleClass("show-home");
//});
// handle global search box expand/collapse
jQuery(document).on('click', '.global-search-form', function(e) {
    $(this).addClass('open');
    $(this).find('.form-control').focus();

    $('.global-search-form .form-control').on('blur', function(e) {
        $(this).closest('.global-search-form').removeClass('open');
        $(this).unbind('blur');
    });
});
// handle mega menu click
jQuery(document).on('click', '.hold-on-click', function(e) {
    e.stopPropagation()
});
// handle tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

// handle RESULTS fullscreen
$('.toggle-results-fullscreen').click(function(){
    $('.results').toggleClass('fullscreen');
});
$('.toggle-profile-fullscreen').click(function(){
    $('.profile').toggleClass('fullscreen');
});
$('.toggle-details-fullscreen').click(function(){
    $('.details').toggleClass('fullscreen');
});

// handle toggle RESULTS panel width 100%-0%
$('.toggle-results').click(function(){
    $('body').toggleClass('show-results');
    $('body').removeClass('hide-home hide-filter show-profile show-details');
});

// handle Loading PROFILE content
$('body').removeClass('show-profile');
if ($('.profile').hasClass('loaded')){
    $('body').toggleClass('show-profile');
}


// handle flex box splitter
$(document).ready(function () {
    $('.results').resizable({
        // optional selector for handle that starts dragging
        handleSelector: '.splitter',
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
$('.toggle-profile').click(function(){
    $('body').toggleClass('show-profile'); /* open/close profile panel */
    $('body').removeClass('show-details');
    $('.results table tbody tr').toggleClass('selected'); /* highlight selected row */
    $('.profile').removeAttr('style'); /* remove inline style width put there dynamically by resizer */
    $('.results').removeAttr('style'); /* remove inline style width put there dynamically by resizer */
});

// handle open PROFILE panel button(s)
$('.open-profile').click(function(){
    $('body').addClass('show-profile');
});

// handle toggle DETAILS panel margin-right 0-300px
$('.toggle-details').click(function(){
    $('body').toggleClass('show-details');
});

// handle toggle light/dark themes
$('.toggle-lights').click(function(){
    $('#lightsOut').prop('disabled', function(i, v) { return !v; }); /* hash is required to work vs class */
});

// handle toggle HOME panel min-width 250px-0
$('.toggle-hide-home').click(function(){
    $('body').toggleClass('hide-home');
});

// handle toggle FILTER panel min-width 250px-0
$('.toggle-hide-filter').click(function(){
    $('body').toggleClass('hide-filter');
});

// handle close PROFILE panel
$('.close-profile').click(function(){
    $('body').removeClass('show-profile');
    $('body').removeClass('show-details');
    $('.results table tbody tr').removeClass('selected'); /* highlight selected row */
    $('.profile').removeAttr('style'); /* remove inline style width put there dynamically by resizer */
    $('.results').removeAttr('style'); /* remove inline style width put there dynamically by resizer */
});
// handle close DETAILS panel
$('.close-details').click(function(){
    $('body').removeClass('show-details');
    $('.profile').removeAttr('style'); /* remove inline style width put there dynamically by resizer */
    $('.results').removeAttr('style'); /* remove inline style width put there dynamically by resizer */
});

// dismiss modal on ESC
/*$(document).keyup(function(event){
    if(event.which=='27'){
        $('.results').removeClass('fullscreen');
        $('.profile').removeClass('fullscreen');
        $('.details').removeClass('fullscreen');
    }
});*/
$(document).on('keydown', function(event) {
    if (event.key == 'Escape') {
        $('.results').removeClass('fullscreen');
        $('.profile').removeClass('fullscreen');
        $('.details').removeClass('fullscreen');
    }
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
        trans();
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans();
        document.documentElement.setAttribute('data-theme', 'light')
    }
});

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000)
};

// handle double clicking splitter to close
var splitterTappedTwice = false;
function toggleProfile(e) {

    // handle double tap
    if (e.type === "touchend" && !splitterTappedTwice) {
        splitterTappedTwice = true;
        setTimeout(function () { splitterTappedTwice = false; }, 300);
        return false;
    }
    var profile = $(".profile");
    var oldTrans = $profile.css("transition");
    $profile.css("transition", "width 0.5s ease-in-out");
    if ($profile.width() < 20) {
        $profile.show();
        $profile.width(400);
    } else {
        $profile.width(0);
    }

    setTimeout(function () { profile.css("transition", oldTrans) }, 700);
    return true;
}
