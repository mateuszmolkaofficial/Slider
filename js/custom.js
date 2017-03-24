'use strict';
$(function(){
    
    var slider = $('#slider');
    //console.log(slider);
    var slideshow=$('.slide-show');
    //console.log(slideshow);
    var slideCount=slideshow.children().length;
    //console.log(slideCount);
    var slideWidth=100/slideCount+"%";
    var slideIndex=0;
    
    $('.slide-show').css("width", 100*slideCount+"%");
    $('.slide-show').find('.single-slide').each(function(i){
        $(this).css( { width: slideWidth } );
        $(this).css( { marginLeft :parseInt(slideWidth)*i+"%"} );
    });
    
    var currentSlide=0;
    
    function slide(newSlideIndex){
        currentSlide+=newSlideIndex;
        if(currentSlide==0 || currentSlide<0){
            currentSlide=0;
            console.log(currentSlide);
        }else if(currentSlide==slideshow.children().length-1||currentSlide>slideshow.children().length-1){
            currentSlide=slideshow.children().length-1;
            console.log(currentSlide);
        }else{
            console.log(currentSlide);
        }
        
        var slideCaption= $('.single-slide:nth-child('+(currentSlide+1)+')>p');
        slideCaption.hide();
        
        var marginLeft= currentSlide*-100+"%";
        $('.slide-show').animate({'margin-left': marginLeft},1000, function(){
          slideCaption.fadeIn(500);
        })   
    }
    
    $( ".prev-slide" ).click(function(event){
        event.preventDefault();
        slide(-1);
    });
    $( ".next-slide" ).click(function(event){
        event.preventDefault();
        slide(1);
    });
    
    
})

