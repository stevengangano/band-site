// 1)

// Triple Add

//tripleAdd(10)(20)(30) => returns sum of all three numbers


function tripleAdd(num1) {
	return function(num2) {
		return function(num3) {
			return num1 + num2 + num3;
		}
	}
}

//Displays in console: 60
console.log(tripleAdd(10)(20)(30))

// What is happening?
//
// Each function is taking in 1 argument. This is called currying a function.
//
// Step 1: Create function to pass num1
// Step 2: Return a function to pass num2
// Step 3: Return a function to pass num3
// Step 4: Inside num3, sum num1, num2, and num3


// 2)

//What is an IIFE?

//Immediately Invoked Function Expression
//The function is executed after its created

var greeting = function(name) {
	console.log('Hello' + ' ' + name)
}('Stebs')

// Displays in console: Hello Stebs

//Why is it used?

//So other variables are not overwritten, for example:
//If jQuery is being used, you can still use the '$'
//Because it is inside a private scope

// (function() {

// 	function getTotal(a, b) {
//     	return a + b;
//   	}
// 	console.log(getTotal(5,4))

// 	var $ = 'currency'
// 	console.log($)
// }());


// 3) 

//This creates 5 buttons
//Button1 Button2 Button3 Button4 Button5
//W2222222hen the button each button is clicked, it will alert 'Button 6'
//Why? B/C button.innerHTML = 'Button ' + i; went through the loop 
//When it gets to alert('This is button ' + i);, it is already on 6

function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'button' + ' ' + i;
     button.onclick = function() {
          alert('This is button ' + i);
     }
     body.appendChild(button);
   }
}
 
createButtons();

//Solution 1:
//When a button is clicked it should say "This is button 1", "This is button 2", etc
//Change var i to let i
//Changes to block scope instead of function scope

function createButtons() {
   for (let i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'button' + ' ' + i
     button.onclick = function() {
          alert('This is button ' + i);
     }
     console.log('This is ' + i)
     body.appendChild(button);
   }

}
 
createButtons();

//Solution 2:
//Create an IIFE for button.onclick
//This preserves 'i' so it can be reused 

// function createButtons() {
//    for (var i = 1; i <= 5; i++) {
//      var body = document.getElementsByTagName("BODY")[0];
//      var button = document.createElement("BUTTON");
//      button.innerHTML = 'button' + ' ' + i
//      (function(num) {
//      	button.onclick = function() {
//           alert('This is button ' + num);
//         };
//      })(i);
//      body.appendChild(button);
//    }
// }

// 4) What is a closure?

//Has access to variables in 3 separate scopes:

//1) Variables in its own scope
//2) Variables in the scope of the outer function
//3) Variables in the global scope

//Also has access to:
//1) Its own parameters
//2) Parameters of outer function(s)

const globalVariable = 'global var';
 
function outterFunc(param1) {
  const variable1 = 'var one';
  
  function innerFunc(param2) {
    const variable2 = 'var two';
    
    //Calls the globalVariable
    console.log('globalVariable: ', globalVariable);
    //Calls variable1 from outterFunc()
    console.log('variable1: ', variable1);
    //Calls variable2 from innerFunc()
    console.log('variable2: ', variable2);
    //Calls param1 from outterFunc('param one')
    console.log('param1: ', param1);
    //Calls param2 from innerFunc('param two')
    console.log('param2: ', param2);
  }
  //This is called also
  innerFunc('param two');
}
 
outterFunc('param one'); //This calls innerFunc('param two') 

//Displays:
// globalVariable:  global var
// variable1:  var one
// variable2:  var two
// param1:  param one
// param2:  param two

//5) What the 'this' keyword javascript?

//'This' refers to what object it is inside of 

//Example 1:
var c = {
	name: "The C object",
	log: function() {
		this.name = 'Updated C object', 
        console.log(this.name);                                                                    
	}

}

//Displays "Updated C Object"
console.log(c.log());


//Example 2:

//Use 'self' instead of 'this' if using 'this' in two or more functions
//within the same object

var d = {
	name: "The D object",
	log: function() {
		this.name = 'Updated D object',
		console.log(this.name);
	}	
} // end c

//Displays "Updated C Object"
console.log(d.log());

//6 What is variable and function hoisting?

// if function is NOT set as a variable, you can call it BEFORE
//because it is already stored in memory. This is hoisting.

//variables need to be declared before it can be called because it needs 
//to be stored in memory first


//Example 1:

//This will work
console.log(b());

//This will be undefined because they are called before
//they are defined
// console.log(a);

var a = "Hello World";

function b() {
	console.log('called b!');
}

//This works
console.log(b());
console.log(a);


//Example 2:

// var => function scope, global scope
// const, let => function scope, global scope, block scope

// tab 1
function getTotal() {
  let total = 0;
  
  for(var i = 0; i < 10; i++) {
    let valueToAdd = i;
    var multiplier = 2;
    total += valueToAdd * multiplier;
  }
   return total;
}

//Displays: 90
console.log(getTotal());
 
// tab 2 (behind the hood)
 
// function getTotal() {
//   //this is hoisted
//   //if this is console.log, this will be give an error instead 
//   //of undefined since we are using let
//   let total;
//   //if this is console.log,this will be undefined
//   //this is hoisted
//   var multiplier;
  
//   total = 0;
//   for(var i = 0; i < 10; i++) {
//     //this is hoisted
//     let valueToAdd = i;
    
