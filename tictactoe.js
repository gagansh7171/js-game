$(document).ready(function(){
    $("#close").on({
      mouseover: function(){
        $(this).css("color", "black");
      },  
       
      mouseout: function(){
        $(this).css("color", "rgb(150,150,150)");
      },  
      click: function(){
        $("#blur").css("display", "none");
        $("#choice").css("display", "none");
      }  
    });

    $("#x").on({
        mouseover: function(){
        $("#x").css("text-shadow","7px 7px yellow");
    },
        mouseout: function(){
            $("#x").css("text-shadow","0px 0px yellow");
        }
        
    });

    $("#o").on({
        mouseover: function(){
        $("#o").css("text-shadow","7px 7px yellow");
    },
        mouseout: function(){
            $("#o").css("text-shadow","0px 0px yellow");
        }
        
    });

});


player=""
function choicex(){
    player="X" ;
    alert(player);
}
function choiceo(){
    player="O";
    alert(player);
}

toss= Math.random()%2;

function computer(){

}

function man(){

}

var over = 1 ;
var manwin = 0; //man lose
while(over){

}