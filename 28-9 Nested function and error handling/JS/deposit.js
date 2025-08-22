/*                             28-9 (advanced) Nested function and error handling */

//DRY - Do not repeat yourself

//console.log('Deposit File');
//console.log(myUtility);

document.getElementById('btn-deposit').addEventListener('click', function(){
    //console.log('Deposit button clicked');
    /*  
    1. Get the element by id
    2. Get the value from the element
    3. Convert string value to a number 
    */
   const newDepositAmount = getInputFieldValueById('deposit-field');
   /* 
   1. Get previous deposit total by id
   */
  const previousDepositTotal = getTextElementValueById('deposit-total');
  //console.log(newDepositAmount);
  //console.log(previousDepositTotal);

  //Calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  //Set deposit total value
  setTexElementValueById('deposit-total', newDepositTotal);

  //Get previous balance by using the function
  const previousBalanceTotal = getTextElementValueById('balance-total');
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTexElementValueById('balance-total', newBalanceTotal);
})