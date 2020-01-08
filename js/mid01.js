$(document).ready(function () {
    //   set back to top button
    $("footer a[href='#myPage']").click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 900);
    });
    $("#btt").click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 900);
    });

    $(window).scroll(function () {
        var winTop = $(window).scrollTop();
        var mypageh = $('#page0').height();
        var last_page_pos = $('#footer').position().top;
        var last_page_height = $('#footer').height();
        if ((winTop > mypageh)&&(winTop<(last_page_pos-(last_page_height*10)))){
            $('#btt').fadeIn();
        } 
        else {
            $('#btt').fadeOut();
        }
    });


    //  set fade in & out
    $(window).scroll(function () {
        $(".fadeout").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (winTop > (pos * 0.7)) {
                $(this).addClass("fadein");
            } else {
                $(this).removeClass("fadein");
            }
        });
    });
    
    $(window).scroll(function () {
            var height = $('#page0').height()*0.5;

            var winTop = $(window).scrollTop();
            
            document.getElementById('page0').style.backgroundColor="rgb(129,199,212,"+(0.3*(height-winTop)/height)+")";
    });

    $(window).scroll(function () {
        var height = $('#page7').height()*0.5;

        var winTop = $(window).scrollTop();
        
        var pos = $('#page7').position().top;
        
        if (winTop > (pos-height)){
            document.getElementById('page7').style.backgroundColor="rgb(129,199,212,"+(0.3*((winTop-(pos-height))/height))+")";
            document.getElementById('footer').style.backgroundColor="rgb(129,199,212,"+(0.3*((winTop-(pos-height))/height))+")";
        }

        console.log(winTop);
        console.log(pos);
        console.log(height);
    });
});



//set fix page2
$(document).ready(function () {
    var obj_position = $('#page2_son').position().top;
    var obj_height = $('#page2_son').height();
    var next_obj_position = $('#page2-5').position().top;
    var this_page_height = $('#page2').height();
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        if ((scroll_position > obj_position) && (scroll_position < next_obj_position - obj_height)) {
            $("#page2_son").addClass("fix");
        } else {
            $("#page2_son").removeClass("fix");
        }

        if (scroll_position > (next_obj_position - obj_height)) {
            $("#page2_son").addClass('fix_bottom_page2_son');
        } else {
            $("#page2_son").removeClass('fix_bottom_page2_son');
        }
        
        
        // if (scroll_position > (next_obj_position - (4*obj_height))){
        //     $("#company").removeClass('hidden');
        // } else{
        //     $("#company").addClass('hidden');
        // }
        
        
        //company show setting
        
        
        if (scroll_position > (next_obj_position - (3*obj_height))){
//            $("#B_company").removeClass('hidden');
            $("#A_company").addClass('hidden');
            $("#tw_1").addClass('hidden');
        } else{
            $("#A_company").removeClass('hidden');
            $("#tw_1").removeClass('hidden');
//            $("#B_company").addClass('hidden');
        }
        
        if (scroll_position > (next_obj_position - (2*obj_height))){
            $("#C_company").removeClass('hidden');
            $("#tw_3").removeClass('hidden');
//            $("#B_company").addClass('hidden');
            $(".pg2_circle").addClass('B_to_C');
        } else{
//            $("#B_company").removeClass('hidden');
            $("#C_company").addClass('hidden');
            $("#tw_3").addClass('hidden');
            $(".pg2_circle").removeClass('B_to_C');
        }
        
        if ((scroll_position > (next_obj_position - (3*obj_height)))&&(scroll_position < (next_obj_position - (2*obj_height)))){
            $("#B_company").removeClass('hidden');
            $("#tw_2").removeClass('hidden');
            $(".pg2_circle").addClass('A_to_B');
        } else{
            $("#B_company").addClass('hidden');
            $("#tw_2").addClass('hidden');
            $(".pg2_circle").removeClass('A_to_B');
        }
    });
});

