class Bank {
    getAccountDetails() {
        let accounts = {
            1001: { account_number: 1000, name: "ajay", balance: 1000, username: 1000, password: "userone" },
            1002: { account_number: 1001, name: "vjay", balance: 2000, username: 1001, password: "usertwo" },
            1003: { account_number: 1002, name: "ram", balance: 3000, username: 1002, password: "userthree" },
            1004: { account_number: 1003, name: "ravi", balance: 4000, username: 1003, password: "userfour" }
        }
        return accounts;
    }
    // createAccount(account_number, name, balance) {
    //     this.account_number = account_number;
    //     this.balance = balance;
    //     this.name = name;
    // }
    authenticate(username, pwd) {
        let account_details = this.getAccountDetails();
        //console.log(account_details);
        if (username in account_details) {
            if (pwd == account_details[username]["password"]) {
                return 1;
                //success
            } else {
                return -1;
                //wrong password
            }
        }
        else {
            return 0;
            //invalid user
        }
    }
    deposit(amt) {
        this.balance += amt;
        console.log(`Your account ${this.account_number} has been credited with amount ${amt}.Your available balance is ${this.balance}`);
    }
    withdrawel(amt) {
        if (this.balance < amt) {
            console.log("transaction failed insufficient balance.");
        }
        else {
            this.balance -= amt;
            console.log(`Your account ${this.account_number} has been debited with amount ${amt}.Your available balance is ${this.balance}`);
        }
    }
    balanceEnq() {
        console.log(`Your available balance is ${this.balance}`);
    }
}
obj1 = new Bank();
//obj1.createAccount(1000,"anisha",3000);
//obj1.deposit(50);
var user = obj1.authenticate(1001, "userone");
var res = user == 0 ? "invalid" : user == 1 ? "success" : "invalid password";
console.log(res);
