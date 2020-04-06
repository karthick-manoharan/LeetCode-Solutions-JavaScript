

var groupAnagrams = function(strs) {
    const groupedAnagrams = {};
    strs.forEach(str => {
        let sorted = Array.from(str).sort().join();
        groupedAnagrams[sorted] ? groupedAnagrams[sorted].push(str) : groupedAnagrams[sorted] = [str]
    });
    return Object.values(groupedAnagrams);
};
