//Credit:
//@author: http://www.dofactory.com/javascript/design-patterns

var User = function(name) {
    this.name = name;
 
    this.say = function() {
        log.add("User: " + this.name);
    };
}
 
var DecoratedUser = function(user, street, city) {
    this.user = user;
    this.name = user.name;  // ensures interface stays the same
    this.street = street;
    this.city = city;
 
    this.say = function() {
        log.add("Decorated User: " + this.name + ", " +
                   this.street + ", " + this.city);
    };
}
 
// logging helper
 
var log = (function() {
    var log = "";
 
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { console.log(log); log = ""; }
    }
})();
 
function run() {
 
    var user = new User("Kelly");
    user.say();
 
    var decorated = new DecoratedUser(user, "Broadway", "New York");
    decorated.say();
 
    log.show();
}

run();