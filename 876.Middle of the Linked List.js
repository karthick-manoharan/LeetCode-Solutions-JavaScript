
var middleNode = function(head) {
    let low = head;
    let high = head;
    while(high && high.next){
        low = low.next;
        high = high.next.next;
    }
    return low;
};
