
// Note 1: For memory efficient solutions use hashTable (javascript objects) or Bitwise XOR (^) operator


var singleNumber = function(nums) {
    let j =0;
    for(let i = 0; i< nums.length; i++){
        if(nums[j] === nums[i+1]){
            nums.splice(j,1);
            nums.splice(i,1);
            i = -1;
            j = 0;
        }
        if(nums.length === 1 || i === nums.length-1){
            return nums[0];
        }
    }
};
