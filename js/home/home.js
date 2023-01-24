// "use strict";
// var $ = function(id) { return document.getElementById(id); };

//ACCORDION
$(function () {
    $("#accordion").accordion(
        {
            collapsible: true,
            active: false,
            heightStyle: "Content",
            autoheight: false,
            alwaysOpen: false,
        }
    );
});


$( function() {
    $( "#tabs" ).tabs();
});


$(document).ready(function () {

    $('#campaign_detail').popup({
        transition: 'all 0.3s',
        scrolllock: true,
        closebutton: true
    });

});

function fill_popup_info(popup_number)
{
    switch(popup_number) {
        case 1:
            $('#campaign1_detail').popup('show');
          break;
        case 2:
            $('#campaign2_detail').popup('show');
          break;
          case 3:
            $('#campaign3_detail').popup('show');
          break;
        case 4:
            $('#campaign4_detail').popup('show');
          break;
        default:
          // code block
      }

	// $('scores_table').innerHTML = resultText; // Add this created result to the page.
};