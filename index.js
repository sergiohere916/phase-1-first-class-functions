function receivesAFunction(cb) {
    cb();
}
function returnThis() {

}

function returnsANamedFunction() {
    let result = function add() {
        return 1+1;
    }
    return result; 
}

function returnsAnAnonymousFunction() {
    return function () {
        return 10 + 10;
    }
}


