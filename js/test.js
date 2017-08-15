var input = ["7", "8", "+", "8", "8", "-", "9", "9", "9","-", "4","5"];
var len = input.length;
var acc = "";
var num = [];
var pureNum = [];
for(var i = 0; i < len; i++){
    if((input[i] !== "+") || (input[i] !== "-")){
        num.push(input[i]);
    }
    else{
        for(var j = 0; j <= (i - 1); j++){
            pureNum.push(num[j]);
           
        }
    }
}



// var arr = acc.split();
 console.log(pureNum);
console.log(acc);
console.log(num);