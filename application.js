$(document).ready(function(){
    function getDate() {
        var d = new Date();
        //return d.getFullYear();

        var month = d.getMonth() + 1;
        var day = d.getDate();
        var time = d.getHours() + ':' + d.getMinutes() + ':' + (d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds());

        var output = ' ' + d.getFullYear() + '/' +
            (month < 10 ? '0' : '') + month + '/' +
            (day < 10 ? '0' : '') + day + ' ' + time;
        return output;
    }
    $('.tweet-message').on('mouseenter', function(event){
        $(this).animate({'padding':'50px 0'});
        event.stopPropagation();
    });
    $('.tweet-message').on('mouseleave', function(event){
        $(this).animate({'padding':'0px 0'});
        event.stopPropagation();
    });

    $('#new-tweet').on('click', 'button', function(){
        var message = $('.tweet-message').val();
        $('#tweets').closest('div')
                    .prepend('<div class=\'tweet\'><h3>'+message+'</h3><p>@trevorold  <small>'+getDate()+'</p></div>')
        $('.tweet-message').val('');
    })
});