//     multiplier = 2;
//     total += valueToAdd * multiplier;
//             // 1x2
//             // 2x2
//             // 2x3
//             // 2x4
//             // 2x5
//             // 2x6
//             // 2x7
//             // 2x8
//             // 2x9
//   }
  
//   return total;

// }
 
//Displays: 90
// getTotal();

//7) What is the difference between function delcaration 
//and function expression?

b();//This will work b/c
//This is hoisted to the top 

//function delcaration
function b() {
	console.log('called b!');
}

//function expression
//somefunction() => This will not work because it is above
var somefunction = function () {
	console.log('called b!');
}


//8) Scope and 'self' solution

var color = 'Red'

var myCar = {
    color: "Blue",
    logColor: function() {
    	//this = myCar
        var self = this;
        //Displays Blue because logColor is a method under myCar
        console.log("In logColor - this.color: " + this.color);
        //Displays Blue because 'self' references myCar
        console.log("In logColor - self.color: " + self.color);
        (function() {
        	//undefined b/c this function is not a method under myCar
        	//'this' only references the global scope not myCar
            console.log("In IIFE - this.color: " + this.color);
            //'self' has access to myCar
            console.log("In IIFE - self.color: " + self.color);
        })();
    }
};
 
myCar.logColor();

//9) Difference between == vs ===
 
console.log(7 == '7') //This is true. String is converted to a number
console.log(7 === '7') //False

//10 LogNumber Function

//Example 1:
//Tab 1
var num = 50;

function logNumber1() {
	console.log(num);
	var num = 100
}

logNumber1(); //Undefined

//Tab 2 (Under the hood)
var num = 50;

function logNumber2() {
	var num; //This is undefined
	console.log(num);
	num = 100
}

logNumber2(); //Undefined

//Example 3:
//Tab 2 (Under the hood)
var num = 50;

function logNumber3() {
  //num is 'not defined'
	console.log(num);
}

//50 b/c since num is not def within its scope,
//it goes to the global scope to look for it
logNumber3(); 


//11) What is strict mode and its benefits?

//Enforces stricter parsing and error handling in your code

//1)
//Prevents the use of global variables such as car: 'Toyota';
//Must use const, var, let

//2)
//Prevents the use of duplicating parameters in function for example:

function something (a,a,b) {
	console.log(a,a,b);
}

//Displays 2,2,3 => the 1st 'a' is changed to the 2nd 'a' is 'use strict' is not used
something(1,2,3);


//12 Curry function

//Example 1:
function getProduct(num1) {
	return function(num2) {
		return num1 * num2;
	};
}

console.log(getProduct(10)(20));

//Example 2: 

function getTravelTime(distance) {
	return function(speed) {
		return distance / speed;
	};
}

//Travel time from Bos to NYC
const travelTimeBosNyc = getTravelTime(400);
console.log(travelTimeBosNyc(80) + ' ' + 'hrs');
console.log(getTravelTime(400)(50) + ' ' + 'hrs');


//13) Counting a function

//This uses a closure

//Example 1:
function myFunc() {
	let count = 0;

  //when this function is ran
  //, it adds 1 to count
	return function() {
		count++;
		return count;
	};
}

const instanceOne = myFunc();
const instanceTwo = myFunc();

console.log('instanceOne: ', instanceOne());
console.log('instanceTwo: ', instanceTwo());
console.log('instanceOne: ', instanceOne());
console.log('instanceTwo: ', instanceTwo());
console.log('instanceOne: ', instanceOne());

//Example 2:
function myFunc1() {
	let count = 0;

	return function() {
		count++;
		if (count < 4) {
			console.log(count)
			console.log('Less than 4')
		} else {
			console.log(count)
			console.log('More than or equal to 4')
		}
	};
}

var poop = myFunc1();
console.log(poop());
console.log(poop());
console.log(poop());
console.log(poop());
console.log(poop());

//14) Logging x and y

(function() {
	var x = y = 200;
	//under the hood
	y = 200; //this is global
	var x = y; //var makes it not global
  console.log(y)
})();

console.log('y: ' + y); //200
//console.log('x: ' + x); //undefined b/c not global

//15) What is the call() and apply() methods?

//The call() and apply() method allows for inheritance of other
//properites on another object

const car1 = {
  brand: 'Porsche',
  getCarDescription: function(cost, year, color) {
    console.log(`This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}.\n`);
  }
};

const car2 = {
  brand: 'Lamborghini'
}

const car3 = {
  brand: 'Ford'
};

//Adding a new function to bind
var model = function(model) {
  console.log(this.brand)
  console.log(this.getCarDescription(50, 1988, 'blue'))
  console.log(model)
}

var getModel = model.bind(car1)
getModel('Cayette')

//Using the call() method

//Displays:
//This is a Porsche. The price is $80,000.00. The year is 2010. The color is blue.
car1.getCarDescription(80000, 2010, 'blue');
//Displays:
//This is a Lamborghini. The price is $20,000.00. The year is 2013. The color is yellow.
//car2 = this
car1.getCarDescription.call(car2, 200000, 2013, 'yellow');

//Using the apply() method
//apply() uses an array instead
car1.getCarDescription.apply(car3, [35000, 2012, 'black']);


//16 Using data by reference and by value

// This is data by value
// var num = 5
// var gretting = 'hello'

//This is by reference
//Numbers in an array are referenced
//var num = [1,2,3,4,5]

