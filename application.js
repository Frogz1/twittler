$(document).ready(function(){
function getDate(){
    var d = new Date();
    //return d.getFullYear();
    
    var month = d.getMonth()+1;
    var day = d.getDate();
    var time = d.getHours()+ ':' + d.getMinutes() + ':'+ d.getSeconds();
    
    var output = time + ' ' +d.getFullYear() + '/' +
        (month<10 ? '0' : '') + month + '/' +
        (day<10 ? '0' : '') + day ;
        return output;
}

    $('#new-tweet').on('click', 'button', function(){
        var message = $('.tweet-message').val();
        $('#tweets').closest('div')
                    .prepend('<div><h3>'+message+'</h3><p>@trevorold</p>'+getDate()+'</div>')
        $('.tweet-message').val('');
    })
});