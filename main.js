function usuarios(){
    var u=document.getElementById("UNO").value;
    var d=document.getElementById("DOS").value;
localStorage.setItem("user1",u);
localStorage.setItem("user2",d);
window.location="tamal.html"
};