//set fix page3
$(document).ready(function () {
    var obj_position = $('#page3_son').position().top;
    var obj_height = $('#page3_son').height();
    var next_obj_position = $('#page5').position().top;
    var this_page_height = $('#page3').height();
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        if ((scroll_position > obj_position) && (scroll_position < next_obj_position - obj_height)) {
            $("#page3_son").addClass("fix");
        } else {
            $("#page3_son").removeClass("fix");
        }

        if (scroll_position > (next_obj_position - obj_height)) {
            $("#page3_son").addClass('fix_bottom_page3_son');
        } else {
            $("#page3_son").removeClass('fix_bottom_page3_son');
        }


        //boat

        if (scroll_position > next_obj_position - (4 * obj_height)) {
            $('#draft').addClass('pg3after');
        } else {
            $('#draft').removeClass('pg3after');
        }
        
        if (scroll_position > next_obj_position - (3 * obj_height)) {
            $('#boatt').addClass('pg3after');
            $('#draft').removeClass('pg3after');
        } else {
            $('#boatt').removeClass('pg3after');
        }
        
        if (scroll_position > next_obj_position - (2 * obj_height)) {
            $('#weaponn').addClass('pg3after');
            $('#boatt').removeClass('pg3after');
        } else {
            $('#weaponn').removeClass('pg3after');
        }


        if (scroll_position > next_obj_position - (3 * obj_height)) {
            $('#boatt_detail').removeClass('hidden');
            $('#wire').addClass('hidden');
        } else {
            $('#wire').removeClass('hidden');
            $('#boatt_detail').addClass('hidden');
        }

        if (scroll_position > next_obj_position - (2 * obj_height)) {
            $('#weapon').removeClass('hidden');
            $('#weapon_row').addClass('weapon_intro_pad');
            $('#weapon_row').removeClass('weapon_intro');
            $('#weaponn_detail').removeClass('hidden');
        } else {
            $('#weapon').addClass('hidden');
            $('#weapon_row').removeClass('weapon_intro_pad');
            $('#weapon_row').addClass('weapon_intro');
            $('#weaponn_detail').addClass('hidden');
        }

        if ((scroll_position > next_obj_position - (3 * obj_height)) && (scroll_position < next_obj_position - (2 * obj_height))){
            $('#body').removeClass('hidden');
        } else {
            $('#body').addClass('hidden');
        }


    });
});


//set fix page5
$(document).ready(function () {
    var obj_position = $('#page5_son').position().top;
    var obj_height = $('#page5_son').height();
    var next_obj_position = $('#page6').position().top;
    var this_page_height = $('#page5').height();
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        if ((scroll_position > obj_position) && (scroll_position < next_obj_position - obj_height)) {
            $("#page5_son").addClass("fix5");
        } else {
            $("#page5_son").removeClass("fix5");
        }
        if (scroll_position > (next_obj_position - obj_height)) {
            $("#page5_son").addClass('fix_bottom_page5_son');
        } else {
            $("#page5_son").removeClass('fix_bottom_page5_son');
        }

        if (scroll_position > next_obj_position - (5 * obj_height)){
            $('#difficult').addClass('hidden')
            $('#difficult_row').removeClass('hidden')
        }else{
            $('#difficult_row').addClass('hidden')
            $('#difficult').removeClass('hidden')
        }


        if (scroll_position > next_obj_position - (4 * obj_height)) {
            $('#dif_1').addClass('hidden')
            $('#dif_10').removeClass('hidden')
            $('#dt_1').addClass('hidden')
            $('#di_1').removeClass('hidden')
        } else {
            $('#dif_10').addClass('hidden')
            $('#dif_1').removeClass('hidden')
            $('#di_1').addClass('hidden')
            $('#dt_1').removeClass('hidden')
        }
        
        if (scroll_position > next_obj_position - (3 * obj_height)) {
            $('#dif_2').addClass('hidden')
            $('#dif_20').removeClass('hidden')
            $('#dt_2').addClass('hidden')
            $('#di_2').removeClass('hidden')
        } else {
            $('#dif_20').addClass('hidden')
            $('#dif_2').removeClass('hidden')
            $('#di_2').addClass('hidden')
            $('#dt_2').removeClass('hidden')
        }
        
        if (scroll_position > next_obj_position - (2 * obj_height)) {
            $('#dif_3').addClass('hidden')
            $('#dif_30').removeClass('hidden')
            $('#dt_3').addClass('hidden')
            $('#di_3').removeClass('hidden')
        } else {
            $('#dif_30').addClass('hidden')
            $('#dif_3').removeClass('hidden')
            $('#di_3').addClass('hidden')
            $('#dt_3').removeClass('hidden')
        }


    });
});