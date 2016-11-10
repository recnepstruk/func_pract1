function tripleFive() {
    for (var i = 0; i < 3; i++) {
        console.log("Five!");
    }
}
tripleFive();


function lastLetter(argument) {
    var arg = argument.length
    console.log(argument[arg - 1]);
}
lastLetter("Hello");
lastLetter("island");


function square(number) {
    return number * number;
}
console.log(square(3));
console.log(square(5));


function negate(number) {
	return (-number);	
}
console.log(negate(5));
console.log(negate(-8));


function toArray(arg1, arg2, arg3) {
	return [arg1, arg2, arg3];
}
console.log(toArray(1,4,5));
console.log(toArray(8,9,10));


function startsWithA(string) {
	if((string.charAt(0) === 'A') || (string.charAt(0) === 'a')) {
	console.log("true");
	} else {
		console.log("This doesn't start with the letter A.")
	}
};
startsWithA('aardvark');
startsWithA('bear');


function excite(exclaim) {
	console.log(exclaim, "!!!")
};
excite("yes");
excite("go");


function sun(argument) {
	console.log(argument.indexOf("sun"));
	// indexOf return -1 if the argument is not found in the string.
	if(argument.indexOf("sun") === -1){
		console.log("NO SUN");
	} else {
		console.log("YES SUN");
	}
};
sun("sundries");
sun("asunder");
sun("catapult");
// any number is true, only 0 is false.*************************


function contains(arg1, arg2) {
	return (arg1.indexOf(arg2) !== -1);
};
console.log(contains("sundries","sun"));


function tiny(number) {
	parseInt(number);
	console.log(number); // check the parameter's argument first
	if(number > 0 && number < 1) {
		console.log("True");
	} else {
		console.log("False");
	}
};
tiny(0.3);
tiny(14);
tiny(-5);

function getSeconds(time) {
	// body...
	var splitTime = time.split(":");
	for (var i = 0; i < splitTime.length; i++) {
		splitTime[i] = parseInt(splitTime[i]);	
	}
	console.log((splitTime[0] * 60) + (splitTime[1]));
};

getSeconds('01:30');
getSeconds('10:25');



Hello man
