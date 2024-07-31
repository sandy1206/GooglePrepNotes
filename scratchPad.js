function mergeInterval(arr){
	let output=[];
	arr.sort((a,b)=> a[0]-b[0])
	console.log(arr);
	let left= arr[0][0];
	let right= arr[0][1];

	for(let i=1;i<arr.length;i++){
		if(arr[i][0]>right){
			output.push([left,right]);
			left = arr[i][0];
			right = arr[i][1]
		}else{
			right = Math.max(arr[i][1], right);
		}
	}
	output.push([left, right]);
	return output;
}

console.log(mergeInterval([[1,2],[1,3],[5,8],[4,7]]))

const insert = function (intervals, newInterval) {
	let left = intervals[0][0];
	let right = intervals[0][1];
	let output = []

	for (let i = 1; i < intervals.length; i++) {
		if (right >= newInterval[0]) {
			right = Math.max(newInterval[1], right)
		} else {
			output.push([left, right]);
			left = intervals[i][0]
			right = intervals[i][1]
		}
	}
	output.push([left, right]);
	return output;
};

console.log(insert([[1, 3], [6, 9]],[2,5]))
