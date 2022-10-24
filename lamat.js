var j1=localStorage.getItem("user1");
var j2=localStorage.getItem("user2");
var p1=0;
var p2=0;
document.getElementById("jugador1").innerHTML=j1+":"+p1;
document.getElementById("jugador2").innerHTML=j2+":"+p2;
document.getElementById("pregunta").innerHTML="turno de preguntar:"+j2;
//hola
document.getElementById("responde").innerHTML="turno de responder:"+j1;
function porfin(){

}
function a(){
    var q=document.getElementById("n1").value;
    var w=document.getElementById("n2").value;
    var e=parseInt(q)*parseInt(w);
    var r= "<br>respuesta:<input type='text' id='res'>";
    var t="<h4>"+q+"x"+w+"</h4>";
    var y="<br><br><button class='btn btn-info' onclick='bousin()'>o</button>";
    var u=t+r+y;
    document.getElementById("output").innerHTML=u;
    //hola2
    
    }
    
    function bousin() {
     var pre="j2";
    var res="j1";
    

    var q=document.getElementById("n1").value;
    var w=document.getElementById("n2").value;
    var e=parseInt(q)*parseInt(w);


        console.log("funciona")
        var ka=document.getElementById("res").value;


 



   



    
    if (ka==e) {
    if(res=="j1") {
    p1=p1+1;
    document.getElementById("jugador1").innerHTML=j1+":"+p1;
    }
    else{
        p2=p2+1;
    document.getElementById("jugador2").innerHTML=j2+":"+p2;
    }
    }
    //espaciador
    if (pre=="j1") {
    pre="j2";
    document.getElementById("pregunta").innerHTML="turno de preguntar:"+j2;
    }
    else{
        pre="j1";
    document.getElementById("pregunta").innerHTML="turno de preguntar:"+j1;
    }
    //osito
    if (res=="j1") {
        res="j2";
        document.getElementById("responde").innerHTML="turno de responder:"+j2;
        }
        else{
            res="j1";
        document.getElementById("responde").innerHTML="turno de responder:"+j1;
        }
    }    
