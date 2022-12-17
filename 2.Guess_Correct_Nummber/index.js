let random=Math.floor(Math.random() * 100 + 1);
let chances=0;
    let hint = document.getElementById("hint");
    let result = document.getElementById("result");
    result.style.display = "none";
function checkNumber(){
chances++;
loadHint();
}

function loadHint(){
    
    let number = document.getElementById("number").value;

    if(number == random){
        hint.style.display = "none";
        result.style.display = "";
        result.style.display="visible"
        getResult();
    }
    else if (number > 100 || number < 1) {
      hint.innerHTML = "Hint: Enter Number Between 1 to 100 Only.";
    } else if (random - number <= 5 && random - number >= -5) {
      hint.innerHTML = "Hint: You Are Very Close  To The Number.";
    } else if (random < number) {
      hint.innerHTML = "Hint: Decrease The Value...!!!";
    } else {
      hint.innerHTML = "Hint: Increase The Value...!!!";
    }
}

function getResult(){

    result.innerHTML+=101-chances;
}