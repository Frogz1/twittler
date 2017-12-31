$(document).ready(function(){
    $('#new-tweet').on('click', 'button', function(){
        var message = $('.tweet-message').val();
        $('#tweets').append('<div>'+message+'</div>')
        $('.tweet-message').text();
    })
});