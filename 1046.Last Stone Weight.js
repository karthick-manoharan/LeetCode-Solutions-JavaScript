

var lastStoneWeight = function(stones) {
    stones.sort((a,b) => b-a);
    let i = 0;
    while(stones.length){
        if(stones.length === 1) return stones[0];
        let smashValue = Math.abs(stones[i+1] - stones[i]);
        smashValue ? stones.splice(i, 2, smashValue): stones.splice(i, 2);
        stones.sort((a,b) => b-a);
        i = 0;
    }
    return 0;
};
