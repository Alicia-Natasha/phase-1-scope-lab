// Write your solution in this file!
var customerName = "bob";
{
    console.log(`Global Scope type ${customerName}`);
}

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    console.log(`Global Scope type ${customerName}`);
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = newBestCustomer;
    newBestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'bubble bass';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bubble bass';
}