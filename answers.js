/*
What is 2^5 in binary?
	2^5 is 32 bits, so convert that to binary it will be 1

	2^5  2^4 2^3 2^2 2^1 2^0
	32   16  8   4    2   1
	1    0   0   0    0   0 
	
	binary: 100000
	
What is 2^5 - 1parse in binary?

	32-1 = 31

	2^5  2^4 2^3 2^2 2^1 2^0
	32   16  8   4    2   1
	 0   1   1   1    1   1 

	binary: 011111

What is the general rule for binary numbers which are or the form 2^n or 2^n - 1?
	It seems that the rules for binary number is when 1 is added or subtracted from the bits, the binary number will take 1s in the subsequent bits 
	
*/

var result = 0 * Math.pow(2,0) + 
             1 * Math.pow(2,1) + 
             0 * Math.pow(2,2) + 
             1 * Math.pow(2,3) + 
             0 * Math.pow(2,4) + 
             1 * Math.pow(2,5);

console.log(result);

/*
Implement a function that takes in an integer and prints out its two's complement value by following the algorithm described above. Hint: to invert the bits of a number you can use the "~" operator. For example ~25 will invert the bits of the integer 25.

*/

console.log((25).toString(2));
console.log((25+1).toString(2));

function printComplement(num) {
	num = ~num + 1;
	return num;
}


/*

Write a function that takes an integer value and checks to see if it is even or odd using the bit-wise AND operator. Hint: Think about what the value of the least-significant bit will be for even and odd numbers.



*/

function isEven(int) {
	return !(int & 1); //if it's not odd, it must be even
}

console.log(15 & 1)

/*
Why would using bit-wise operations be potentially faster for checking whether a number is even or odds as opposed to using something like the modulo operator (for example randInt % 2)?
	
	Instead of doing the entire operation using modulo, the bit-wise operation compares the last binary number using the truth table, (&) operator, which is much faster and more direct.

*/

/*
Write a function that takes in two integer values and prints out the resultant value when you AND the two input values and then also when you OR the two input values.
*/

function orOperator(valueA, valueB) {
	return (valueA & valueB) + " " + (valueA | valueB); 
}


/*
Extend the previous function further by adding logic for the XOR operation when two integer values are input. Add a third parameter which denotes which type of operation to execute. Print out the resultant value for the associated operation type.
*/


function bitWiseOperator(valueA, valueB, operator) {
	if(operator === '&') {
		return valueA & valueB;
	}
	if(operator === '|') {
		return valueA | valueB;
	}
	if(operator === '^') {
		return valueA ^ valueB;
	}
}

/*
Write a function that takes in an integer value and prints out its complement value.
*/

function takeComplement(num) {
	return ~num;
}

/*
What do you notice about the numbers which are output? What about if you give a large input value?
100000000 (-127)
111111111 (-1)
000000000 (0)
011111111 (127)

   takeComplement(25)
=> -26
   takeComplement(250000000)
=> -250000001
   takeComplement(25000000000000000000)
=> -1489240065
   takeComplement(25000000000000000000000000000000000)
=> -1
   takeComplement(250000000000000000000000000)
=> -1
   takeComplement(2500000000000000000)
=> -578420737
*/


/*
Write a function which sets the third bit of a number.
bit number = 

	2^5  2^4 2^3 2^2 2^1 2^0
	32   16  8   4    2   1
	0    0   0   1    0   0 

*/

function setThirdBit(num) {
	return num | 4;
}


/*
Write a function which toggles the third bit of a number.


*/
function toggleThirdBit(num) {
	return num ^ 4;
}
 

/*
Write a function which clears (sets to zero) the third bit of a number.
*/

function clearThirdBit(num) {
	return num & ~4
}

/*
Write a function which tells you whether the third bit of a number is set.

*/

function checkThirdBit(num) {
	if((num & 4) === 4) {
		return true;
	} else {
		return false;
	}
}


/*
Write a function that takes in a decimal value and a value that represents the number of bit positions to shift left with. Return or print out the final base 10 value after the shift.
*/

function leftShift(deciVal, shiftBy) {
	return deciVal << shiftBy;
}

/*
How would you verify whether the above function is producing the correct value?
*/

//check by:
console.log(13*Math.pow(2,3))


/*Modify your existing shift function to also calculate a right-shifted value. Compare the values which you get from your left-shift and right-shift functions*/
function rightShift(deciVal, shiftBy) {
	return deciVal >> shiftBy;
}

/*Modify your existing shift function to also calculate a zero-fill right-shifted value. Compare the values which you get from your three different type of shift operator.*/

function zeroFillRightShift(deciVal, shiftBy) {
	return deciVal >>> shiftBy;
}
/*
   zeroFillRightShift(17, 5)
=> 0
   zeroFillRightShift(13, 4)
=> 0
   rightShift(13, 4)
=> 0
   rightShift(-13, 4)
=> -1
   zeroFillRightShift(-13, 4)
=> 268435455
*/



/*For non-negative numbers, does the zero-fill right shift operator differ from the right shift operator in terms of producing the end result? Why or why not? Eg. 11 >>> 4 vs 11 >> 4*/
//no they don't differ because the sign bit stays 0

/*Write a function which doubles an integer.

   doubleInteger(4)
=> 8
   doubleInteger(8)
=> 16

*/

function doubleInteger(num) {
	return num << 1;
}



/*Write a function which quadruples an integer.*/
function quadruplesInteger(num) {
	return num << 2;
}
/*
   quadruplesInteger(3)
=> 12
   quadruplesInteger(4)
=> 16
*/

/*
Write a function which divides an integer by two, rounding down.

   divideAndRound(6)
=> 3
   divideAndRound(9)
=> 4
*/

function divideAndRound(num) {
	return num >> 1;
}

/*
Write a function which calculates 2^n.
   twoToTheN(8)
=> 256
   twoToTheN(3)
=> 8
*/

function twoToTheN(num) {
	return 1 << num;
}

/*
Write a function which calculates the Morton Number from two 8-bit integers. In a Morton Number, the bits of two numbers are interleaved. So if your inputs were: 15 (00001111) and 48 (00110000), your output would be 1450 (0000010110101010).


	
	0 0 0 0 1 1 1 1    num 1 shift to odd positions 
	 0 0 1 1 0 0 0 0   num 2 shift to even positions
    
    
    15 14  13   12  11  10  9  8  7  6  5  4  3  2  1  0
	0  0   0    0   0   1   0  1  1  0  1  0  1  0  1  0


	0000000010101010 
	0000010100000000  
add by |	
	0000010110101010

*/

function mortonNum(num1, num2) {
	var getMortonNum=[];
	num1 = num1.toString(2).split(''); //removed any leading 0's  1111
	num2 = num2.toString(2).split(''); //110000
	
	for(var i = 0; i < 8; i++) {
		getMortonNum.unshift(num2.pop() || 0);	//+ coerces any type to it's boolean equivalent, !(!undefined == true) == false, + that + == 0
		//+!!+
		getMortonNum.unshift(num1.pop() || 0);	
	}
	
	getMortonNum = parseInt(getMortonNum.join(''), 2);
	
	return getMortonNum;
}