const list1 = [1, 2, 3, 4, 5];
const list2 = list1
const list3 = list1.concat([]);
// const list2 = list1.concat([]);
 
list1.push(6, 7, 8);
 
//Displays [1,2,3,4,5,6,7,8]
console.log('List 2: ', list2);
//Displays [1,2,3,4,5]
console.log('List 3: ', list3);


//17 Singly or Doubly Invoked Function

// function getTotal(num1, num2) {
// 	console.log(num1 + num2);
// }

// function getTotal(num1) {
// 	return function(num2) {
// 		console.log(num1 + num2);
// 	}
// }

getTotal(10, 20)
getTotal(10)(20)

//or

function getTotal() {
  //If console.log(getTotal(10,20)), it will
  //display { 0: 10, 1: 20 }
  //The arguments are 10 and 20
  var args = arguments;
  
  //if 2 arguments are passed
  if (args.length === 2) {
    return args[0] + args[1];
  }
  //if 1 argument is passed
  else if (args.length === 1) {
    return function(num2) {
      return args[0] + num2;
    };
  }
}

//Displays: 30
console.log(getTotal(10, 20));
//Displays: 48
console.log(getTotal(3)(45));

//18)

// TASK:
// 1. Describe what JSON format is. => Javascript Object Notation. Light-weight format for transferring data.
// 2. Delete the data types not permitted in JSON.
// 3. Replace placeholder-text with the corresponding data type,
//    properly formatted as JSON.
//strings, numbers, boolean, arrays, objects, null
const myJsonObj = {
  "myString": "hello world",
  "myNumber": 1234.34,
  "myNull": null, //non-existent
  "myBoolean": false,
  //myUndefined: [undefined],
  "myArray": [20, 30, 'orange'],
  //myFunction: [some function],
  "myObject": {
  	"name": "Sam",
  	"age": 30
  }
};

//19) What order will the numbers logged?
function logNumbers() {
  console.log(1); 
  setTimeout(function(){console.log(2)}, 1000); 
  setTimeout(function(){console.log(3)}, 0); 
  console.log(4);
}
 
//Displays:
//1, 4, 3, 2
//Why? Because 1 and 4 are in memory.
//3 is in the event loop and released after 4
logNumbers();


//20) Write 3 different way to write an object

var length = 25;
length = 19;
// object literal syntax
const myBoat = {
  length: 24,
  maxSpeed: 45,
  passengers: 14,
  getLength: function() {
    return this.length;
  }
}; 
 
//Displays: 24
console.log(myBoat.getLength());

// new keyword & Object constructor
const student = new Object();
 
student.grade = 12;
student.gradePointAverage = 3.7;
student.classes = ["English", "Algebra", "Chemistry"];
student.getClasses = function() {
  var subjects = this.classes
  console.log(subjects[0]);
};

//Displays: English
student.getClasses()
 
 
// constructor function 
function Car(color, brand, year) {
  this.color = color;
  this.brand = brand;
  this.year = year;
}
 
//Overrides values like this.color
Car.prototype.getColor = function(color) {
  return color;
};
Car.prototype.getBrand = function(brand) {
  return brand;
};
Car.prototype.getYear = function(year) {
  return year;
};

//method added
Car.prototype.getModel = function(model) {
  return model;
};
 
const carlysCar = new Car('blue', 'ferarri', 2015);

//Displays: Ferrari
console.log(carlysCar.brand);
//Displays: 1988
console.log(carlysCar.getYear(1988)); 



//21) What is logged out for each one?
console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof {}); //object
console.log(typeof []); //object
console.log(Array.isArray([])); //true
console.log([] instanceof Array); //true

//22) Using the bind() Method

var distance = 9999999999999;
this.distance = 10000;

const roadTrip1 = {
  distance: 3000,
  getDistance: function(unit, caption) {
    return this.distance + unit + caption;
  }
};
 
const roadTrip2 = {
  distance: 5000
};

//roadTrip2 is the 'this object'
//the method binded to roadTrip2 is roadTrip1.getDistance(obj, arg, arg)
const getTripDistance = roadTrip1.getDistance.bind(roadTrip2, 'km', ' in total');
 
//Displays: 5000km in total
console.log(getTripDistance());

//23 Comparing two object
const user1 = {
  name: 'Jordan',
  age: 28,
};
 
const user2 = {
  name: 'Jordan',
  age: 28,
};

console.log(user1 === user2);//false

//Why? Because objects and arrays are passed by reference.
//One object/array cannot be equal to each other

console.log(JSON.stringify(user1) === JSON.stringify(user2)); //true
console.log(JSON.stringify(user1));

//Array Constructor
var arr1 = [];
var arr2 = new Array(50);
var arr3 = new Array(1, 2, "three", 4, "five");
var arr4 = new Array([1, 2, 3, 4, 5]);
 
console.log('arr1: ', arr1); // []
console.log('arr2: ', arr2); //[<50 empty items>]
console.log('arr3: ', arr3); //[1, 2, "three", 4, "five"]
console.log('arr4: ', arr4); //[[1,2,3,4,5]]

//24) Using indexOf (can only find by value not reference)
//looks for where in the index it is at

//2 because it is at index 2
console.log([10, 20, 30, 40, 50].indexOf(30));

// -1 because the object cannot be found. No two objects are similar because
// they are passed by reference
// need to be stringified 
// console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' })); 

//4 b/c the first 'o' is at index 4
console.log('hello world'.indexOf('o')); 

