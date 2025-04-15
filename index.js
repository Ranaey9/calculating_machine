// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";/*Bu fonksiyon "C" tuşuna basıldığında ekranı temizler.*/


}

function calculate(){
    try{
        display.value = eval(display.value);/*eval():matematiksel ifadeyi hesaplar*/
    }
    catch(error){
        display.value = "Error";
    }
}