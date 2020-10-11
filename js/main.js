var display = $('#display');

function isOeration(){
    return 
}

function insert(data){
    var old = display.val();
    if(old == "0"){
        display.val("")
    }
    
    display.val(old + data);
}
function reset(){
    display.val("0")
}
function back(){
    var old = display.val();
    display.val(old.substr(0, old.length-1));
    if (display.val().length == 0){
        display.val("0");
    }
}
function showResult(){
    var result = eval(display.val());
    display.val(result);
}
function root(){
    var resultSqrt = Math.sqrt(display.val());
    display.val(resultSqrt)
}