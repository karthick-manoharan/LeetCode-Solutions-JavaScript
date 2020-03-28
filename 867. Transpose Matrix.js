

// Runtime: 64 ms, faster than 91.79% of JavaScript online submissions for Transpose Matrix.
// Memory Usage: 37.9 MB, less than 33.33% of JavaScript online submissions for Transpose Matrix.

var transpose = function(A) {
    let result =[];
    let rowLen = A.length;
    let colLen = A[0].length;
    for(let i=0; i< rowLen; i++){
        for(let j =0; j<colLen; j++){
            // create new rows based on column length
            if(!result[j]) result[j] = [];
            result[j][i] = A[i][j];
        }
    }
    return result;
};