//cannot be found because if passed by reference(objects and arrays)
//-1 b/c arrays are passed by reference
console.log([[1], [2], [3], [4]].indexOf([2])); 

//4 b/c [5] is stored as a value
var myArray = [5]
console.log([[1], [2], [3], [4], myArray].indexOf(myArray));


//25) Are they equal?

//false because 300.3 * 3 = 900.90000001
console.log(900.9 === 300.3 * 3)

//true 
console.log(Number((300.3 *3).toFixed(1)));
console.log(900.9 === Number((300.3 *3).toFixed(1)));


//26) Objects and Strings
var string1 = 'Tampa';
var string2 = string1;
string1 = 'Venice';
 
console.log(string2); //Tampa
 
 
////////////////////////////////
 
 
var person1 = {
  name: 'Alex',
  age: 30
};
 
var person2 = person1;
 
person2.name = 'Kyle';

// {name: 'Kyle', age: 30}
console.log(person1);


//26) Strings and Arrays

const data1 = 'Jordan Smith';

//[].filter = Array.prototype.filter
//data1 is the "this" context so it 
//is inserted into '[]'
//***THIS IS THE FILTER METHOD***
//function(elem, index) {
//  return index > 6;
//}
//What is happening?
//data1 is inserted into an empty array and then the
//filter() method is used
const data2 = [].filter.call(data1, function(item, index) {
  return index > 6;
});

//Displays:
//["S", "m", "i", "t", "h"]
console.log(data2);

//27) Object Properties

// const a = {};
// const b = { 
//            name: 'b' 
//            };
// const c = { 
//             name: 'c' 
//            };
 
// a['[object Object]'] = 200 
a[b] = 200;

// a['[object Object]'] = 400
a[c] = 400;
 
//400 because only strings can be properties
//on objects. Objects can't be properies on 
//objects
//console.log(a['[object Object]']);
console.log(a[b]);

//27)

var x = 10;
 
function y() {
	  //this is a global variable
	  //b/c out
    x = 100;
    return;
    //no code works after a return statement
    function x() {}
}
 
// y();
 
//Displays: 10 b/c outter global has priority over inner variable
console.log(x);

//Under the hood
function y() {
	//This is hoisted b/c it is a function declaration
	//So function z() is never ran thus it is 10
	function z() {}
	//this is a global variable
	//bc var, let, and const is not used
    z = 100;
    //no code works after a return statement
    return;
    //function z() {}
}
 
// y();
 
// console.log(z);

//28) 
const account1 = {
  name: 'Jen',
  totalAmount: 5000,
  deductAmount: function(amount) {
    this.totalAmount -= amount;
    return 'Amount in account: ' + this.totalAmount;
  },
};
 
const account2 = {
  name: 'James',
  totalAmount: 8000,
};


console.log(account1.deductAmount(2000))

//This is what it looks like under the hood:
//withdrawFromAccount = function(amount) {
// name: 'James',
// totalAmount: 8000,
// function() {
//   this.totalAmount -= amount;
//   return 'Amount in account: ' + this.totalAmount;
//	}
//}

const withdrawFromAccount = account1.deductAmount.bind(account2, 500);

console.log(withdrawFromAccount());


//Example 2:

const account3 = {
	balance: 10000,
	deduct: function(withdrawn) {
    	var total = this.balance - withdrawn;
    	return 'Amount in account: ' + total;
	}
}

const account4 = {
	balance: 15000
}

//This is what it looks like under the hood:

//currentBalance = function(withdrawn) {
//	balance: 10000,
// 	function() {
//   var total = this.balance - withdrawn;
//   return 'Amount in account: ' + total;
//	}
//}
const currentBalance = account3.deduct.bind(account4, 200)

console.log(currentBalance());

//FUNCTIONS PRACTICE

//Exercise 1

var cars = ['fiat', 'benz' , 'honda', 'toyota']  

for (i= 0; i < cars.length; i++) { // cars.length counts the number of elements = 4        
  if (cars[i] = 'benz') { // cars[i] loops through the array to see if any of the arrays = benz,               
    console.log('You’re driving a ' + cars[i]) // console.log  cars[i] which equals benz 	
	}
}


//Exericse 2 Finding the biggest number
var arr = [10, 55, 22, 87, 14]
var biggest = 0

for (i = 0; i < arr.length; i++) { // i++ = or i = i +1
	if (biggest < arr[i]) { // This is the loop. 1) if 0 <  10. biggest = 10. 2) if 10 < 55, biggest = 55. 3) if 55 < 22, nothing happens. 4) if 55 < 87, biggest = 87. 5) if 87 < 14, nothing happens. 	biggest = arr[i] // this does not happen if biggest < arr[i]
	   console.log(biggest); // when console.log is put within the for loop, it displays 10, 55, 87 because that’s when biggest changes.
	}
}


var friends = [
    {
        firstName: 'Bill',
        lastName: 'Gates',
        age: 25,
        number: '(650) 270-8530'    
    }, // must add a comma
    {
        firstName: 'Steve',
        lastName: 'Johnson',
        age: 52,
        number: '(650) 255-5149'
    }, // must add a comma
    {
        firstName: 'Darren',
        lastName: 'Arce',
        age: 13,
        number: '(650) 432-4229',
       
    }
]

console.log (friends[2].age) // displays the property value 13

