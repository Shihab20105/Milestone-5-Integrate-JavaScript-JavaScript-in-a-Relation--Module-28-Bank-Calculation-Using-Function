/*                              28-6 (advanced) Share one function between two input field */

//console.log('Deposit File');
//console.log(myUtility);

function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);
    return value;
}

document.getElementById('btn-deposit').addEventListener('click', function(){
    //console.log('Deposit button clicked');
    /*  
    1. Get the element by id
    2. Get the value from the element
    3. Convert string value to a number 
    */
   const newDepositAmount = getInputFieldValueById('deposit-field');
})