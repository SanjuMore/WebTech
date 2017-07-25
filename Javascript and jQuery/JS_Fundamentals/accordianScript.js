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
    
    $('div>p>input[type="checkbox"]').click(function(){
        if($(this).context.checked){
            $('#dynamo').append('<span>'+$(this).context.name +'</span>')
        }else{
            $('#dynamo>span').remove(":contains('"+$(this).context.name+"')");
       }
    });
})