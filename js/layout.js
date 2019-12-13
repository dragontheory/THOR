// Toggle HOME (button in page-header)
$('.toggle-home').click(function(){
    $('body').toggleClass('show-home');
});

// Toggle FILTER (button in page-header)
$('.toggle-filter').click(function(){
    $('body').toggleClass('show-filter');
});

// Toggle FILTER and RESULTS (button in .home)
$('.toggle-filter-results').click(function(){
    $('body').toggleClass('show-filter show-results loaded');
    $('body').removeClass('show-profile show-details loaded');
});

// Resizer
// https://github.com/RickStrahl/jquery-resizable
$('.profile').resizable({
    // optional selector for handle that starts dragging
    handleSelector: '.splitter',
    // resize the width
    resizeWidth: true,
    // resize the height
    resizeHeight: false,
    // the side that the width resizing is relative to
    resizeWidthFrom: 'left',
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

//Open PROFILE
$('.open-profile').click(function(){
    $('body').addClass('show-profile loaded');
    $('body').removeClass('show-details');
    $('.results').removeClass('fullscreen');
    $('.profile').removeClass('fullscreen');
    $('.details').removeClass('fullscreen');
});

// Open PROFILE (in RESULTS table)
$('.results table tbody tr .open-profile').click(function(){
    // remove classes from rows
    $('.results table tbody tr').removeClass('selected');
    // open PROFILE
    $('body').addClass('show-profile loaded');
    // highlight selected row
    $(this).closest('tr').addClass('selected');
    $('body').removeClass('show-details');
});

// Close PROFILE
$('.close-profile').click(function(){
    $('body').removeClass('show-profile show-details loaded');
    // remove highlight from selected row
    $('.results table tbody tr').removeClass('selected');
    $('.profile').removeClass('fullscreen');
    // remove inline style width put there dynamically by resizer
    $('.profile').removeAttr('style');
    // remove inline style width put there dynamically by resizer
    $('.results').removeAttr('style');
});

// Open DETAILS
$('.open-details').click(function(){
    $('body').addClass('show-details');
});

// Close DETAILS
$('.close-details').click(function(){
    $('body').removeClass('show-details');
    $('body').removeClass('fullscreen');
});

// Toggle light/dark themes
$('.toggle-lights').click(function(){
    // hash is required to work vs class
    $('#lightsOut').prop('disabled', function(i, v) { return !v; });
});

// Toggle RESULTS fullscreen
$('.toggle-results-fullscreen').click(function(){
    $('.results').toggleClass('fullscreen');
});

// Toggle PROFILE fullscreen
$('.toggle-profile-fullscreen').click(function(){
    $('.profile').toggleClass('fullscreen');
});

// Toggle DETAILS fullscreen
$('.toggle-details-fullscreen').click(function(){
    $('.details').toggleClass('fullscreen');
});

// Exit FULLSCREEN via ESC
$(document).keyup(function(event){
    if(event.which=='27'){
        $('.results').removeClass('fullscreen');
        $('.profile').removeClass('fullscreen');
        $('.details').removeClass('fullscreen');
    }
});

// Exit FULLSCREEN via ESC v2
/*$(document).on('keydown', function(event) {
    if (event.key == 'Escape') {
        $('.results').removeClass('fullscreen');
        $('.profile').removeClass('fullscreen');
        $('.details').removeClass('fullscreen');
    }
});*/

// Global search box expand/collapse
jQuery(document).on('click', '.global-search-form', function(e) {
    $(this).addClass('open');
    $(this).find('.form-control').focus();
    $('.global-search-form .form-control').on('blur', function(e) {
        $(this).closest('.global-search-form').removeClass('open');
        $(this).unbind('blur');
    });
});

// Mega menu click
jQuery(document).on('click', '.hold-on-click', function(e) {
    e.stopPropagation()
});

// Tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

/* jQuery textarea resizer pollyfill plug-in usage
$(document).ready(function() {
$('textarea.resizable:not(.processed)').TextAreaResizer()
$('iframe.resizable:not(.processed)').TextAreaResizer();
});*/

// handle dynamic user name

// handle theme SWITCH
let checkbox = document.querySelector('input[name=mode]');
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

// Double clicking splitter to close
let splitterTappedTwice = false;
function toggleProfile(e) {

    // handle double tap
    if (e.type === 'touchend' && !splitterTappedTwice) {
        splitterTappedTwice = true;
        setTimeout(function () { splitterTappedTwice = false; }, 300);
        return false;
    }
    let profile = $('.profile');
    let oldTrans = $profile.css('transition');
    $profile.css('transition', 'width 0.5s ease-in-out');
    if ($profile.width() < 20) {
        $profile.show();
        $profile.width(400);
    } else {
        $profile.width(0);
    }
    setTimeout(function () { profile.css('transition', oldTrans) }, 700);
    return true;
}
