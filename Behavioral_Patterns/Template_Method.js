//Credit:
//@author: http://www.dofactory.com/javascript/design-patterns

var datastore = {
    process: function() {
        this.connect();
        this.select();
        this.disconnect();
        return true;
    }
};
 
function inherit(proto) {
    var F = function() { };
    F.prototype = proto;
    return new F();
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
    var mySql = inherit(datastore);
 
    // implement template steps
 
    mySql.connect = function() {
        log.add("MySQL: connect step");
    };
 
    mySql.select = function() {
        log.add("MySQL: select step");
    };
 
    mySql.disconnect = function() {
        log.add("MySQL: disconnect step");
    };
 
    mySql.process();
 
    log.show();
}
run();