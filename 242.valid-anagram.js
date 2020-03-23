
var isAnagram = function(s, t) {
    var sl = s.length;
    var tl = t.length;
    // If the length of the inputs are not equal, given inputs are not anagram
    if(sl !== tl) return false;
    for(var i = 0; i<sl; i++){
        // Checks if the input of string 1 (s) is present in string 2 (t)
        if(!t.includes(s[i])) return false;
        // If present replace the matching character
        t = t.replace(s[i],"");
    }
    return true;
};