for (i=0; i < friends.length; i++) {
	if(friends[i].age < 30) { // if age is less than 30, 
		console.log(friends[i].firstName + " " + friends[i].lastName) // displays friends first and last name of friends who are less than age 30
	}
}

//Exercise 3
function showMessage (month){    
	console.log(("My birthday is" + " " + month));  
}
var myMonth = 'March'
showMessage(myMonth)

//Exercise 4 
function addNumbers (theSum){ 
	console.log(theSum); 
} 
addNumbers(2+2); 


//Exercise 4 => Switch Statements

var getReview = function(movie) {

switch (movie) { 
	case "Toy Story 2" : 
	      console.log("Great story. Mean prospector")
	      break;
	case "Finding Nemo" : 
	      console.log("Cool animation, and funny turtles.")
	     break;
	case "Lion King" : 
	     console.log("Great songs.")
	     break;
	}
} 

getReview("Finding Nemo")

//Exercise 5 => Image Switcher

  var image_tracker = '2';

  function change() {
	var image = document.getElementById('social'); // grabs the HTML documents below 
		if (image_tracker === '1') { // if image tracker is equal to 1
			image.src = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'; // then change the image source to this
			console.log(image.src)
			image_tracker = '2'; // and also change image to ‘2’
		} else {
			image.src = 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'; // if image tracker does not equal  f, display this image source
			image_tracker = '1'; // change the image to ‘1’
		}
	}

//Changes images every 3 seconds
setInterval('change()', 3000)

//Exercise 6
var friends = {
  bill: {
          firstName: 'Bill',
          lastName: 'Gates',
          number: '(650) 270-8530',
          address: ['1058 Hanover St', 'Daly City', 'CA', '94014']
      }, // must add a comma
  steve: {
          firstName: 'Steven',
          lastName: 'Johnson',
          number: '(650) 270-8530',
          address: ['1058 Hanover St', 'Daly City', 'CA', '94014']
      }, // must add a comma
  darren: {
          firstName: 'Darren',
          lastName: 'Arce',
          number: '(650) 270-8530',
          address: ['1058 Hanover St', 'Daly City', 'CA', '94014']
      }
}

var buddies = {
  Jomer: 'Long time no see',
  Rudy: 'Nice to see you',
  Mark: "sup man"
}

var list = function() {
  for(var i in friends) { // i = (bill:, steve:, darren:) => aka property name
    console.log(friends[i].firstName); // prints properties (Bill, Steven, Darren) to console
  }

  for (var key in friends) {
	console.log(friends[key].lastName + ', ' + friends[key].firstName) // displays the property values (Gate, Johnson, Arce)
  }

  for (var key in buddies) {
    console.log(buddies[key])
  }
}

list();

//Exercise 7

for (var i = 1; i <=20; i++) { // prints the numbers 1-20
    if (i % 5 === 0 && i % 3 === 0) { //if any of the numbers (1-20) are divisible by 5 and 3, print ‘FizzBuzz’
		console.log ('Fizz Buzz');
    } else if ( i % 3 == 0 ) { //if any of the numbers (1-20) are divisible by 3, print ‘Fizz’
    	console.log ('Fizz');
	} else if ( i % 5 == 0 ) { // if any of the numbers (1-20) are divisible by 5, print ‘Buzz’
	        console.log ('Buzz');
	} else { // if not divisible by 5 and 3, print the number
	    console.log (i)
	}
}

//Objects 
var bob = {
	name: 'Bob Smith',
	age: 30
}


//Example 1:

//Adding method to an object
bob.getYearOfBirth = function() {
  return 2018 - this.age // takes 2014 and subtracts from bob.age
}

console.log(bob.getYearOfBirth());//1988

//Example 2
var setAge = function(newAge) {  // create a method to make a new age
    bob.age = newAge;  // we want it to take bob.age (previous age) and change it to bob’s new age
    return newAge;
}

console.log(setAge(20)); //20

//Example 3

function Rabbit(adjective) {
    this.adjective = adjective      
    this.describeMyself = function() { // create a method that will printout each rabbit’s adjective to the console
        console.log('I am ' + this.adjective)
    }
}

var rabbit1 = new Rabbit('fluffy');

//I am fluffy
console.log(rabbit1.describeMyself());

//Example 4:

// Our person constructor
function Persons(name, age) {
    this.name = name;
    this.age = age;
}

var alice = new Persons("Alice", 30);
console.log(alice.age) //30
var billy = new Persons("Billy", 25);
console.log(billy.name) //Billy

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}
// gets the difference in age between alice and billy using our function
// console.log (ageDifference (person1, person2))
//displays 5
console.log(ageDifference(alice, billy)) 


//Example 5:
function Person(job, married) {
	this.job = job;
	this.married = married;
}

var user = new Person("Codecademy Student",false); // this is the new object created above from Person.

//adding a method to an object created from an object constuctor
user.speak = function(greeting) { // this.speak  = user.speak 
	console.log(greeting + ' I am a ' + this.job)
}

//Hi I am a codeacademy student
user.speak('Hi') // this is the calling code

//Example 6:
var aBoolean = false;
var aNumber = 42 ;
var aString = 'Im a string';

console.log(typeof aBoolean);
console.log(typeof aNumber);
console.log(typeof aString);

//Example 7
var myObj =  {       
	name: 'Stebs'
}

// displays True because the var myObj has a property of name
console.log(myObj.hasOwnProperty('name')) 

//Adding new properties to object constructor using prototypes
function Cat (name, breed) {
   this.name = name          
   this.breed = breed
}

