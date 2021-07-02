class Bank {
        accounts = {
            1000: { account_number: 1000, name: "ajay", balance: 1000, username: 1000, password: "userone" },
            1001: { account_number: 1001, name: "vjay", balance: 2000, username: 1001, password: "usertwo" },
            1002: { account_number: 1002, name: "ram", balance: 3000, username: 1002, password: "userthree" },
            1003: { account_number: 1003, name: "ravi", balance: 4000, username: 1003, password: "userfour" }
        }
    // getAccountDetails() {
    //     let accounts = {
    //         1000: { account_number: 1000, name: "ajay", balance: 1000, username: 1000, password: "userone" },
    //         1001: { account_number: 1001, name: "vjay", balance: 2000, username: 1001, password: "usertwo" },
    //         1002: { account_number: 1002, name: "ram", balance: 3000, username: 1002, password: "userthree" },
    //         1003: { account_number: 1003, name: "ravi", balance: 4000, username: 1003, password: "userfour" }
    //     }
    //     return accounts
    // }
    authenticate(username, pwd) {
        let accntdetails = this.accounts();
        if (username in accntdetails) {
            if (pwd==accntdetails[username]["password"]) {
                return 1;
            } else {
                return -1;
            }
        } else {
            return 0;
        }
    }

    // createAcnt(accntno,name,balance){
    //     this.accntno=accntno;
    //     this.name=name;
    //     this.balance=balance;
    // }
    deposit(amt) {
        this.balance += amt;
        console.log(`your account ${this.accntno},has been credited with amount ${amt} your available balance is ${this.balance}`);
    }
    withdrawel(amt) {
        if (this.balance < amt) {
            console.log("transaction failed");
        }
        else {
            this.balance -= amt;
            console.log(`your account ${this.accntno},has been debited with amount ${amt} your available balance is ${this.balance}`);
        }
    }
    balanceEnq() {
        console.log(`your available balance is ${this.balance}`);
    }
}
var obj = new Bank();
// obj.createAcnt(1000, "ajay", 25000)
// obj.deposit(2000);
// obj.balanceEnq();
var user=obj.authenticate(1000,"test");
var res=user==0?"invalid":user==-1?"invalid password":"success"
