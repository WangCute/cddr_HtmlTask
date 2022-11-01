var flag = 0;
function pdsex(x){
    var temp = document.getElementById('pwd1').value.length;
    if(temp < 5){
        x.style.display = "inline";  
    }else{
        x.style.display = "none";
    }
}
function pdyizhi(x){
    var temp1 = document.getElementById('pwd1').value;
    var temp2 = document.getElementById('pwd2').value;
    if(temp1 == temp2){
        x.style.display = "none";
        flag = 1;
    }else{
        x.style.display = "inline";
        flag = 0;
    }
}
function queding(){
    if(flag == 1){
        alert("成功！");
    }else{
        alert("请先完善注册信息！");
    }
    
}