var cheshire = new Cat('cheshire Cat', 'British Shorthair') 

//new method added to Cat
Cat.prototype.sound = function(sound) {  
    return sound
}

//'this' is referring to 'var'
Cat.prototype.greeting = function() { // method created to say ‘Meow!’ 
    console.log('I am a ' + this.breed + ' and I ' + this.sound('meowwwww!!'))
}

//Displays: I am a British Shorthair and I meowwwww!!
cheshire.greeting() 

//Example 8: Inheritance

//Example 1)
function Dog (name) { // General
	this.name = name
	this.numLegs = 'Four legs' // because all dogs have 4 legs
}

function Beagle (name) { // Specific
	this.name = name
}

Beagle.prototype = new Dog () // this allows Beagle Class to use Dog class. Beagle Class uses the property this.numLegs
var sparky = new Beagle('Sparky') // create new Beagle here
console.log(sparky.numLegs) // takes sparky and gives it 4 legs


//Example 2:
function Animale(name, numLegs) { // General
	this.name = name
	this.numLegs = numLegs
	this.isAlive = true

}

function Doggy(name) { // More specific
	this.name = name
	this.numLegs = '4 legs' 
}

function Beagal(name) { // Most Specific
	//this is public
	this.name = name
	this.saying = 'woof woof!'
	//this is private
	var breed = "Beagle"
	//Accessing private
	this.breed = function(){
		return breed
	}
	//Adding a password to show name
	this.showName = function(password) {
		if(password = 'stebs') {
			console.log('His name is ' + this.name)
		} else {
			console.log('try again!')
		}
	}
}

//inherits properties from Animal class
Doggy.prototype = new Animale()
//inherits properties from Dog Class 
Beagal.prototype = new Doggy() 

var myBeagal = new Beagal('Sparky') // new object created from Beagle Class

console.log(myBeagal.saying) // gets it from Beagle Class. Displays ‘Waddle Waddle!’
console.log(myBeagal.numLegs) // gets it from Dog class. Displays 4.
console.log (myBeagal.isAlive) // gets it from Animal class. Displays true.
console.log(myBeagal.breed()) // Displays 'Beagle'
console.log(myBeagal.showName('stebs'))

//Example 9:

//Using key to loop through value in key:value objects
var languages = {
	English: 'Hello',
	French: 'Bonjour',
	notALanguage: 5,
	Spanish: 'Hola'
}

for (var i in languages) {  //// key can be anything you want. It is a place holder for all the properties. It automatically loops through all properties in object.
	if (typeof languages[i] === 'string') { //if property value = string,
	console.log(languages[i]) // display the property values (Hello, Bonjour, Hola)
	console.log(i) // display property key
	}
}

//Using arrays and objects
var friends = [
    {
        username: 'Bill',
        password: 'microsoft'    
    }, // must add a comma
    {
        username: 'Steve',
        password: 'apple'
    }, // must add a comma
    {
        username: 'Darren',
        password: 'funk'
    }
]

function getInfo(){
	var username = 'Steve';// stores value in username
	var password = 'apple'; // stores value in password
	for (i=0; i < friends.length; i++) {
		console.log(friends.length)//3
		if(username == friends[i].username && password == friends[i].password) { // this loops. First it will loop through username[0,1,2] . If true, it will check if password is true.
			console.log(username + " is logged in!") //displays “username” is logged in! 		break // completely stops a function once username and password are true. Or you can use return.
		}
	}
}

getInfo();

// //Registering a User
// function registerUser() {
//       var registerUser = prompt('What is your username?')
//       var registerPassword =  prompt('What is your password?')
//       var newUser = { // create an object to be added to friends
// 		username: registerUser,
// 		password: registerPassword
// 	  }

// 	for (let p= 0; p < friends.length; p++) {
// 		if (registerUser === friends[p].username) {
// 			 console.log(friends[p].username + ' is taken')
// 			 console.log(friends[p])  // prevents from getting pushed. Needs to check password before pushing to newUser to friends.
// 	 	} else if (registerPassword.length < 8) {
// 			console.log('password is too short, include 8 or more characters')
// 			return
// 		} else {
// 			friends.push(newUser) // if username is not in use and password is 8 characters or longer, it pushes newUser// check to see if newUser is pushed
// 			console.log('Added new User')
//       console.log(friends)
// 		}
// 	}

// }

// registerUser();

// Operator Order of Precedence
var a = 2
b = 3
c = 4;

a=b=c;
console.log(a)

// Why?
// According to the javascript operator precedence list, "=" goes from right to left. 
//So first you take , "b" = "c" which returns 4. Now "a" = "4", which 
// returns "4".

//Coercion

//Example: 1

var m = (3 < 2 < 1)
console.log(m);

// Displays in console:
// true

// Why?
// According to the order or precedence, "<" goes from left to right. So 3 < 2 = false.
// False is then coerced to 0. How? Take Number(False) and the result is 0. Now 0 < 1,
// which equals true.

// Note: Number(True) = 1
//       Number(False) = 0
//       Number(undefined) = Nan
//       Number(null) = 0

//Example 2:

var h;

if (h || h === 0) {
  console.log('Something is there');
} else {
  console.log('Nothing here');
}

//Displays in console:
// 'Nothing here'

//if a // will return false so NOTHING DISPLAYS
//if a === 0 // will return true, so it displays 'something is there' because "a" is strictly equal to 0

