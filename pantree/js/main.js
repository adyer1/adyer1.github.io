$(document).ready(function() {
    
    $('form').submit(function(event) {

        var formData = $(this).serialize();
      
        $.ajax({
            type         : 'POST',
            url          : 'https://web2-product-page.herokuapp.com/subscribers', 
            data         : formData, 
            dataType     : 'json' 
        }).done(function(data) {

                console.log(data);
                $('.confirmation').fadeIn();
                $('.error-message').text("");
                $('input[name=email]').val("");
            }).fail(function(data) {
                console.log(data);
                var errorMessage = JSON.parse(data.responseText).email[0];
                $('.error-message').text(errorMessage);
                $('.confirmation').hide();
            });
    
        event.preventDefault();
    });    
});