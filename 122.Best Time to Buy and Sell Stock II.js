

var maxProfit = function(prices) {
    let profit = 0;
    let pricesLength = prices.length-1
    for(let i =0; i< pricesLength; i++){
        if(prices[i+1] > prices[i]){
            profit+= prices[i+1] - prices[i];
        }
    }
    return profit;
};
