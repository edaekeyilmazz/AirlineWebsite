$(document).ready(function () {
    // regular expressions
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    var phonePattern = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

    $('#direction').click(function () {
        $('#map_direction').toggleClass('none');
        $('#direction_icon').toggleClass('fa-plus fa-minus-circle ');
    })

    $('#send').click(function () {
       var check_mail = $("input[name=email]").val();
       var check_contact = $("input[name=contact]").val();
       var check_name = $("input[name=full_name]").val();
       var check_message = $("textarea#text_message").val();
       
       var error_message = '';

       if($("#check_check").is(':checked')){
            var checkkkk = true;
        }
        else{
            error_message += 'Make sure you consent to us contacting you! <br>';
        } 

        if(!check_mail){
            error_message += 'Email Field is required <br>';
            $('#email').addClass('border-danger')
        }else{
            $('#email').removeClass('border-danger')
            if(emailPattern.test(check_mail)){
                var checkkkk = true;
            }else{
                error_message += 'Make sure your email input is valid <br>';
                if($('#email').hasClass('border-danger')){
                    var checkkkk = true;
                }
                else{
                    $('#email').addClass('border-danger')
                }
            }    
        }

        if(!check_contact){
            error_message += 'Contact Field is required <br>';
            $('#contact').addClass('border-danger')
        }else{
            $('#contact').removeClass('border-danger')
            if(phonePattern.test(check_contact)){
                var checkkkk = true;
            }else{
                error_message += 'Make sure your contact input is valid <br>';
                if($('#contact').hasClass('border-danger')){
                    var checkkkk = true;
                }
                else{
                    $('#contact').addClass('border-danger')
                }
            }
        }

        if(!check_name){
            error_message += 'Full Name Field is required <br>';
            $('#full_name').addClass('border-danger')
        }else{
            $('#full_name').removeClass('border-danger')
        }

        if(!check_message){
            error_message += 'Message Field is required <br>';
            $('#text_message').addClass('border-danger')
        }else{
            $('#text_message').removeClass('border-danger')
        }

        if(error_message.length > 2){
            $('#check_message').html(error_message);
        }else{
            $('#check_message').html('');
            $('#email').val('');
            $('#contact').val('');
            $('#full_name').val('');
            $('#text_message').val('');
            alert('Thankyou for contacting us! We will get back to you in 3 to 5 business days.')
        }

    })

});