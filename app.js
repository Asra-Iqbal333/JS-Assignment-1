//                            *** Chapter # 01 ***
//                                    ALERTS 
//                                   Task # 1 
// alert("Hello World!")


//                                   Task # 2 
// alert("Error! Please enter a valid password.")


//                                   Task # 3
// alert("Welcome to JS Land... \n " + "Happy coding!")


//                                   Task # 4
// alert("Welcome to JS Land...")
// alert("Happy coding! \n" + "Prevent this page from creating additional dialogs.")          

//                                   Task # 5
// console.log("Hello... I can run JS through my web browser's console.");


//                            *** Chapter # 02 ***
//                            VARIABLES FOR STRINGS
//                                   Task # 1
// var username;


//                                   Task # 2
// var myName = "Asra Iqbal";


//                                   Task # 3
// var message;
// message="Hello World";
// alert(message)


//                                   Task # 4
// var name = "Jhone Doe";
// alert(name)
// var age = "15 years old";
// alert(age)
// var qualification = "Certified Mobile Application Development";
// alert(qualification)


//                                   Task # 5
// var pizza = "PIZZA \n" + "PIZZ \n" + "PIZ \n" + "PI \n" + "P";
// alert(pizza) 


//                                   Task # 6
// var email = "asraiqbal300@gmail.com";
// alert("My email address is " + email)



//                                   Task # 7
// var book = "A Smarter Way To Learn JavaScript";
// alert("I am rying to learn from the book " + book)


//                                   Task # 8
/* <h1>Yah! I can write HTML content through JavaScript </h1> */
// document.write(h1) 


//                                   Task # 9
// var designs = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
// document.write(designs);
// alert(designs);


//                            *** Chapter # 03 ***
//                            VARIABLES FOR NUMBERS
//                                   Task # 1
// var age = 25;
// alert("I am " + age + " years old.")


//                                   Task # 2
// var tracker = "14 times";
// alert("You have visited this site " + tracker)


//                                   Task # 3
// var birthYear = 1995;
// document.write("My birth year is 1995 \n" + "Data type of my declared variable is number.")


//                                   Task # 4
// var name = "John Doe";
// var product = "T-shirt";
// var quantity = 5;
// document.write("<b>John Doe</b> ordered <b>5 T-shirt(s)</b> on XYZ Clothing store")


//                            *** Chapter # 04 ***
//                       VARIABLE NAMES: LEGAL & ILLEGAL
//                                   Task # 1
// var myName , myAge , username;


//                                   Task # 2
// *Legal Variable Names*
// var myName;
// var $myAge;
// var userName;
// var my_Js_Assignment;
// var userId;

// *Illegal Variable Names*
// var for;
// var js Projects;
// var 10User;
// var my-Password;
// var formula#2;


//                                   Task # 3
// document.write(<h1>"Rules for naming JS variables"</h1>);
// document.write("Variable names can only contain letters, numbers , dollar signs and underscores. For example $my_1stVariable ");
// document.write("Variables must begin with a letter , $ or _ . For example $name, _name or name");
// document.write("Variable names are case sensitive");
// document.write("Variable names should not be JS keywords");



//                            *** Chapter # 05 ***
//                              MATH EXPRESSIONS
//                                   Task # 1
// *Addition*
// var a = +prompt("enter first no");
// var b = +prompt("enter second no");
// var result = a + b;
// document.write("Sum of " + a + " and " + b + " is " + result);


//                                   Task # 2
// *Subtraction*
// var a = +prompt("enter first no");
// var b = +prompt("enter second no");
// var result = a - b;
// document.write("Difference of " + a + " and " + b + " is " + result);

// *Multiplication*
// var a = +prompt("enter first no");
// var b = +prompt("enter second no");
// var result = a * b;
// document.write("Product of " + a + " and " + b + " is " + result);

// *Division*
// var a = +prompt("enter first no");
// var b = +prompt("enter second no");
// var result = a / b;
// document.write("Division of " + a + " and " + b + " is " + result);

// *Modulus*
// var a = +prompt("enter first no");
// var b = +prompt("enter second no");
// var result = a % b;
// document.write("Modulus of " + a + " and " + b + " is " + result);


//                                   Task # 3
// var mathExpression;
// document.write("Value after variable declaration is " + mathExpression);
// mathExpression = 5;
// document.write("Initial value: " + mathExpression);
// mathExpression = mathExpression + 1;
// document.write("Value after increment is: " + mathExpression);
// mathExpression = mathExpression + 7;
// document.write("Value after addition is: " + mathExpression);
// mathExpression = mathExpression - 1;
// document.write("Value after decrement is: " + mathExpression);
// mathExpression = mathExpression % 3;
// document.write("The remainder is : " + mathExpression);


