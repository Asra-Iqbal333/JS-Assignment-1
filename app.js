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
var year= 2020;
var birthYear = 1995;
var age = year - birthYear;
document.write("<h1> AGE CALCULATOR </H1>");
document.write("Current Year :" + year);
document.write("Birth Year :" +birthYear);
document.write("Your Age :" + age);
