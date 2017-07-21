$(function(){
    //By id
   // $('#first').addClass('highlight');
    
    //By tag/element
   // $('p').addClass('highlight');
    
     //By class
   // $('.chosen').addClass('highlight');
    
     //Combination
    //$('#first, .chosen').addClass('highlight');
    
    //Contains
   // $('li:contains("Three")').addClass('highlight'); 
    
    //attribute
    //$('p[name="mySecondPara"]').addClass('highlight');
    //$('p[name !="mySecondPara"]').addClass('highlight');
    
    //next, previous
   // $('li:contains("Three")').prev().addClass('highlight'); 
    
    //parent, siblings
    // $('li:contains("Three")').siblings().addClass('highlight'); 
    
  //  $('li:nth-child(1)').addClass('highlight');
    
    //Empty p tag
    //$('p:empty').text('Hey you got some text');
    
    //all h tags
    $(':header').addClass('highlight');
});







