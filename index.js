// code here
//take a callback function as an argument, call the callback function
//it doesn't matter what this function returns, so long as it calls the callback function
function receivesAFunction(callback){
    callback();
    return "did it!";
}

//Take no arguments
//return a named function
function returnsANamedFunction(){
    function namedfunction (){
        console.log("returns a function");
    }
    return namedfunction;
}

//take no arguments
// return annonymous function
function returnsAnAnonymousFunction(){
    
    return function (){
        console.log("return anonymous function");
    }
}