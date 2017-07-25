$(function(){
    $('#clickme').click(function(){
        
      /*  $.getJSON('data19.json', function(data){
            var items = [];
            
            $.each(data, function(key, val){
                items.push('<li id="' +key +'">'+ val+ '</li>');
            });
            
            $('<ul/>', {
                'class' :'interest-list',
                html: items.join('')
            }).appendTo('body');
        });*/
        
        var api = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|" 
        + "extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
    var cb = "&callback=JSON_CALLBACK";
    var page = "https://en.wikipedia.org/?curid=";

    var jsonAPI = api + $('input')[0].value+ cb;
        console.log(jsonAPI);
        $.ajax({
            url: jsonAPI,// url: 'data19.json',
            dataType: 'jsonp',
            success: function(data){
                if(data.query != undefined){
                    $.each(data.query.pages, function(key, val){
                       console.log(val.extract);

                   });
                }
               

               /*
               var items = [];
               $.each(data.query.pages, function(key, val){
                    items.push('<li id="' +key +'">'+ val+ '</li>');
                });

                $('<ul/>', {
                    'class' : 'interest-list',
                    html: items.join('')
                }).appendTo('body');*/
            },
            statusCode: {
                404:function(){
                    alert('There was a problem with the server. Try again later');
                }
            }
        });
    })
});