//                                   Task # 4
// document.write("Ticket Cost is 700");
// var ticketCost =  700;
// var tickets = prompt("how many tickets do you want to buy?")
// var total = ticketCost * tickets;
// document.write("Total cost to buy tickets to a movie is " + total);


//                                   Task # 5
// document.write("TABLE OF 3 <br>");
// for (var i = 1; i <= 10; i++) {
//     document.write("3" + "X" + i + "=" + 3 * i + "<br>")
// }


//                                   Task # 6
// var userTemp, tempInCelcius, tempInFahrenheit;
// userTemp = +prompt("enter your temperature");
// tempInCelcius = userTemp;
// tempInFahrenheit = userTemp;
// tempInCelcius = (tempInFahrenheit - 32) * 5 / 9;
// tempInFahrenheit = (tempInCelcius * 9 / 5) + 32;
// document.write(userTemp + " is " + tempInFahrenheit + "degrees F");
// document.write(userTemp + " is " + tempInCelcius + "degrees C");


//                                   Task # 7
// var item1 = 120;
// var item2 = 300;
// var quantity1, quantity2;
// var shipment = 100;
// document.write("<h1> Shopping Cart </h1>")
// quantity1 = +prompt("quantity of item 1");
// quantity2 = +prompt("quantity of item 2");
// var total = (item1*quantity1) + (item2*quantity2) + shipment;
// document.write("Price of Item 1 is " + item1);
// document.write("Quantity of item 1 is" + quantity1 );
// document.write("Price of Item 2 is " + item2);
// document.write("Quantity of item 2 is" + quantity2 );
// document.write("Shipping Charges = " + shipment);
// document.write("The Total Cost Of Your Order IS " + total);


//                                   Task # 8
// var marks_obt = +prompt("enter your total marks out of 500");
// var total_Marks = 500;
// var per = ((marks_obt / total_Marks) * 100) + "%";
// document.write("<h1> Mark Sheet </h1>");
// document.write("Total Marks = " + total_Marks);
// document.write("Obtained Marks = " + marks_obt);
// document.write("Percentage = " + per);


//                                   Task # 9
// var pkr, US$, riyal, total;
// pkr = +prompt("your money");
// US$ = 164.50 * pkr;
// riyal = 43.82 * pkr;
// total = US$ + riyal;
// document.write("Total Currency in PKR = " + total)


//                                   Task # 10
// var num = 3;
// num= ((num + 5) * 10) / 2;


//                                   Task # 11
// var year = 2020;
// var birthYear = +prompt("your birth year?");
// var age;
// age = year - birthYear;

// document.write("<h1> AGE CALCULATOR </h1>");
// document.write("Current Year :" + year + "<br/>");
// document.write("Birth Year :" + birthYear + "<br/>");
// document.write("Your Age :" + age);


//                                   Task # 12
// var radius = +prompt("enter radius");
// const pi = Math.PI;
// var circumference = 2 * pi * radius;
// var area = pi * Math.pow(radius, 2);
// document.write("Radius of a circle = " + radius + "<br/>");
// document.write("The circumference of a circle is " + circumference + "<br/>");
// document.write("The area is " + area);


//                                   Task # 13
// var snack = prompt("your favorite snack");
// var age = +prompt("your age");
// var max_age = +prompt("your max age according to you");
// var amnt = +prompt("how many can you eat a day ?")
// var total = (max_age - age) * amnt;
// document.write("Favorite Snack :" + snack + "<br/>");
// document.write("Your age :" + age + "<br/>");
// document.write("Estimated Max Age :" + max_age + "<br/>");
// document.write("Amount of snacks each day :" + amnt + "<br/>");
// document.write("You will need " + total + " amount of " + snack + " until the age of " + max_age)


//                            *** Chapter # 6-9 ***
//                              MATH EXPRESSIONS
//                                   Task # 1
// var num = +prompt("enter any number");
// document.write("Result: <br/> ");
// document.write("The Value of num is : " + num + "<br/>");
// document.write("The Value of ++num is : " + ++num + "<br/>");
// document.write("Now the Value of num is : " + num + "<br/>");
// document.write("The Value of num++ is : " + num++ + "<br/>");
// document.write("Now the Value of num is : " + num + "<br/>");
// document.write("The Value of --num is : " + --num + "<br/>");
// document.write("Now the Value of num is : " + num + "<br/>");
// document.write("The Value of num-- is : " + num-- + "<br/>");
// document.write("Now the Value of num is : " + num + "<br/>");


