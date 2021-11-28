let displayValue=(num)=>result.value+=num
let clearBox=()=>result.value=""
let removeElement=()=>result.value=result.value.slice(0,-1)
let evaluateExpression=()=>result.value=eval(result.value)
document.querySelectorAll(".row").forEach(element =>element.style.color="white")
   

//function revaluateExpression(){
   // let txt_box=document.querySellector("#result")
   // let out=eval(txt_box.value)
    
//}