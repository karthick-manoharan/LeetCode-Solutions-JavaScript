/**
 * 1. Introduce pointers at the beginning and the end of the array
 * 2. If the target is equal to sum of pointers return the array indices by adding 1 (check the expect output to understand why one is added)
 * 3. If the sum is greater than the target. Move the pointer2 in wards. As the values in the array are sorted in ascending movement of pointer2 will reduce the sum value.
 * 4. If the sum is smaller than the target. Move the pointe1 in wards. Moving pointer1 inwards will increase the target value.
 * 5. Pointers should not cross each other.
 * 6. It is assumed the target is always present in the given array
 */

// Practise here: https://jsbin.com/fogawemixi/edit?js,console,output

var twoSum = function(numbers, target) {
    let pointer1 = 0, pointer2 = numbers.length-1;
    while (pointer1 < pointer2) {
        // Saving it sum in a variable helps save memory.
        let sum = numbers[pointer1] + numbers[pointer2];
        if(sum === target) {
            break;
        }else if(sum < target) {
            pointer1++;
        } else  {
            pointer2--;
        }
    }
    return [pointer1 + 1, pointer2 +1];
};