//                                   Task # 2


//                                   Task # 3
// var name = prompt("what's your name?");
// name = name.toUpper();
// alert("Hello " + name);


//                                   Task # 5
// var num = +prompt("enter your desired number");
// if (num === "NAN") {
//     document.write("Table of 5" + "<br/>")
//     for (var i = 1; i <= 10; i++) {
//         document.write(num + "x" + i + "=" + num * i + "<br/>")
//     }
// }
// else {
//     document.write("Table of " + num + "<br/>")
//     for (var i = 1; i <= 10; i++) {
//         document.write("5" + "x" + i + "=" + 5 * i + "<br/>")
//     }
// }



//                                   Task # 6


//                            *** Chapter # 9-11 ***
//                     USER count & CONDITIONAL STATEMENT
//                                   Task # 1
// var city = prompt("Your city name");
// if (city === "Karachi") {
//     alert("Welcome to the city of lights")
// }
// else {
//     alert("Welcome to " + city)
// }


//                                   Task # 2

// var gender = prompt("enter your gender");
// if (gender === "male") {
//     alert("Good Morning Sir.")
// }
// else {
//     alert("Good Morning Ma'am.")
// }



//                                   Task # 3


//                                   Task # 4
// var fuel = +prompt("Remaining fuel in your car (in litres)")
// if (
//     fuel <= 0.25
// ) {
//     alert("Please refill the fuel in your car.")
// }
// else {
//     alert("Go On! /n" + "Have a safe journey ahead.")
// }


//                                   Task # 5
// a)
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// b)
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// c)
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// e)
// if (true) {
//     alert("True");
// } if (false) {
//     alert("False");
// } 

// f)
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// } 


//                                   Task # 6
// var eng = +prompt("enter your Eng marks");
// var maths = +prompt("enter your Maths marks");
// var urdu = +prompt("enter your Urdu marks");
// var total = 300;
// var marks_obt = eng + maths + urdu;
// var Percentage = (marks_obt / total) * 100;
// if (Percentage >= 80) {
//     document.write("<h1> MARKS SHEET </h1>" + " <br/>");
//     document.write("Total Marks : 300 " + "<br/>" + "Marks Obtained: " + marks_obt + "<br/>" + "Percentage : " + Percentage + "<br/>" + "Grade : A-One " + "<br/>" + "Remarks : Excellent");
// }
// else if (Percentage >= 70) {
//     document.write("<h1> MARKS SHEET </h1>" + " <br/>");
//     document.write("Total Marks : 300 " + "<br/>" + "Marks Obtained: " + marks_obt + "<br/>" + "Percentage : " + Percentage + "<br/>" + "Grade : A" + "<br/>" + "Remarks : Good");
// }
// else if (Percentage >= 60) {
//     document.write("<h1> MARKS SHEET </h1>" + " <br/>");
//     document.write("Total Marks : 300 " + "<br/>" + "Marks Obtained: " + marks_obt + "<br/>" + "Percentage : " + Percentage + "<br/>" + "Grade : B" + "<br/>" + "Remarks : You need to improve");
// }
// else {
//     document.write("<h1> MARKS SHEET </h1>" + " <br/>");
//     document.write("Total Marks : 300 " + "<br/>" + "Marks Obtained: " + marks_obt + "<br/>" + "Percentage : " + Percentage + "<br/>" + "Grade : Fail" + "<br/>" + "Remarks : Sorry");
// }


//                                   Task # 7
// var sec_num = 3;
// var user_num = +prompt("Guess the secret number  \n " + "Hint:(1-10)");
// if (user_num === sec_num) {
//     alert("Bingo! Correct answer.")
// }
// if (user_num === 4) {
//     alert("Close enough to the correct answer.")
// }
// else {
//     alert("Try Again")
// }


//                                   Task # 8
// var num = +prompt("enter a num to check it's divisibility by 3");
// var rem = num % 3;
// if (rem === 0) {
//     alert("It is divisible by 3");
// }
// else {
//     alert("It is not divisible by 3");
// }


//                                   Task # 9
// var num = +prompt("enter a num");
// var odd, even;
// even_rem = num % 2;
// if (even_rem === 0) {
//     alert("It is an even no");
// }
// else {
//     alert("It is an odd no");
// }


//                                   Task # 10
// var T = +prompt("enter the temperature");
// if (T > 40) {
//     alert("It is too hot outside");
// }
// else if (T > 30) {
//     alert("The Weather today is Normal.");
// }
// else if (T > 20) {
//     alert("Today’s Weather is cool");
// }
// else if (T > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// }
// else {
//     alert("Soon , the snow will start");
// }


