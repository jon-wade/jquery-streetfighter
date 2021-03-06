$(document).ready(function() {
    $('.ryu').mouseenter(function() {
            $('.ryu-still').hide();
            $('.ryu-ready').show();
        })
        .mouseleave(function() {
            $('.ryu-ready').hide();
            $('.ryu-still').show();
        })
        .mousedown(function() {
            playHadouken();
            $('.ryu-ready').hide();
            $('.ryu-throwing').show();
            $('.hadouken').finish().show().animate(
                {'left': '1020px'},
                500,
                function() {
                    $(this).hide();
                    $(this).css('left', '580px');
                }
            );
        })
        .mouseup(function() {
            $('.ryu-throwing').hide();
            $('.ryu-ready').show();
        });
    $('body').keydown(function(event) {
        if(event.which == 88) {
            console.log("X pressed");
            $('.ryu-ready').hide();
            $('.ryu-throwing').hide();
            $('.ryu-still').hide();
            $('.ryu-cool').show();
        }
    });
    $('body').keyup(function() {
        console.log("Key released");
        $('.ryu-cool').hide();
        $('.ryu-ready').show();
    });
});

function playHadouken () {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}