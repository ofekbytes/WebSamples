function Account(fName, lName) {
    this.id = Account.generateId();
    this.fName = fName;
    this.lName = lName;
}


Account.prototype.dump = function() {
    console.log(this.id, " : " + this.fname + "  " + this.lName);
}

Account.nextid = 1000;

Account.generateId = function(){
    return Account.nextid++;
}