$(document).ready(function() {
    
    $('form').submit(function(event) {

        var formData = $(this).serialize();
      
        $.ajax({
        type         : 'POST',
        url          : 'https://web2-product-page.herokuapp.com/subscribers', 
        data         : formData, 
        dataType     : 'json' 
    }).done(function(data) {

            if (data.validEmail) {
                $('.confirmation').fadeIn();
                $('.error-message').text("");
                $('input[name=email]').val("");
            } else {
                $('.error-message').text("Not a valid email address");
            }


        }).fail(function() {
            $('.error-message').text("The server did not respond.");                
        });
    
        event.preventDefault();
    });    
});