$(function(){
    $('.accordion').click(function(){
        if($(this).next()[0]== $(".showPanel")[0]){
            $(this).toggleClass('active');
            $(this).next().toggleClass('showPanel');
        }
        else{
            $(this).siblings().removeClass('showPanel');
            $(this).siblings().removeClass('active');
            $(this).next().addClass('showPanel');
            $(this).addClass('active');
       }
    });
})