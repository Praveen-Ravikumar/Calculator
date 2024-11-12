var display =document.getElementById('display');

document.addEventListener('keypress',(event) => {
    var key =event.key
    console.log(key)
    if(isNumeric(key) || isSymbol(key)){
        display.value += key
    }

    else if( key == '=' || key == 'Enter'){
        try{
            display.value = eval(display.value);
        }
    
        catch(error){
            display.value = "Error"
        }
    }

    else if( key === 'c'|| key === 'C'){
        display.value = '';
    }

    else if( key === 'd' || key === 'D'){
        display.value = display.value.toString().slice(0,-1);
    }
    
});


function isNumeric(key) {
    return !isNaN(key) && !isNaN(parseFloat(key));
}

function isSymbol(key) {
    const symbols = ['*', '(', ')', '-','+',  '.', '/', ];
    return symbols.includes(key);
}

function appendDisplay(input){
    display.value +=input
    // console.log(input)
}

function clearDisplay(){
    display.value = '';
}

function deleteDisplay(){
    display.value = display.value.toString().slice(0,-1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }

    catch(error){
        display.value = "Error"
    }
    

}