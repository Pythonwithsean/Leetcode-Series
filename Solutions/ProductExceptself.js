let nums = [1,2,3,4]
let left = 0 
let right = nums.length
let res = []
let rounds = 0 
let num = 1
while (rounds < nums.length){
	if(left !== right){
	 num *= nums[left]
	}
	left += 1 % nums.length
	if( left % nums.length === 0){
		res.push(num)
		rounds +=1
		left = 0
		right -= 1
		num = 1
	}
}
console.log(res)