function greet(name){
    console.log("Hello, " + name + " how are you doing today?");
}

function makeNegative(num) {
    if (num < 0){
        return num;
    }
    else{
        return -num;
    }
    // Code?
}

var summation = function (num) {

    let result = 0;
    for (var i = 1; i <= num; i++) {
        result += i;
    }

    return result;
}
function isTriangle(a,b,c)
{
    if (a <= 0 || b <= 0 || c <= 0){
        return false;}

    else if (a+b > c && a+c > b && c+b > a)
    { return true;}
    else
    {return false;}
}

function getMiddle(s)
{if(s.length % 2 == 0){
    return s.substring((s.length / 2) - 1 , (s.length / 2) + 1 );
}
else {
    return s.substring(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1);
}
}
//Code goes here

function array(arr){
//Good luck
    for (var x = 0; x < arr.length; x++);
    if(arr.length > 3){
        var y = arr.length - 1;
        return arr.substring(1, y).replace(/[,]/g,' ').trim();

    }
    else {return null};
    // str = $.trim(str);


}


function hoopCount (n) {
    if(n >= 10){
        return "Great, now move on to tricks";
    }
    else{
        return "Keep at it until you get it";
    }
    //your code goes here
}


function isDivideBy(number, a, b) {
    // good luck
    if(number % a == 0 && number % b == 0){
        return true;
    }
    else{
        return  false;
    }
}
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if(mpg * fuelLeft >= distanceToPump){
        return true;
    }
    else{return false;}
    // TODO
};

function findDifference(a, b) {
    //loading...
    let a1 = 1;
    for(i = 0; i < a.length; ++i){
        a1 *= a[i];}

    let b1 = 1;
    for(j = 0; j < b.length; ++j){
        b1 *= b[j];
    }
    if(a1 > b1){
        return a1 - b1;
    }
    else{return b1- a1;}
}



function howMuchILoveYou(nbPetals) {
    let arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    let arr2 = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    for(let i = 0; i < arr.length; i++){
        if(arr.length < nbPetals){
            Array.prototype.push.apply(arr, arr2);
        }
        else if(i = nbPetals){return arr[i - 1];}
    }
}
  

