/*                          28-2 (recap) Get User deposit and set deposit total value */
//console.log('Deposit File');

/* 
Step-1: Add event listener to the deposit button

Step-2: Get deposit amount from the deposit input field
    2-1: Convert string deposit amount

Step-3: Clear the deposit input field after getting the value

Step-4: Get the previous deposit total

Step-5: Calculate new deposit total and set the value to the deposit total
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
})