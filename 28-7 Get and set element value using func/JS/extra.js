/*                          28-7 (advanced) get and set element value using a function */

/* 
** Deposit File:

Step-1: Add event listener to the deposit button

Step-2: Get deposit amount from the deposit input field
    2-1: Convert string deposit amount

Step-3: Clear the deposit input field after getting the value

Step-4: Get the previous deposit total

Step-5: Calculate new deposit total and set the value to the deposit total

Step-6: Get current balance total

Step-7: Calculate the new balance and set it to the balance total element
*/

//Step-1
document.getElementById('btn-deposit').addEventListener('click', function(){
    //console.log('Deposit button clicked');

    //Step-2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    //console.log(newDepositAmountString);
    const newDepositAmount = parseFloat(newDepositAmountString);
    //console.log(newDepositAmount);

    //Step-3
    depositField.value = '';

    //Step-4
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //Step-5
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    //Step-6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

    //Step-7
    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})

/* --------------------------------------------------------------------------------------- */

/* 
** Withdraw File:

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