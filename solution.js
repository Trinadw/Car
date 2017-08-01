/*function isEven(num){
	
		return num % ===0;
	}*/

/*function factorial (n){
  if (n==0 || n==1){
    return 1;
  }
  return factorial(n-1)*n;
} 
or
function factorial*/

function kebabToSnake(str) {
    //replace all dashes with
    var myString = str.replace(/-/g, "_");
    //return str
    return myString;}