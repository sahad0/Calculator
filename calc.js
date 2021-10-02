window.onload = empt;                                                                           /*page*/
var arr = [];


var str = "";
var str1 = "";
str2 = "";

document.getElementById('clear').addEventListener('click',clear);
document.getElementById('delete').addEventListener('click',del);


setInterval(function(){
    document.getElementById('h1').innerHTML=str;
    document.getElementById('h4').innerHTML=str1;
    
},100);
    

function empt(){                                                            /*onload function*/
    str = "0";
    var arr = [];
    str2 = "";
    
}
function old(){
    for(var x = 0;x<arr.length;x++){
        str2 = str2 + arr[x]+" ";                                           /*Tracking stored ones*/
    }
    console.log(str2);
}

function clear(){
    document.getElementById('h4').innerHTML="";                             /*AC button*/
    document.getElementById('h1').innerHTML="";
    str = "0";
    str1 ="";
    arr = [];
}

function del(){
    if(str !== "0"){
        str = str.slice(0,str.length-1);                                    /*Delete button*/
    }
    if(str==""){
        str = "0";
    }
    
}




function reply_click(clicked_id)
{
    
    var temp = clicked_id;
    
    /*alert(typeof(temp));*/
    if(temp ==="="){
        var sum = 0;
        if(str!==0){                                                    /*equal to button*/
            arr.push(str);
        }
        var leng = arr.length;
        if(arr[0].endsWith(".")){
            dot(arr[0]);
        }
        if(arr[0].includes(".")){
            var sum = parseFloat(arr[0]);
        }
        else{
            var sum = parseInt(arr[0]);
        }
        
        for(var i=1;i<arr.length;i=i+2){

            if(arr[i]==="+"){
                    if(arr[i+1].endsWith(".")){
                        dot(arr[i+1]);
                    }
                    if(arr[i+1].includes(".")){
                        var y = parseFloat(arr[i+1]);
                    }
                    else{
                        var y = parseInt(arr[i+1]);
                    }
                    
                
                sum = sum+y;
            }
            else if(arr[i]==="-"){
                
                    if(arr[i+1].endsWith(".")){
                        dot(arr[i+1]);
                    }                                                                   /*Basic Opereratons*/
                    if(arr[i+1].includes(".")){
                        var y = parseFloat(arr[i+1]);
                    }
                    else{
                        var y = parseInt(arr[i+1]);
                    }
                
                sum = sum-y;
            }
            else if(arr[i]==="*"){
                
                if(arr[i+1].endsWith(".")){
                        dot(arr[i+1]);
                    }
                    if(arr[i+1].includes(".")){
                        var y = parseFloat(arr[i+1]);
                    }
                    else{
                        var y = parseInt(arr[i+1]);
                    }
                
                sum = sum*y;
            }
            else if(arr[i]==="/"){
                
                if(arr[i+1].endsWith(".")){
                        dot(arr[i+1]);
                    }
                    if(arr[i+1].includes(".")){
                        var y = parseFloat(arr[i+1]);
                    }
                    else{
                        var y = parseInt(arr[i+1]);
                    }
                
                sum = sum/y;
            }
        }
        console.log(sum);
        arr = [];
        str = sum;
        
        
    }

    else if(temp === "+" || temp === "-" || temp === "*" ||temp === "/"){
        
        str1 = temp;
        if(str!==0 && arr.length === 0){
            arr.push(str);
            arr.push(temp);
        }
        else if(str==="0" && arr.length !==0){
            var a = arr.length;
            arr.splice(a-1,1);
            arr.push(temp);
        }
        
        else if(str!=="0" && arr.length !==0){                                          /*For operation buttons*/
            arr.push(str);
            arr.push(temp);
        }
        str="0";
    }

    else if(temp === "."){
        if(str.includes(".")===false){                                                  /*for . button*/
                str = str+".";
        }
    }
    else if(str==="0"){
        
        
        if(isNaN(temp)===false){                                                       /*is string is empty*/
            str = "";
            str = str+temp;
        }
        
        
    }


    else if(str.length>=1 &&str!="0"&& str.length<30){                              /*for number buttons*/
        
        if(isNaN(temp)===false ){
            str = str + temp;
        }
    
    }

}
