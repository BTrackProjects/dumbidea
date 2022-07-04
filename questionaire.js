//question one
$(function(){
    $("#square-toggle").click(function(){
      $("#square-toggle").slideUp(function(){
        $(".right-answer").slideDown(function(){                          
        });
      });
    });
  });
  
  $(function(){
    $("#square").click(function(){
      $("#check").slideDown(function(){
        $("#nq").show(function(){
            $("#square-toggle").hide(function(){
            });                        
        });
      });            
    });
  });