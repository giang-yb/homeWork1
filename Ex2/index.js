function checkPrimee(n)
{
    var flag = true;
 
    if (n < 2){
        flag = false;
    }
    else{
        for (var i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }

    if (flag == true){
        return true;
    }
    else{
        return false;
    }
}

function check(){
    let myArr = [];
    // import { checkPrimee } from "./checkPrime.js";
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;

    console.log(a+" "+b);
    if(a>b){
        alert("Không hợp lệ!");
    }
    else{
        for(let i=a; i<=b; i++){
            if(checkPrimee(i)==true){
                myArr.push(i);
            }
        }
        document.getElementById('result').innerHTML = myArr.join(" ");
    }
}

document.getElementById("run").addEventListener("click", check);