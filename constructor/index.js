//constructor funtion objection method

function Account(Balance) {

    this.balance = Balance;

    this.showBalance = function () {
        console.log(this.balance);
    }

    this.deposit = function (amt) {
        this.balance = this.balance + amt
    }

    this.withdraw = function (amt) {
        this.balance = this.balance - amt
    }


}

let user = new Account(1000)
user.showBalance()


