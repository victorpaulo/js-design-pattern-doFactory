//Credit:
//@author: http://www.dofactory.com/javascript/design-patterns

var Iterator = function(items) {
    this.index = 0;
    this.items = items;
}
 
Iterator.prototype = {
    first: function() {
        this.reset();
        return this.next();
    },
    next: function() {
        return this.items[this.index++];
    },
    hasNext: function() {
        return this.index <= this.items.length;
    },
    reset: function() {
        this.index = 0;
    },
    each: function(callback) {
        for (var item = this.first(); this.hasNext(); item = this.next()) {
            callback(item);
        }
    }
}
 
// log helper
 
var log = (function() {
    var log = "";
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { console.log(log); log = ""; }
    }
})();
 
function run() {
    var items = ["one", 2, "circle", true, "Applepie"];
    var iter = new Iterator(items);
 
    // using for loop
 
    for (var item = iter.first(); iter.hasNext(); item = iter.next()) {
        log.add(item);
    }
    log.add("");
 
    // using Iterator's each method
 
    iter.each(function(item) {
        log.add(item);
    });
 
    log.show();
}
run();