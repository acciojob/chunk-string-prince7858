function stringChop(str, size) {
	if(str == null || str.length == 0){
		return []
	}
	let ans = []
	while(str.length){
		let temp = str.slice(i,size+i)
		ans.push(temp)
		i += size
	}
	return ans
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));