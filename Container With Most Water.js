//Container With Most Water
// For the height we use the smaller bound 
// the width is i max - i min
// 2 Pointer Solution
const height = [1,8,6,2,5,4,8,3,7]
let left = 0 
let right = height.length
let max = 0
while (left < right){
	if(height[left] < height[right]){
		left +=1 
	}else{
		right -=1
	}
	
	let amount = Math.abs(right - left) * Math.min(height[left],height[right])
	if(max < amount){
		max = amount
	}

}
console.log(max)


