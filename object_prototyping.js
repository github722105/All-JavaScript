// Sample JS program on object prototyping.

function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

User.prototype = {
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

var user = new User("Tsuyoshi", "Nagabuchi");
console.log(user.getFullName());
