function twoSum(nums, target){
    const hashMap = {}
    for(let i = 0; i<nums.length; i++){
        hashMap[nums[i]] = i
    }
   for(let i = 0; i<nums.length; i++){
    let complement = target - nums[i]
    if(hashMap[complement] && hashMap[complement] !== i){
      return[i, hashMap[complement]]
    }
    
   }
}

const nums1 = [2, 7, 11, 15];
console.log(twoSum(nums1, 9)) //[0, 1] Error: Unable to connect using the connection