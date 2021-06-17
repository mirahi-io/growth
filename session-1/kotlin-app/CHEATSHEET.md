# Kotlin Cheat Sheet

TO COMPLETE

JavaScript is a programming language that powers the dynamic behavior on most websites. Alongside HTML and CSS, it is a core technology that makes the web run.

## Architecture

#### <span style="color: IndianRed;">JAVASCRIPT</span>
```
<script>

</script>
```
#### <span style="color: DarkViolet;">KOTLIN</span>
Kotlin is based on a main function. This function is the strating point of every Kotlin program.
```
fun main(){

}
```
</br>

## Print to console
#### <span style="color: IndianRed;">JAVASCRIPT</span>
```
console.log('Hello Wolrd');
```
#### <span style="color: DarkViolet;">KOTLIN</span>
```
print("Hello World")
print("This one print things with a line break")
```
</br>

## Comments
#### <span style="color: IndianRed;">JAVASCRIPT</span> = <span style="color: DarkViolet;">KOTLIN</span>
```
// Single line comment
```
``` 
/*
Multi-line comment
*/
```
</br>

## Order of execution
#### <span style="color: IndianRed;">JAVASCRIPT</span>
```
<script>
    console.log('First execution');
    console.log('Second execution');
    console.log('Third execution');
</script>
```
#### <span style="color: DarkViolet;">KOTLIN</span>
```
func main (){
    println("First execution")
    println("Second execution")
    println("Third execution")
}
```
</br>

## Arithmetic Operators
#### <span style="color: IndianRed;">JAVASCRIPT</span> = <span style="color: DarkViolet;">KOTLIN</span>
```
// Addition
5 + 5

// Subtraction
10 - 5

// Multiplication
5 * 10

// Division
10 / 5

// Modulo
10 % 5

// Short syntax operation
var += 5
var -= 3
var *= 6
var /= 2

// Increment & Decrement operators
var++
var--
```
</br>




## Variables
#### <span style="color: IndianRed;">JAVASCRIPT</span>
```
//Mutable 
let temperature = 22;
temperature =25;

//Constant 
const coefficient = 1.5;
```
#### <span style="color: DarkViolet;">KOTLIN</span>
```
//Mutable
var temperature = 22
temperature = 25

//Immutable
val coefficient = 1.5
```
</br>




### String Concatenation
#### <span style="color: IndianRed;">JAVASCRIPT</span>
```
let streetAddress = '123 Main St.';
let cityState = 'Brooklyn, NYMay 30th'; 
let completeAdress = 'My adress is : ' + streetAddress + ' ' +cityState;
```
#### <span style="color: DarkViolet;">KOTLIN</span>
```
var streetAddress = "123 Main St."
var cityState = "Brooklyn, NY" 
var completeAdress = "My adress is : " + streetAddress + " " + cityState 
```
</br>

### String Interpolation
#### <span style="color: IndianRed;">JAVASCRIPT</span>
```
let adress = '120 Avenue Louise, BXL';
console.log('Our adress is ' ${adress});
```
#### <span style="color: DarkViolet;">KOTLIN</span>
```
var adress = "120 Avenue Louise, BXL" 
print("Our adress is " $adress) 
```
</br>

## Conditionals 

#### <span style="color: IndianRed;">JAVASCRIPT</span> = <span style="color: DarkViolet;">KOTLIN</span>
### Comparison operators 
```
myAge = 29
sisterAge = 22
cousinAge = 10
myWifeAge = 29
 
myAge > sisterAge   // true
myAge < cousinAge   // false
myAge >= cousinAge  // true
myAge <= sisterAge  // false
myAge == cousinAge  // false 
myAge != myAge      //false
myAge !== myWifeAge // false
myAge === myWifeAge // true

```

### Logical operators 
```
rain = false
sun = true
cloud = true
snow = false


!rain           // true 
sun || snow     // true
cloud && rain   // false

```


### IF
#### <span style="color: IndianRed;">JAVASCRIPT</span>
```
const isMailSent = true;
 
if (isMailSent) {
  console.log('Mail sent to recipient');
}
```
#### <span style="color: DarkViolet;">KOTLIN</span>
```
var morning = true
 
if (morning) {
  println("Rise and shine!")
}
```
</br>

### ELSE
#### <span style="color: IndianRed;">JAVASCRIPT</span>
```
const isTaskCompleted = false;
 
if (isTaskCompleted) {
  console.log('Task completed');
} else {
  console.log('Task incomplete');
}
```
#### <span style="color: DarkViolet;">KOTLIN</span>
```
var rained = false
 
if (rained) {
  println("No need to water the plants today.")
} else {
  println("Plants need to be watered!")
}
```
</br>

### ELSE-IF
#### <span style="color: IndianRed;">JAVASCRIPT</span>
```
const size = 10;
 
if (size > 100) {
  console.log('Big');
} else if (size > 20) {
  console.log('Medium');
} else if (size > 4) {
  console.log('Small');
} else {
  console.log('Tiny');
}
```
#### <span style="color: DarkViolet;">KOTLIN</span>
```
var age = 65
 
if (age < 18 ) {
  println("You are considered a minor.")
} else if (age < 60) {
  println("You are considered an adult.")
} else {
  println("You are considered a senior.")
}
```
</br>

### SWITCH (WHEN)
#### <span style="color: IndianRed;">JAVASCRIPT</span>
```
const food = 'salad';
 
switch (food) {
  case 'oyster':
    console.log('The taste of the sea');
    break;
  case 'pizza':
    console.log('A delicious pie');
    break;
  default:
    console.log('Enjoy your meal');
}
```
#### <span style="color: DarkViolet;">KOTLIN</span>
```
var grade = "A"
 
when(grade) {
  "A" -> println("Excellent job!")
  "B" -> println("Very well done!")
  "C" -> println("You passed!")
  else -> println("Close! Make sure to perpare more next time!")
}
```
</br>

## Loops

### FOR
#### <span style="color: IndianRed;">JAVASCRIPT</span>
```
for (let i = 0; i < 4; i += 1) {
  console.log(i);
};
```
#### <span style="color: DarkViolet;">KOTLIN</span>
```
for (item: Int in ints) {
    // ...
}
```
</br>

### WHILE
#### <span style="color: IndianRed;">JAVASCRIPT</span>
```
while (condition) {
  // code block to be executed
}
```
#### <span style="color: DarkViolet;">KOTLIN</span>
```
while (condition) {
    // code block to be executed
}
```
</br>

### DO-WHILE
#### <span style="color: IndianRed;">JAVASCRIPT</span>
```
do {
    x = x + i;
    i++;
} while (i < 5);
```
#### <span style="color: DarkViolet;">KOTLIN</span>
```
do {
    val y = 100
} while (y === otherVar)
```
</br>

[Source](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-introduction/cheatsheet)
