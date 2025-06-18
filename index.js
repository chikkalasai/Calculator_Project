document.querySelectorAll(".btn").forEach(ele=>{
    ele.addEventListener("click",task);
});


var expp;
let value1;
let value2;
function task(event){
    
    
    if(event.target.value==="1"){
        document.querySelector("#input").value=document.querySelector("#input").value+"1";
    }
    else if(event.target.value ==="2"){
        document.querySelector("#input").value=document.querySelector("#input").value+"2";
    }
    if(event.target.value==="3"){
        document.querySelector("#input").value=document.querySelector("#input").value+"3";
    }
    else if(event.target.value ==="4"){
        document.querySelector("#input").value=document.querySelector("#input").value+"4";
    }
    if(event.target.value==="5"){
        document.querySelector("#input").value=document.querySelector("#input").value+"5";
    }
    else if(event.target.value ==="6"){
        document.querySelector("#input").value=document.querySelector("#input").value+"6";
    }
    if(event.target.value==="7"){
        document.querySelector("#input").value=document.querySelector("#input").value+"7";
    }
    else if(event.target.value ==="8"){
        document.querySelector("#input").value=document.querySelector("#input").value+"8";
    }
    if(event.target.value==="9"){
        document.querySelector("#input").value=document.querySelector("#input").value+"9";
    }
    else if(event.target.value ==="0"){
        document.querySelector("#input").value=document.querySelector("#input").value+"0";
    }
    if(["+", "-", "*", "/", "%"].includes(event.target.value)){
        let inputField = document.querySelector("#input");
        let showField = document.querySelector("#show");
        let expressionField = document.querySelector("#expression");

        value1=parseInt(inputField.value);
        expp=event.target.value;
        if(!isNaN(value1) && value1>0){
            showField.innerHTML=value1;
            expressionField.innerHTML=expp;
            inputField.value="";
            console.log(expp)
        }
       
    }
    else if(event.target.value==="="){

        let s=value1.toString();
        if(s.length>0 && expp.length>0){
            value2=document.querySelector("#input").value;

        }
        console.log(value2)
        let result;
        switch (expp) {
            case "+": result = value1 + parseInt(value2); break;
            case "-": result = value1 - parseInt(value2); break;
            case "*": result = value1 * parseInt(value2); break;
            case "/": result = value1 / parseInt(value2); break;
            case "%": result = value1 % parseInt(value2); break;

        }
        document.querySelector("#input").value=result;
        value1=result;
    }
    if(["√x","¹⁄ₓ","x²"].includes(event.target.value)){
        let number=document.querySelector("#input").value;
        let output;
        switch (event.target.value){
            case "√x" : output = Math.sqrt(parseInt(number.trim()));break;
            case "¹⁄ₓ"  : output = 1/(parseInt(number.trim()));break;
            case "x²" : output = parseInt(number.trim())**2;break;
        }
        document.querySelector("#input").value=output;   
    }
    else if(["C","DEL"].includes(event.target.value)){
        document.querySelector("#input").value="";
        document.querySelector("#show").innerHTML="&nbsp;";
        document.querySelector("#expression").innerHTML="&nbsp;";
    }
}

