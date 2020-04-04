// Your runtime beats 94.82 % of javascript submissions.
// Your memory usage beats 36.17 % of javascript submissions.

var moveZeroes = function(nums) {
    let arrLength = nums.length;
    for(let i=0; i< arrLength; i++){
        if(!nums[i]){
            nums.splice(i,1);
            nums.push(0);
            i-= 1;
            arrLength--;
        }
    }
};
