// Area of Triangle :

// const a = 5;
// const b = 6;
// const c = 7;

// const s = (a+b+c)/2;
// const area = Math.sqrt(s*(s-a)*(s-b)*(s-c));

// console.log("The area of triangle is: "+area.toFixed(2));

// Largest three no. 

let a = 10;
let b = 15;
let c = 25;

let largest;
if(a>=b && a>=c){
    largest = a;
}
else if(b>=a && b>=c) 
{
    largest = b;
}
else
{
    largest = c;
}
console.log("The largest no. is: " +largest);

