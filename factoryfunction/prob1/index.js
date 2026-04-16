// factory function  object method

function Account(Balance) {
    let obj = {}

    obj.balance = Balance;

    obj.showBalance = function () {
        console.log(obj.balance);
    }

    obj.deposit = function (amt) {
        obj.balance = obj.balance + amt
    }

    obj.withdraw = function (amt) {
        obj.balance = obj.balance - amt
    }

    return obj;
}
const user = Account(1000);
// user.showBalance()

user.deposit(10000)
// user.showBalance()


user.withdraw(2000)
user.showBalance()

