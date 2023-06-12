$(document).ready(function(){
    var wdj;
    var pageValue = false;
    var num = 1;
    var slidenum  = 0
    var oldVal;
    fadein(1);
    function coverslidedown(){
        $(".mainCover").stop().animate({top : "0",height : "100%"},{duration : 500, complete:function(){
            num = num -1;
            pageValue = false; 
        }});
    }
    function headerslidedown(){
        $("header").stop().animate({top : "0"},{duration : 500, complete:function(){
            num = num -1;
            pageValue = false; 
         }});
    }
    function coverslideup(){
        $(".mainCover").stop().animate({top : "-100%",height : "0%"},{duration : 500, complete:function(){
            num = num +1;
            pageValue = false; 
        }});
    }
    function headerslideup(){
        $("header").stop().animate({top : "-58%"},{duration : 500, complete:function(){
            num = num +1;
            pageValue = false; 
        }});
    }
    function rightslide(slide , slidenum){
        $(".maincontent_wrap").stop().animate({left: slide +"%"},{duration : 500});
        var snum = slidenum +1;
        $(".btn"+snum).click();
    }
    function leftslide(slide , slidenum){
        $(".maincontent_wrap").stop().animate({left: slide +"%"},{duration : 500});
        var snum = slidenum +1;
        $(".btn"+snum).click();
        }
    function fadein(num){
        $(".sub_con"+num).fadeIn(500);
        cssflex(num);
        setInnerHTML(num);
        // $(".sun_con"+num+1).fadeIn(500);
    }
    function cssflex(num){
        $(".sub_con"+num).css({display:"flex"});
    }
    function allout(){
        $(".sub_con").fadeOut(200);
    }
    function setInnerHTML(num) {
        var title;

        if(num == 1){
            title = "Cafe & Menu"
        }else if(num == 2){
            title = "Story"
        }else if (num == 3){
            title = "Franchise"
        }else if(num == 4){
            title = "News"
        }
        const element = document.getElementById('cafeMenu_title');
        element.innerHTML 
          = '<h1>'+title+'<h1>';
      } 
    // function cssnone(num){
    //     $(".sub_con"+num).css({display:"none"});
    // }
    $(".contact_input>input").on("change keyup paste", function() {
        var currentVal = $(this).val();
        if(currentVal == oldVal) {
            return;
        }else{
            $(".contact_textarea").slideDown(200)
            $(".contact_input").css({
                "justify-content"
                : "space-around" 
            });
            oldVal = currentVal;
        }
    });
    var numVal = 0;
    $(".btn").click(function(e){
        $(".oder_btn").css({display:"none"})
       var num =  $(this).attr("value");
       
       var line ;
       var width;
      
       if(numVal < num){
        width = 25 * (num - numVal) ;
        line = 25 * (num -1);
        $(".line").stop().animate({width : width+"%"},{duration:300, complete:function(){
            $(".line").stop().animate({width:"25%",left: line+"%"},{duration:300, complete:function(){
                numVal = num ;
            }});
        }});
    
       }else{
        width = 25 * ((numVal+1) - num) ;
        line = 25 * (num -1);
        $(".line").stop().animate({width : "0%"},{duration:300, complete:function(){
            $(".line").stop().animate({width: width+"%",left: line+"%"},{duration:300, complete:function(){
                $(".line").stop().animate({width : "25%"});
                numVal = num ;
            }});
        }});
       }
        
       allout();
       fadein(num);
       if(slidenum <= 3){
           num = num - 1;
           slidenum = num;
        var slide = num * -100;
       leftslide(slide);
       if(wdj == true){
        window.scrollTo(150, 0) 
       }
    }
    });
    $(".slide_right_btn").click(function(){
        if(slidenum < 3){
            slidenum = slidenum + 1;
            var slide = slidenum * -100;
           leftslide(slide, slidenum);
        }
    });
    $(".slide_left_btn").click(function(){
        if(slidenum >= 1){
            slidenum = slidenum -1;
            var slide = slidenum * -100;
           rightslide(slide,slidenum);
        }
    });
    $("body").bind("mousewheel",function(c){
            var scrollValue = $(document).scrollTop(); 
            var x = c.originalEvent.wheelDeltaX;
            var y = c.originalEvent.wheelDeltaY; 
            if(scrollValue >= 150){
                wdj = true;
                if(slidenum == 0){
                    if(num == 3){
                        $(".oder_btn").css({display:"flex"})              
                    }
                     }
                
            }else{
                wdj = false;
                $(".oder_btn").css({display:"none"})
            }

            if(num == 1){
                if(y < -10 && pageValue == false){
                    pageValue = true;
                    $(".solgan").stop().animate({height : "10%"},{duration:500})
                   headerslideup();
                }
            }
            if(num == 2){
                if(y < -10 && pageValue == false){
                    pageValue = true;
                    $("body,html").stop().css({"overflow":"unset"});
                    coverslideup();
                }
            }
            if(num == 3){
                if(y > 10 && scrollValue == 0 && pageValue == false){
                    pageValue = true; 
                    $("body,html").stop().css({"overflow":"hidden"});
                    coverslidedown();
                }
            }
            if(num == 2){
                if(y > 10 && pageValue == false){
                    pageValue = true;
                    $(".solgan").stop().animate({height : "100%"},{duration:500})
                    headerslidedown();
                }
            }
        });
        
});




// $(document).ready(function(){
//     var val = false;
//     var num = 1;
//     var scrollValue = $(document).scrollTop(); 
//         $("body").on("mousewheel",function(c){
//             var x = c.originalEvent.wheelDeltaX;
//             var y = c.originalEvent.wheelDeltaY;  
           
//                 if(y < -10 && val == false){
//                     val = true; 
//                  if(num == 1){
//                     $("header").stop().animate({top : "-30%"},{duration : 300, complete:function(){
//                         val = false; 
//                         num = num +1;
//                     }});
//                  }else if(num == 2){
//                     $(".mainCover").stop().slideUp(function(){
//                         val = false; 
//                         num = num +1;
//                         $("body,html").stop().css({"overflow":"unset"})
//                     });
//                  }  
//                 }
//     });
//     $(window).scroll(function(){
//         if(num == 3 && scrollValue <=5 && val == false){
//             console.log("asdasd")
//             val = true; 
//             $("body,html").stop().css({"overflow":"hidden"})
//             $(".mainCover").stop().slideDown(function(){
//                                val = false; 
//                                num = num - 1;
                               
//                            });
//         }
//     });
// });