//                                   Task # 11
// var f_num = +prompt("enter first value");
// var s_num = +prompt("enter seccond value");
// var operator = prompt("enter the operator" + " <br/>" + "hint:(+ , - , * , / , %)");
// var result;
// if (operator === "+") {
//     result = f_num + s_num;
//     document.write("<h4> Output </h4>")
//     document.write("Sum of " + f_num + " and " + s_num + " = " + result);
// }
// else if (operator === "-") {
//     result = f_num - s_num;
//     document.write("<h4> Output </h4>")
//     document.write("Difference of " + f_num + " and " + s_num + " = " + result);
// }
// else if (operator === "*") {
//     result = f_num * s_num;
//     document.write("<h4> Output </h4>")
//     document.write("Product of " + f_num + " and " + s_num + " = " + result);
// }
// else if (operator === "/") {
//     result = f_num / s_num;
//     document.write("<h4> Output </h4>")
//     document.write("Quotient of " + f_num + " and " + s_num + " = " + result);
// }
// else if (operator === "%") {
//     result = f_num % s_num;
//     document.write("<h4> Output </h4>")
//     document.write("R of " + f_num + " and " + s_num + " = " + result);
// }


//                            *** Chapter # 12-13 ***
//              IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS 
//                                   Task # 1
// var user_num = prompt("Enter any character");
// if (user_num >= 65 && user_num <= 90) {
//     alert("Character is a capital letter.")
// }
// else if (user_num >= 97 && user_num <= 122) {
//     alert("Character is a small letter.")
// }


//                                   Task # 2

//                                   Task # 3
// var num = +prompt("enter a number");
// if (num > 0) {
//     alert("The number is positive.")
// }
// else if (num < 0) {
//     alert("The number is negative.")
// }
// if (num === 0) {
//     alert("The number is zero.")
// }


//                                   Task # 4
// var char = prompt("enter a string");
// if (char === "a", "e", "i", "o", "u") {
//     alert("True");
// }
// else {
//     alert("False");
// }


//                                   Task # 5
// var password = "AsraIqbal";
// var user_password = prompt("enter your password");
// if (user_password = "NaN") {
//     alert("Please enter your password");
// }
// else if (user_password == password) {
//     alert("Correct! The password you entered matches the original password");
// }
// else {
//     alert("Incorrect password");
// }

//                                   Task # 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     alert(greeting = "Good day");
// }
// else {
//     alert(greeting = "Good evening");
// }


//                                   Task # 7
// var time = +prompt("enter time like: 1900 = 7pm");
// if (time >= 0000 && time < 1200) {
//     alert("Good Morning!")
// }
// else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon!")
// }
// else if (time >= 1700 && time < 2100) {
//     alert("Good Evening!")
// }
// else if (time >= 2100 && time < 2359) {
//     alert("Good Night!")
// }


//                            *** Chapter # 14-16 ***
//                                    ARRAYS 
//                                   Task # 1
// var students = [];


//                                   Task # 2
// var students = new array ();


//                                   Task # 3
// var names = ["Ali", "Omer", "Akbar", "Saad", "Ibrahim"];


//                                   Task # 4
// var numbers = [10, 20, 30, 40, 50];


//                                   Task # 5


//                                   Task # 6
// var mixed_arr = ["Asra", 3, "Iqbal", true, 0];


//                                   Task # 7
// document.write("<h3> Qualifications : </h3>" + "<br/>")
// var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// document.write("1- " + qualification[0] + "<br/>");
// document.write("2- " + qualification[1] + "<br/>");
// document.write("3- " + qualification[2] + "<br/>");
// document.write("4- " + qualification[3] + "<br/>");
// document.write("5- " + qualification[4] + "<br/>");
// document.write("6- " + qualification[5] + "<br/>");
// document.write("7- " + qualification[6] + "<br/>");
// document.write("8- " + qualification[7] + "<br/>");


//                                   Task # 8
// var students = ["Michael", "John", "Tony"];
// var scores = [320, 230, 480];
// var total_Marks = 500;
// var Percentage = (scores[0, 1, 2] / total_Marks) * 100;
// document.write("Score of " + students[0] + " is " + scores[0] + "." + " Percentage :" + Percentage[0] + "%" + "<br/>");
// document.write("Score of " + students[1] + " is " + scores[1] + "." + " Percentage :" + Percentage[1] + "%" + "<br/>");
// document.write("Score of " + students[2] + " is " + scores[2] + "." + " Percentage :" + Percentage[2] + "%");


//                                   Task # 9
var colors = [" black ", " white ", " yellow ", " blue ", " pink "];

