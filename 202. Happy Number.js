
//

/*  Explanation:
*
* The reason the solution works is, when the numbers are squared and added, the sum value tends to repeat the
* value at some point unless the sum equals to one
* */



var isHappy = function (n) {
    let i = 0;
    let squares = [];
    while (++i) {
        if ((n = n.toString().split("").reduce((acc, val) => acc + Math.pow(Number(val), 2), 0)) === 1) return true;
        if (squares.indexOf(n) !== -1) {
            return false;
        } else {
            squares.push(n);
        }
    }
};
