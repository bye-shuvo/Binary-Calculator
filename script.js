const display = document.getElementById("res");
const btns = Array.from(document.getElementById("btns").children);

btns.forEach((btn)=>{
        btn.addEventListener("click" , (e) => {
        display.innerHTML += e.target.innerHTML.toString();
})
})

btns[2].addEventListener("click" , ()=>{
    display.innerHTML = "";
})

btns[3].addEventListener("click" , ()=>{
    let subStrings = display.innerHTML.split(/[\+\-\*\/]/);
    let matchOperator = display.innerHTML.match(/[\+\-\*\/]/);
    let result = eval(parseInt(subStrings[0] , 2)+matchOperator[0]+parseInt(subStrings[1] , 2)).toString(2);
    display.innerHTML = result;
})
