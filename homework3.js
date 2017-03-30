//HW3
//Date: 2/23/17

var flatten = function(x){
	var done = false;
	var start = x;
	var result = flattenHelper(start);
	//runs untill the the array is entirely flat.
	while(!done){
		var result = flattenHelper(result);
		done = f(result);
	}
	console.log(result);
};

//checks to see if there are still arrays in the arrays.
var f = function(x)
{
	var check = 0;
	for(var k = 0; k <= x.length ; k++){
		if(Array.isArray(x[k])){
			check++;
		}
	}
	if(check == 0){
			return true;
		}
		else{
			return false;
		}
}
//flattens just one level.
//source for reduce function usage:
// https://stackoverflow.com/questions/27266550/how-to-flatten-nested-array-in-javascript
var flattenHelper = function(array)
{
	return array.reduce(function(a,b) {return a.concat(b);}, []);
}

console.log(flatten([[1,2,3],[9,7,5,[8,7, [9, 3, [6, [6]]]]]]));
