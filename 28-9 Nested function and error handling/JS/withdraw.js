/*                         28-9 (advanced) Nested function and error handling */

//console.log('Withdraw File');

/* 
1. Add withdraw button event handler 
2. Get withdraw amount by using 'getInputFieldValueById' function
3. Get previous withdraw amount by using 'getTextElementValueById' function
4. Calculate new withdraw total and set the value
    4-1 Set new withdraw total by using 'setTextElementValueById' function
5. Get previous total by using 'getTextElementValueById' function
6. Calculate new balance total
7. Set balance total by using 'setTexElementValueById' function 
*/

document.getElementById('btn-withdraw').addEventListener('click', function(){
    //console.log('Withdraw button clicked');
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    //console.log(newWithdrawAmount);
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTexElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTexElementValueById('balance-total', newBalanceTotal);
})