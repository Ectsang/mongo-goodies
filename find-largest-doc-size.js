// Find largest document size (does a full table scan, e.g. db.calls)
var max = 0;
db.calls.find().forEach(function(obj) {
    var curr = Object.bsonsize(obj);
    if(max < curr) {
        max = curr;
    }
})
print(max);
