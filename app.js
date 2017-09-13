console.log("Salut toi");


$("#valider").click(function(){
    var line = $("#line").val() ;
    var col = $("#col").val() ;
    var coorLigne = [];
    for(var i = 0; i < line; i++) {    
    }

$(".entree").html(" ");
// $(".test2").html(" ");
//     for(var i = 0; i < line; i++){
//         $(".entree").append("<tr class='test2' id='ligne"+i+"'></tr>");
        
//     }
    

//     for(var i = 0; i < col; i++){
//         $(".test2").append("<td class='test' id='case"+i+" ligne"+i+"'></td>")
//     }
    
for(var i = 0; i < line; i++){
    $("#ici").append("<tr id="+i+"'>") 


        for(var j = 0; j < col; j++) {
            $("#ici").append("<td class='test' id='"+(i)+(j)+"'></td>"+"</tr>")
        }
};





})


    

    


