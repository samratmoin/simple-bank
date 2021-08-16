// ==============================Bank Transaction===============================
// Handle Deposit Button Event:
document.getElementById("deposit-btn").addEventListener("click", function () {
  // get the amount deposited
  const depositInput = document.getElementById("deposit-input");
  const depositInputAmount = parseFloat(depositInput.value);

  // update deposit total
  const depositTotal = document.getElementById("deposit-total");
  const previousDepositText = depositTotal.innerText;
  const previousDepositAmount = parseFloat(previousDepositText);
  const newDepositTotal = previousDepositAmount + depositInputAmount;
  depositTotal.innerText = newDepositTotal;

  // update account balance
  const balanceTotal = document.getElementById("balance-total");
  const totalBalanceAmount = parseFloat(balanceTotal.innerText);
  const newBalanceTotal = totalBalanceAmount + depositInputAmount;
  balanceTotal.innerText = newBalanceTotal;

  // clear the deposit input field
  depositInput.value = "";
});

// Handle Withdraw Button Event:
document.getElementById("withdraw-btn").addEventListener("click", function () {
  // get the amount to withdraw
  const withdrawInput = document.getElementById("withdraw-input");
  const withdrawInputAmount = parseFloat(withdrawInput.value);

  // update withdraw total
  const withdrawTotal = document.getElementById("withdraw-total");
  const previousWithdrawText = withdrawTotal.innerText;
  const previousWithdrawAmount = parseFloat(previousWithdrawText);
  const newWithdrawTotal = previousWithdrawAmount + withdrawInputAmount;
  withdrawTotal.innerText = newWithdrawTotal;

  // update account balance
  const balanceTotal = document.getElementById("balance-total");
  const totalBalanceAmount = parseFloat(balanceTotal.innerText);
  const newBalanceTotal = totalBalanceAmount - withdrawInputAmount;
  balanceTotal.innerText = newBalanceTotal;

  // clear the withdraw input field
  withdrawInput.value = "";
});