// a)
// var user_colors = prompt("which color do you want to add to the beginning?");
// colors.unshift(user_colors);
// document.write(colors);

// b)
// var user_colors = prompt("which color do you want to add to the last?");
// colors.push(user_colors);
// document.write(colors);

// c)
// var user_colors = prompt("Add two more colors to the beginning ?");
// colors.unshift(user_colors);
// document.write(colors);

// d)
// colors.shift();
// document.write(colors);

// e)
// colors.pop();
// document.write(colors);

// f)
// var user_colors = prompt("At which index do you want to add a color?");
// var user_colors1 = prompt("Color name ?");
// colors.splice(user_colors, 0, user_colors1 + "" );
// document.write(colors);

// g)
// var user_colors = prompt("At which index do you want to remove a color?");
// var user_colors0 = prompt("How many colors do you want to remove ?");
// colors.splice(user_colors, user_colors0 + "");
// document.write(colors);


//                                   Task # 10
// var scores = +prompt("enter scores of students");
// scores=[];
// document.write("Scores of students : " + scores + "<br/>");
// scores.sort();
// document.write("Ordered scores of students : " + scores);


//                                   Task # 11
// var cities = ["Karachi ", " Lahore ", " Islamabad ", " Quetta ", " Peshawar"];
// var selectedCities ;
// cities.slice(selectedCities);
// document.write("Cities List : " + cities + "<br/>");
// document.write("Selected Cities List : " + cities );


//                                   Task # 12
// var arr = ["This", "is", "my", "cat"];
// // var arr1 = arr.join(" " + arr);
// var arr1 = ["This " + "is " + "my " + "cat"];
// document.write("<h1>" + "Array : " + "<br/>" + arr + "</h1>");
// document.write("<h1>" + "String : " + "<br/>" + arr1 + "</h1>");


//                                   Task # 13


//                                   Task # 14


//                                   Task # 15
// var mobile_companies = ["Apple ", " Samsung ", " Motorola ", " Nokia ", " Sony ", " Haier "];
// document.write(mobile_companies);


//                            *** Chapter # 17-20 ***
//                                ARRAYS AND LOOP
//                                   Task # 1
// var multiArray = new Array (3);


//                                   Task # 2
// var multiArray = new Array(3);
// multiArray = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// document.write(multiArray);


//                                   Task # 3
// for (var count = 1; count <= 10; count++) {
//     document.write(count + "<br/>");
// }


//                                   Task # 4
// var table = +prompt("Enter a number to show it's multiplication table");
// var table_len = +prompt("Enter the length of the table");
// document.write("<h1>" + "MULTIPLICATION TABLE OF " + table + "<br/>" + "LENGTH : " + table_len + "<br/>" + "</h1>");
// for (var count = 1; count <= table_len; count++) {
//     document.write(table + " x " + count + " = " + table * count + "<br/>");
// }


//                                   Task # 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = fruits; i <= fruits; i++) {
//     document.write(i + "<br/>");
//     document.write("Element at index 0 is " + fruits[0] + "<br/>");
//     document.write("Element at index 1 is " + fruits[1] + "<br/>");
//     document.write("Element at index 2 is " + fruits[2] + "<br/>");
//     document.write("Element at index 3 is " + fruits[3] + "<br/>");
//     document.write("Element at index 4 is " + fruits[4] + "<br/>");
// }


//                                   Task # 6
var count, rev_count, even, odd, series;
document.write("<h3>" + "Counting : " + "<br/>" + "<h3>");
for (count = 1; count <= 15; count++) {
    document.write(count + ",");
}
document.write("<h3>" + "Reverse Counting : " + "<br/>" + "<h3>");
for (count = 10; count <= 1; count--) {
    document.write(count + ",");
}
document.write("<h3>" + "Even : " + "<br/>" + "<h3>");
for (count = 2; count <= 20; count + 2) {
    document.write(count + ",");
}
document.write("<h3>" + "Odd : " + "<br/>" + "<h3>");
for (count = 1; count <= 19; count + 2) {
    document.write(count + ",");
}
document.write("<h3>" + "Series : " + "<br/>" + "<h3>");
for (count = 2; count <= 20; count + 2) {
    document.write(count + "k" + ",");
}



//                                   Task # 7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var bakery = prompt("Welcome to Pak Bakery. What do you want to order Sir/Ma'am ?");
// if (bakery === A) {
//     alert(bakery + "is" + " available" + " at index " + "in our bakery.")
// }
// else {
//     alert("We are sorry. " + bakery + " is " + "not available" + " in our bakery.")
// }


//                                   Task # 8