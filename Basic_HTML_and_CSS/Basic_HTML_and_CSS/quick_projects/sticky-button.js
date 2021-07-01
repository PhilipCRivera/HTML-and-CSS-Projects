function sticky_relocate_right() {
    var window_top2 = 
    $(window).scrollTop();
    var div_top2 = $('#sticky-anchor').offset().top;
    if (window_top2 > div_top2) {
        $('right').addClass('mobile-sticky');
    } else {
        $('.right').removeClass('mobile-sticky');
    }
}



function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}