// Other notes:
// undefined || 'hello' - returns 'hello'
// boolean('hello') - returns true
// 'hi' || 'hello' - returns 'hi' because it is the 1st one
// 0 || 'hello' - returns 'hello' because 0 is false

//Objects
function greet (person) {
  console.log ('Hi ' + person.firstname)
}

//person = {}
greet({
  firstname: 'Ken'
})

//person = {}
greet({
  firstname: 'John',
  lastname: 'Doe'
});

//Converting object literal to JSON***
var objectLiteral = {
  firstname: 'Mary',
  isAProgrammer: true
}
console.log(JSON.stringify(objectLiteral));

//***Converting JSON to object literal***
var json = '{"result":true, "count":42}';
console.log(JSON.parse(json));


//Adding a new property to an object 
var greetings = {
  spanish: 'hola',
  tagalog: 'kamusta'
}

greetings.international = function(chinese){
    console.log(this.tagalog + ' ' + chinese );
}

console.log(greetings.international('nihao'));
console.log(greetings.spanish)

//Passing arguments into functions
function log(q){
  //if passing a function it needs to be invoked again
  q();
}

//Displays: Hi
log(function() {
  console.log('hi')
});

//By Value (using values)***
var r = 3;
var t;

t = r; //t=3
r = 2; //r=2

console.log('r: ' + r);
console.log('t: ' + t);

//***By Reference (using objects)***
var c = {
  greeting: 'hi'
}
var d;

var d = c;
c.greeting = 'hello'; 

console.log(c.greeting); //hello
console.log(d.greeting); //hello

//Function to change c.greeting
function changeGreeting(obj){
  obj.greeting = 'Wuddup'; // d.greeting = 'Hola'
}

changeGreeting(c) //changes c.greeting
//Displays: wuddup
console.log(c.greeting);

//This
var cObject = {
  name: "The C object",
  log: function() {
    this.name = 'Updated c object'; //name can be changed to updated C object                                                         
    console.log(this.name)
  },
  setname: function(newname) {
      self = this; //self = cObject
      self.name = newname;
      console.log(self.name);
    }
}

//Updated c object
cObject.log();
//Updated C object again!!!
cObject.setname('Updated C object again!!!')

 //Arrays
 var arr = [
  1, //index 0
  false, //index 1
  { //index 2
    name: 'Steboogie',
    address: '111 Main St'
  }, //index 3
  function(name) {
    var greeting = 'hello';
    console.log(greeting + '' + name);
    //Displays: 1
    console.log(arguments.length)
  },
  'hello'
];

//Displays: Hello Steboogie
arr[3](arr[2].name);

//IIFE
var greeting = function(name) {
  console.log('Hello ' + name)
}('Dfaownk'); 

//Closures

//Example 1:

//Global
var lastname = 'Gangano';

//Outer
function greetangs (whattosay) { //<-- execution context 1
  var middlename = "David"
  //Inner
  function sentence (name) { //<-- execution context 2
    console.log(whattosay + ' ' + name + ' ' + middlename + ' ' + lastname)
  }
  //Inner function called
  sentence('Stebs')
}

greetangs('Sup')

//Example 2:
function buildFunctions() { //execution 1
  var arr = [];
  
  for (let i=0; i <= 4; i++) {
    arr.push( //execution 2
      function() { //execution 3
        console.log(i);
    }); // end function which is not invoked
  } // end for loop
    return arr;
} // end buildFunctions

buildFunctions()[0](); //0
buildFunctions()[1](); //1
buildFunctions()[2](); //2
buildFunctions()[3](); //3
buildFunctions()[4](); //4

//Why?
//buildFunctions() calls the whole thing
//using let pushes [0,1,2,3,4]
//[0] grabs the first element in arr since 'arr' is returned
//() calls the function inside arr.push

//Example 3:
var addTo = function (passed) {
  var add = function (inner) {
    return passed + inner;
  }
  return add
}

//or

// var addTo = function (passed) {
//   return add = function (inner) {
//     return passed + inner;
//   }
// }

console.log(addTo(10)(10))
//This make this code reusable
var addHundredPlus= addTo(100)
console.log(addHundredPlus(5))

//Binding
var person = {
  firstname: 'John',
  lastname: 'Doe',
  getFullName: function() {
    //"this" makes firstname and lastname global
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
}

var logName = function(lang1, lang2) {
  //getFullName can be accessed from another object
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ', ' + lang2);
}

//You can only bind objects to functions
//logName() is a now a new function in person object
var logPersonName = logName.bind(person, 'english', 'spanish')
// This is calling logName
console.log(logPersonName());

//Using IIFE
(function(lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + " " + lang2);
}).bind(person, 'chinese', 'mandarin')


//Inhertiance
var person5 = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function() {
    return this.firstname + ' ' + this.lastname;
  }
}

var john = {
  firstname: 'John',
  lastname: 'Doe'
}

//john now has getFullName() from person5
john.__proto__= person5;

console.log(john.getFullName());

// ***Using the "new" keyword in objects***

// Example 1:
function Person(lastname) {
  // console.log('This function is invoked'); //1
  // console.log(this); //2
  this.firstname = 'John',
  this.lastname = lastname
}

var john = new Person('Gangano');
//Displays: Gangano John
console.log(john.firstname, john.lastname);

// Displays in console:

// This function is invoked.

// Person {}

// Person {              
//   firstname: 'John',
//   lastname:  'Gangano'
// }

