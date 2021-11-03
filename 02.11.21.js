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
//Code goes here!

