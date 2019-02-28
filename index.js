// Code your solution here!

function printString(str){
  console.log(str[0])
  if (str.length > 1){
    let subStr = str.substring(1, str.length)
    printString(subStr)
  } else {
    return true
  }
}

function reverseString(str){
  if (str === ""){
    return ""
  } else {
    return reverseString(str.substring(1)) + str.charAt(0)
  }
}

function isPalindrome(str){
  if (str.length === 0 || str.length === 1){
    return true
  }
  if (str[0]===str[str.length-1]){
    return isPalindrome(str.slice(1, str.length -1))
  }
  return false
}

function addUpTo(arr, index){
  return index ? arr[index] + addUpTo(arr, --index) : arr[index]
}

function maxOf(arr){
  let nums = arr.slice()
  if (nums.length === 1) {
    return nums[0]
  }
  if (nums[0] < nums[1]){
    nums.splice(0, 1)
  } else {
    nums.splice(1, 1)
  }
  return maxOf(nums)
}

function includesNumber(arr, num){
  if (!arr.length){
    return false
  } else if (arr[0] === num){
    return true
  } else {
    return includesNumber(arr.slice(1), num)
  }
}
