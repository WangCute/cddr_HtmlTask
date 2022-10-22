function shiqi(x){
    x.style.display="block";
    document.getElementById("wenzi").innerHTML=document.getElementById("shuru").value;
}
function guanbi(x){
    x.style.display="none";
}
function jianpan(x){
    if(event.keyCode==13){
        x.style.display="block";
        document.getElementById("wenzi").innerHTML=document.getElementById("shuru").value;
    }
}