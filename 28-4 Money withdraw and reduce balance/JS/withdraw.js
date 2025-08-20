/*                          28-4 Money withdraw and reduce balance for withdraw*/

//console.log('Withdraw JS Connected');

/* 
Step-1: Add event handler with the withdraw button

Step-2: Get the withdraw amount

Step-3: Clear the withdraw input field

Step-4: Get previous withdraw total

Step-5: Calculate total withdraw amount and set it to the withdraw total element

Step-6: Get previous balance

Step-7: Calculate new balance and set it to the balance total element
*/

//Step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //console.log('Withdraw Button Clicked');

    //Step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    //console.log(newWithdrawAmount);

    //Step-3
    withdrawField.value = '';

    //Step-4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //Step-5
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    //Step-6
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //Step-7
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;

})