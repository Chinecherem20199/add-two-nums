
//This is O(N^2), and a nested loop
//This is called Brute Force

function twoSum(arr, target){
    for(let i =0; i<arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] ===target){
                return[i, j]
            }
        }
    }
}

const nums1 = [2, 7, 11, 15];
console.log(twoSum(nums1, 9)) //[0, 1]