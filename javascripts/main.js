console.log("main js loaded.");

var checking = 0;
var savings = 0;



var deposit = function(accountName, amountDeposited) {
	if (accountName == "checking") {
		checking = checking + amountDeposited;
		return checking;
	}
	else {
		savings = savings + amountDeposited;
		return savings;
	}
};

var withdraw = function(accountName, amountWithdrawn) {
	if (accountName === 'checking') {
		if (amountWithdrawn > checking) {
			return checking;
		}
		else {
			if (amountWithdrawn > savings) {
				return alertUser(amountWithdrawn, savings)
			}
			savings = savings - amountWithdrawn;
			return savings
		}
	}
 }

/*withdraw: which account, current balance, amount deposited
-> new balance

alertUser: message
-> 'NSF'

isEmpty: which account
-> true or false*/

//CACHE DOM REFERENCES
var checkingBalanceEl = document.getElementById('checking-balance');
var checkingInputEl = document.getElementById('checking-input');
var checkingDespositButtonEl = document.getElementById('checking-deposit');

//ADD EVENT LISTENERS



var checkingDepositClick = function() {
	console.log('clicked!')

	// get amount from the dom
	var amount = parseInt(checkingInputEl.value);
	//deposit  amount to the checking balance
	deposit("checking", amount);
	//remove amount from the input
	checkingInputEl.value = "";

	//update the balance on the screen
	render();
}

checkingDespositButtonEl.addEventListener('click', checkingDepositClick);


var render = function() {
	checkingInputEl.value = null;
	checkingBalanceEl.innerHTML = "$" + checking;
}