// What is happening?
// 1)'new' (operator) creates an empty Person object, {}. 
// 2)Then invokes the function ‘Person()'. 
// 'this' is now pointing to the empty object(new), that is why 'this.firstname' and
// 'this.lastname' is found in 'var = john'. 
// Property names with 'this' are inserted into empty object.
// If 'return' statement is used will not go into empty object

//***Pure prototypal inheritance***

//Example 1:
var person = {
  firstname: 'Default',
  lastname: 'Default',
  greet: function() {
    return 'Hi ' + this.firstname
  } 
}

//Creates an exact clone of person
var stebs = Object.create(person);

//Displays Hi Default
console.log(stebs.greet())

//Using a for-in loop
var arr = ['John', 'Jane', 'Jim']

for (var prop in arr){
  console.log(prop + ': ' + arr[prop])
}

// Displays in console:
// 0: John
// 1: Jane
// 2: Jim

//New Array Method
var cars = new Array("Saab", "Volvo", "BMW");
console.log(cars[0])

//Functional Programming

//Map = for-loop returns an array. can chain filter onto it
//forEach = for-loop returns value - doesnt return anything undefined. Better just for logging out numbers

//Example 1:
var somearray = [1,2,3,9]

var mapthis = somearray.map(function(item, index, arr) {
  console.log(arr[0]) //This loops 4 times 
  console.log('this is what is inside the array  ' + index + ':' + item)
})

console.log(mapthis)
//Displays: 
//1, 1, 1, 1
//this is what is inside the array  0:1
//this is what is inside the array  1:2
//this is what is inside the array  2:3
//this is what is inside the array  3:9
 

//Example 2:
// HTML
// <button onclick="myFunction()">Try it</button>
 
// <p id="demo"></p>
 
// Javascript
var numbers = [4, 9, 16, 25];

//function goes into map() 
function divide(item){
                return item * 2
}
 
function myFunction() {
    x = document.getElementById("demo")
    //insert function into map()
    x.innerHTML = numbers.map(divide);
}
 
// Displays:
// [8,18,32,50]

//Example 3:
// HTML
// <button onclick="myFunction()">Try it</button>
 
// <p>New array: <span id="demo"></span></p>
 
// Javascript
var people = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
];
 
function getFullName(item,index) {
    //item = persons
    var fullname = item.firstname + ' ' + item.lastname
    return fullname;
}
 
function myFunction() {
    document.getElementById("demo").innerHTML = people.map(getFullName);
}

console.log(people.map(getFullName))
 
// Displays:
// [Malcom Reynolds,Kaylee Frye,Jayne Cobb]


// Filter

// Example 1: 
// HTML
// <button onclick="myFunction()">Try it</button>
 
// <p id="demo"></p>
 
// Javascript
var numbas = [4, 9, 16, 25];
 
function priceFilter (num){
  return num < 10
}
 
function myFunction() {
    x = document.getElementById("demo")
    x.innerHTML = numbas.filter(priceFilter);
}

console.log(numbas.filter(priceFilter))
 
// Displays:
// 4,9

// Example 2:
[1,2,3,4].filter(function(item, idx, arr) {
  return item < 3;
})

// Displays:
// 1,2

//Reduce Method

//Sum up every population except China

let data = [
  {
    country: 'China',
    pop: 1409517397,
  },
  {
    country: 'India',
    pop: 1339180127,
  },
  {
    country: 'USA',
    pop: 324459463,
  },
  {
    country: 'Indonesia',
    pop: 263991379,
  }
]

let sum = data.reduce((acc, data) => {
 if (data.country !== 'China') {
  var array = []
  var m = data.pop.toString()
  array.push(m)
  console.log(m[0])
 }
  
}, 0);

console.log(sum)

// Date Practice
function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  userDate = new Date(userDate);
  //grabs the year and turns into string
  y = userDate.getFullYear().toString();
  //grabs the month but have to add +1
  m = (userDate.getMonth() + 1).toString();
  //grabs the day
  d = userDate.getDate().toString();
  //if m exists, add 0 before
  if (m.length == 1) m = '0' + m;
  //if d exists, add 0 day
  if (d.length == 1) d = '0' + d;
  return y + m + d;
}


//Displays 20141231
console.log(formatDate("12/31/2014"));

//Other methods for date:

// now.getHours() -12 //gets current hour
// now.getMinutes() //gets current minutes
// now.getSeconds() //gets current seconds

// now.setFullYear(2006)
// now.setDate(1-31) // day of the month
// now.setHours(0-23) // ex. 6 a.m.
// now.setMinutes(00-59) // minutes past the hour
// now.setSeconds(0-59) // seconds past the minute
// now.setMilliseconds(867)// milliseconds past the minute

//Removing a property from an object
function removeProperty(obj, prop) {
  if(obj.hasOwnProperty(prop)) {
    delete obj[prop];
    return true;
  } else {
      return false;
    }
}

// <div class="pic1">
//   <img src="sdlfjsdlf" class="remove">
// </div>
//
// <div class="pic2">
//   <img src="sdlfjsdlf" class="remove">
// </div>

//Remove an images parent node (div) when it is clicked
function setup() {
  var els = document.getElementsByClassName('remove');

  //length is 2
  for (var i = 0; i < els.length; i++) {
      //when the element is clicked, it is removed
      els[i].addEventListener('click', function() {
      this.parentNode.remove();
    });
  } 
  
}
