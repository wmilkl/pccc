

$(function(){
    /*$('.guowu').mouseenter(function(){
        $('.shop').show()
        $(this).css(
            'color','#ff6700'
        )
    }).mouseleave(function(){
        $('.shop').hide();
        $(this).css(
            'color','#ccc'
        )
    });*/
    $('.guowu').on('mouseenter',function(){
        $(this).css('color','orange');
        $('.shop').show();
    }).on('mouseleave',function(){
        $(this).css('color','#ccc');
        $('.shop').hide();
    });


   $('.sel').children().hide();
   $('.xiaomi ul li ').on('mouseenter',function(){
       var index=$(this).index();
       $(this).children('a').css('color','#ff6700');
       $('.sel').children().hide();
       $('.sel').children().eq(index).show();
   })
    $('.xiaomi ul li ').on('mouseleave',function(){
        var index=$(this).index();
        $(this).children('a').css('color','#000');


    });
    $('.sel').on('mouseleave',function(){
        $('.sel').children().hide();
    })





    function change(ele){

        $(ele).on('mouseenter',function(){

            $(this).children('.brick').stop().animate({
                'top':233
            },500);
            $(ele).on('mouseleave',function(){

                $(this).children('.brick').stop().animate({
                    'top':300
                },500);

            })

        });

    }

    change('.jin2');
    change('.jin3');
    change('.jin4');
    change('.jin5');
    change('.one2');
    change('.one3');
    change('.one4');

/*
var n=0;
    var
var timer=setInterval(function(){
    if(n>)

})
*/
   /* function dong() {

        $('.xmzj .xmzj_mzj').stop().animate({'left':-1227},500);
        setInterval(dong1,3000 );
    }
    setInterval(dong,3000 );

    function dong1() {

        $('.xmzj .xmzj_mzj').stop().animate({'left':0},500);

    }*/
    /* console.log($('.xmzj .xmzj').attr('left'));
     setInterval(function(){
         console.log($('.xmzj .xmzj').attr('left'));
         $('.xmzj .xmzj_mzj').stop().animate({'left':-1227},500);
     },2000)*/


     //console.log($('.ping').attr('width'));

    var id=0;
    setInterval(function(){
        setTimeout(function(){
            $('.xmzj .xmzj_mzj').stop().animate({'left':-1227},300);
        },id+=5000);
        setTimeout(function(){
            $('.xmzj .xmzj_mzj').stop().animate({'left':0},300);
        },id+=5000);

    },0);


        $('.ping').on('click',function() {

            $('.xmzj .xmzj_mzj').stop().animate({'left':-1227},1000);

        });
        $('.dan').on('click',function() {

            $('.xmzj .xmzj_mzj').stop().animate({'left':0},1000);

        });

        $(".ping").mouseenter(function(){
            $(this).find("a").css("color","red")
        }).mouseleave(function(){
            $(this).find("a").css("color","#afb2bb")
        })

    $('.dan').mouseenter(function(){
        $(this).find("a").css("color","red")
    }).mouseleave(function(){
        $(this).find("a").css("color","#afb2bb")
    })



})

