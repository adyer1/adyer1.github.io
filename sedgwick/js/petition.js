// petition.js
$(document).ready(function() {

    // process the form
    $('form').submit(function(event) {

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'first-name'        : $('input[name=first-name]').val(),
            'last-name'         : $('input[name=last-name]').val(),
            'email'             : $('input[name=email]').val(),
            'country'           : $('input[name=country]').val(),
            'street-address'    : $('input[name=street-address]').val(),
            'zip-code'          : $('input[name=zip-code]').val(),
            'comment'           : $('input[name=comment]').val(),
        };

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'petition.php', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
                        encode          : true
        })
            // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                console.log(data);

                // here we will handle errors and validation messages
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});
