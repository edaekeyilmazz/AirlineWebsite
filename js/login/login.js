"use strict";
$(document).ready(function () {
    // regular expressions
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    var phonePattern = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

    // event handler for submit button
    $("#login").submit( event => {
        let isValid = true

        // CHECKING NAME
        const login_username = $("#login_username").val().trim();
        if (login_username == "") {
            $("#login_username").next().text("* This field is required.");
            isValid = false;
        }
        else {
            $("#login_username").next().text("");
        }
        $("#login_username").val(login_username);


        const login_password = $("#login_password").val().trim();
        if (login_password == "") {   
            $("#login_password").next().text("* This field is required.");
            isValid = false;
        }
        else {
            $("#login_password").next().text("");
        }
        $("#login_password").val(login_password);


        
        if (isValid == false) {
            event.preventDefault();
        }
    });   
    $("#Signup").submit(event => {
        let isValid = true

        // CHECKING NAME
        const signup_username = $("#signup_username").val().trim();
        if (signup_username == "") {
            $("#signup_username").next().text("* This field is required.");
            isValid = false;
        }
        else {
            $("#signup_username").next().text("");
        }
        $("#signup_username").val(signup_username);
        // CHECKING EMAIL
        const email = $("#email").val().trim();
        if (email == "") {
            $("#email").next().text("* This field is required.");
            isValid = false;
        }
        // checking email format
        else if (!emailPattern.test(email) ) {
            $("#email").next().text("Enter a valid email.");
            isValid = false;
        }
        else {
            $("#email").next().text("");
        }
        $("#email").val(email);

        const signup_password = $("#signup_password").val().trim();
        if (signup_password == "") {   
            $("#signup_password").next().text("* This field is required.");
            isValid = false;
        }
        else {
            $("#signup_password").next().text("");
        }
        $("#signup_password").val(signup_password);

        if (isValid == false) {
            event.preventDefault();
        }

    });

    $("#signup_button_switch").click( event => {
        $("#login").css('display','none');
        $("#Signup").css('display', 'grid');
    }
    );
    $("#login_button_switch").click( event => {
        $("#login").css('display','grid');
        $("#Signup").css('display','none');
    }
    );

});