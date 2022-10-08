
// Linear runtime O(n)
function twoSum(nums, target){
    const hashMap = {}
    
   for(let i = 0; i<nums.length; i++){
    let complement = target - nums[i]
    if(complement in hashMap){
      return[i, hashMap[complement]]
    }
    
        hashMap[nums[i]] = i
   }
}

const nums1 = [2, 7, 11, 15];
console.log(twoSum(nums1, 9)) //[0, 1]