let name = "Rina";
let age = 20;
let greeting = "Good Morning";

console.log(`my name is ${name} and my age is ${age}`);

alert(`Hello, ${greeting}`);

// namta start
let namtaNumber = 10;

console.log(`${namtaNumber} x 1 = ${namtaNumber * 1}`);
console.log(`${namtaNumber} x 2 = ${namtaNumber * 2}`);
console.log(`${namtaNumber} x 3 = ${namtaNumber * 3}`);
console.log(`${namtaNumber} x 4 = ${namtaNumber * 4}`);
console.log(`${namtaNumber} x 5 = ${namtaNumber * 5}`);
console.log(`${namtaNumber} x 6 = ${namtaNumber * 6}`);
console.log(`${namtaNumber} x 7 = ${namtaNumber * 7}`);
console.log(`${namtaNumber} x 8 = ${namtaNumber * 8}`);
console.log(`${namtaNumber} x 9 = ${namtaNumber * 9}`);
console.log(`${namtaNumber} x 10 = ${namtaNumber * 10}`);
// namta end

// if and else condition start
let live = "Dhaka";
let boyos = 10;
let sibling = 2;

// 1st if
if (live == "Dhaka") {
  // 2nd if
  if (boyos < 18) {
    // 3rd if
    if (sibling > 1) {
      console.log("Amra 2 bhai bon.");
    }
    // 3rd else
    else {
      console.log("Amr kono bhai bon nai.");
    }
  }
  // 2nd else
  else {
    console.log("Amar boyos 18 er beshi.");
  }
}
// 1st else
else {
  console.log("Ami Satkhira Theke.");
}

// if and else condition end

// Mark Sheet Part start

// else if condition start
let num = 97;
// 1st if condition 
if (num > 32 && num < 40) {
  console.log("You got D");
}
// 1st else if condition 
else if (num >= 40 && num < 50) {
  console.log("You got C");
  
}
// 2nd else if 
else if (num >= 50 && num < 60) {
  console.log("you got B");
  
}
// 3rd else if 
else if (num >= 60 && num < 70) {
  console.log(" You got A-");
  
}
// 4th else if 
else if (num >=70 && num < 80) {
  console.log("You got A");
  
}
// 5th else if 
else if (num >=80 && num <100) {
  console.log("You got A+");
  
}
// 1st else 
else {
  console.log("You got F");
  
}
// else if condition end

// Mark Sheet Part end

// For Loop Start
let i = 2;
for (i =2; i <= 20; i = i + 2) {
  console.log(i);
  
}
// For Loop End